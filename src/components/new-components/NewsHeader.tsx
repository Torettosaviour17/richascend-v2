// components/news/NewsHeader.tsx
import { motion } from "framer-motion";
import { useState } from "react";

interface NewsHeaderProps {
  onCategoryChange?: (category: string) => void;
  onRefresh?: () => void;
  refreshing?: boolean;
}

export const NewsHeader = ({ onCategoryChange, onRefresh, refreshing = false }: NewsHeaderProps) => {
  const [activeCategory, setActiveCategory] = useState("All News");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All News",
    "World",
    "Technology",
    "Business",
    "Health",
    "Entertainment",
    "Sports",
  ];

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Convert "All News" to "all" for the API
    const apiCategory = category === "All News" ? "all" : category;
    onCategoryChange?.(apiCategory);
  };

  const handleRefresh = () => {
    onRefresh?.();
  };

  return (
    <motion.header
      className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4 md:gap-0">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Daily Chronicle
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {currentDate}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
              aria-label="Refresh news"
            >
              <svg
                className={`w-5 h-5 ${refreshing ? 'animate-spin' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Categories Navigation */}
        <nav className="mt-4 pb-4">
          <ul className="flex flex-wrap gap-2 md:gap-4">
            {categories.map((category, index) => (
              <motion.li
                key={category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {category}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};