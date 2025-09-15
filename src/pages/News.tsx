// pages/news.tsx
import { NewsHeader } from "../components/new-components/NewsHeader";
import { NewsGrid } from "../components/new-components/NewsGrid";
import { NewsSidebar } from "../components/new-components/NewsSidebar";
import Footer from "@/layout/Footer";
import { useState } from "react";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [refreshing, setRefreshing] = useState(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1000));
    setRefreshing(false);
    // The NewsGrid will detect the category change and refresh automatically
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <NewsHeader 
        onCategoryChange={handleCategoryChange}
        onRefresh={handleRefresh}
        refreshing={refreshing}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <NewsGrid category={selectedCategory} />
          </div>

          <div className="lg:w-1/4">
            <NewsSidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}