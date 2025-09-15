// components/news/NewsGrid.tsx
import { NewsCard } from "./NewsCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NewsService, NewsArticle } from "./newsService";
import { NewsWebSocket } from "./newsWebSocket"; // Import the WebSocket service

interface NewsGridProps {
  category?: string;
  refreshInterval?: number; // in milliseconds
}

export const NewsGrid = ({
  category = "all",
  refreshInterval = 300000,
}: NewsGridProps) => {
  const [newsItems, setNewsItems] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [hasNewUpdates, setHasNewUpdates] = useState(false);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const newsService = NewsService.getInstance();
      const news = await newsService.fetchNews(category);
      setNewsItems(news);
      setLastUpdated(new Date());
      setHasNewUpdates(false); // Reset new updates flag
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();

    // Set up interval for refreshing news
    const intervalId = setInterval(fetchNews, refreshInterval);

    return () => clearInterval(intervalId);
  }, [category, refreshInterval]);

  // WebSocket integration for real-time updates
  useEffect(() => {
    const newsWebSocket = new NewsWebSocket();

    const handleWebSocketMessage = (data: {
      type: string;
      data: NewsArticle;
    }) => {
      if (data.type === "NEW_NEWS") {
        // Check if the new news matches the current category
        if (
          category === "all" ||
          data.data.category.toLowerCase() === category.toLowerCase()
        ) {
          // Add new news to the top of the list
          setNewsItems((prev) => [data.data, ...prev.slice(0, 5)]);
          setLastUpdated(new Date());
          setHasNewUpdates(true);

          // Auto-hide the update indicator after 5 seconds
          setTimeout(() => setHasNewUpdates(false), 5000);
        }
      }
    };

    newsWebSocket.connect(handleWebSocketMessage);

    return () => {
      newsWebSocket.disconnect();
    };
  }, [category]); // Re-run if category changes

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg animate-pulse"
          >
            <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
            <div className="p-5">
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {category === "all" ? "Latest News" : `${category} News`}
          </h2>
          {hasNewUpdates && (
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Live Update
            </span>
          )}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {lastUpdated.toLocaleTimeString()}
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={lastUpdated.getTime()} // Re-animate when data changes
      >
        {newsItems.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </motion.div>

      {newsItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 dark:text-gray-400 text-lg">
            No news articles found.
          </div>
        </div>
      )}
    </div>
  );
};
