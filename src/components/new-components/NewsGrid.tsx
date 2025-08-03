// components/news/NewsGrid.tsx
import { NewsCard } from "./NewsCard";
import { motion } from "framer-motion";

type NewsItem = {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  comments: number;
  imageUrl: string;
  categoryColor: string;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Global Leaders Gather for Climate Summit in Paris",
    summary:
      "World leaders convene to discuss urgent climate action as temperatures continue to rise globally. New agreements expected to be announced.",
    category: "World",
    date: "2 hours ago",
    comments: 42,
    imageUrl:
      "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    categoryColor: "#3B82F6",
  },
  {
    id: 2,
    title: "Breakthrough in Quantum Computing Announced",
    summary:
      "Scientists achieve quantum supremacy with new processor that solves complex problems in minutes instead of years.",
    category: "Technology",
    date: "5 hours ago",
    comments: 87,
    imageUrl:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    categoryColor: "#EF4444",
  },
  {
    id: 3,
    title: "Stock Markets Reach All-Time High Amid Economic Recovery",
    summary:
      "Global markets surge as economic indicators show strong recovery signals. Experts predict continued growth through Q3.",
    category: "Business",
    date: "8 hours ago",
    comments: 31,
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    categoryColor: "#10B981",
  },
  {
    id: 4,
    title: "New Alzheimer's Treatment Shows Promising Results in Trials",
    summary:
      "Phase 3 clinical trials show significant improvement in cognitive function for patients with early-stage Alzheimer's.",
    category: "Health",
    date: "12 hours ago",
    comments: 104,
    imageUrl:
      "https://images.unsplash.com/photo-1517976384346-3136801d605d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    categoryColor: "#F59E0B",
  },
  {
    id: 5,
    title: "Underdog Team Wins Championship in Historic Final",
    summary:
      "After an incredible season, the underdogs clinch the championship title with a stunning last-minute goal.",
    category: "Sports",
    date: "1 day ago",
    comments: 223,
    imageUrl:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    categoryColor: "#EC4899",
  },
  {
    id: 6,
    title: "Music Festival Breaks Attendance Records Despite Weather",
    summary:
      "Annual music festival draws record crowds with headlining performances from top international artists.",
    category: "Entertainment",
    date: "1 day ago",
    comments: 156,
    imageUrl:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    categoryColor: "#8B5CF6",
  },
];

export const NewsGrid = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {newsItems.map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}
    </motion.div>
  );
};
