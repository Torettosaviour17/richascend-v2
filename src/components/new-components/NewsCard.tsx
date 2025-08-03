// components/news/NewsCard.tsx
import { motion } from "framer-motion";

type NewsCardProps = {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  comments: number;
  imageUrl: string;
  categoryColor: string;
};

export const NewsCard = ({
  id,
  title,
  summary,
  category,
  date,
  comments,
  imageUrl,
  categoryColor,
}: NewsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: id * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white"
          style={{ backgroundColor: categoryColor }}
        >
          {category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {summary}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
          <span>{date}</span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2z" />
            </svg>
            {comments}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
