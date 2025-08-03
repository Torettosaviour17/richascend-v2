// pages/news.tsx
import { NewsHeader } from "../components/new-components/NewsHeader";
import { NewsGrid } from "../components/new-components/NewsGrid";
import { NewsSidebar } from "../components/new-components/NewsSidebar";
import Footer from "@/layout/Footer";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <NewsHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Top Stories
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
            </div>
            <NewsGrid />
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
