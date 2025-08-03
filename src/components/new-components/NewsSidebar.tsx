// components/news/NewsSidebar.tsx
import { motion } from "framer-motion";

export const NewsSidebar = () => {
  const trendingItems = [
    {
      id: 1,
      title: "Major Earthquake Strikes Pacific Region",
      category: "World",
      views: "45k",
    },
    {
      id: 2,
      title: "Tech Giant Unveils Revolutionary Smartphone",
      category: "Technology",
      views: "38k",
    },
    {
      id: 3,
      title: "New Policy to Impact Housing Market",
      category: "Politics",
      views: "32k",
    },
    {
      id: 4,
      title: "Scientists Discover New Species in Amazon",
      category: "Science",
      views: "28k",
    },
    {
      id: 5,
      title: "Historic Sports Deal Breaks Records",
      category: "Sports",
      views: "25k",
    },
  ];

  const categories = [
    { name: "World News", count: 128 },
    { name: "Politics", count: 76 },
    { name: "Business & Finance", count: 94 },
    { name: "Technology", count: 112 },
    { name: "Science", count: 65 },
    { name: "Health", count: 87 },
    { name: "Entertainment", count: 53 },
    { name: "Sports", count: 121 },
  ];

  return (
    <div className="space-y-6">
      {/* Trending News */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          Trending Now
        </h2>
        <div className="space-y-4">
          {trendingItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <div className="text-2xl font-bold text-gray-300 dark:text-gray-600">
                {index + 1}
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-xs">
                  <span className="text-gray-600 dark:text-gray-400">
                    {item.category}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {item.views} views
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          News Categories
        </h2>
        <div className="space-y-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <span className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">
                {category.name}
              </span>
              <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium">
                {category.count}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Newsletter */}
      <motion.div
        className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-5 shadow-md"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl font-bold mb-3 text-white">Newsletter</h2>
        <p className="text-blue-100 mb-4">
          Stay updated with our latest news and insights.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </motion.div>
    </div>
  );
};
