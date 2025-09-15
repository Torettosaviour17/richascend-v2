// services/newsService.ts
export interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  comments: number;
  imageUrl: string;
  categoryColor: string;
  source?: string;
  url?: string;
}

// Mock API service - replace with real API integration
export class NewsService {
  private static instance: NewsService;
  private lastUpdate: number = 0;
  private cacheDuration = 2 * 60 * 1000; // 2 minutes cache

  private constructor() {}

  static getInstance(): NewsService {
    if (!NewsService.instance) {
      NewsService.instance = new NewsService();
    }
    return NewsService.instance;
  }

  async fetchNews(category: string = "all"): Promise<NewsArticle[]> {
    // Check if we have recent cached data
    const now = Date.now();
    if (now - this.lastUpdate < this.cacheDuration) {
      return this.getCachedNews(category);
    }

    try {
      // In a real implementation, you would fetch from an actual API
      // const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=YOUR_API_KEY`);
      // const data = await response.json();

      // For demo purposes, we'll use mock data with some randomization
      const mockNews = this.generateMockNews(category);
      this.lastUpdate = now;
      localStorage.setItem(
        "newsCache",
        JSON.stringify({
          data: mockNews,
          timestamp: now,
        })
      );

      return mockNews;
    } catch (error) {
      console.error("Failed to fetch news:", error);
      return this.getCachedNews(category);
    }
  }

  private getCachedNews(category: string): NewsArticle[] {
    const cached = localStorage.getItem("newsCache");
    if (cached) {
      const { data } = JSON.parse(cached);
      // Return filtered data by category if not "all"
      if (category === "all") return data;
      return data.filter(
        (item: NewsArticle) =>
          item.category.toLowerCase() === category.toLowerCase()
      );
    }
    return this.generateMockNews(category);
  }

  private generateMockNews(category: string): NewsArticle[] {
    const categories = [
      "World",
      "Technology",
      "Business",
      "Health",
      "Sports",
      "Entertainment",
    ];
    const colors = [
      "#3B82F6",
      "#EF4444",
      "#10B981",
      "#F59E0B",
      "#EC4899",
      "#8B5CF6",
    ];

    // Filter by category if specified
    const selectedCategories = category === "all" ? categories : [category];

    return selectedCategories.flatMap((cat, catIndex) => {
      const categoryColor = colors[catIndex % colors.length];
      return Array.from({ length: 2 }, (_, i) => ({
        id: catIndex * 10 + i + 1,
        title: this.generateTitle(cat),
        summary: this.generateSummary(cat),
        category: cat,
        date: this.generateDate(),
        comments: Math.floor(Math.random() * 100),
        imageUrl: this.getImageUrl(cat, i),
        categoryColor,
        source: "News API",
        url: "#",
      }));
    });
  }

  private generateTitle(category: string): string {
    const titles = {
      World: [
        "Global Summit Addresses Climate Change Crisis",
        "International Talks Yield New Trade Agreements",
        "World Leaders Gather for Peace Conference",
      ],
      Technology: [
        "Breakthrough in AI Research Announced",
        "New Smartphone Features Revolutionize Mobile Experience",
        "Tech Giant Unveils Groundbreaking Innovation",
      ],
      Business: [
        "Stock Market Reaches Record Highs",
        "Major Merger Creates Industry Giant",
        "Economic Indicators Show Strong Growth",
      ],
      Health: [
        "New Medical Discovery Offers Hope for Patients",
        "Health Organization Issues Important Guidelines",
        "Breakthrough Treatment Approved for Use",
      ],
      Sports: [
        "Championship Game Ends in Historic Victory",
        "Underdog Team Stuns in Tournament Upset",
        "Athlete Breaks World Record in Stunning Performance",
      ],
      Entertainment: [
        "Award Show Celebrates Industry's Best",
        "Blockbuster Film Smashes Box Office Records",
        "Music Festival Draws Record Crowds",
      ],
    };

    const categoryTitles =
      titles[category as keyof typeof titles] || titles.World;
    return categoryTitles[Math.floor(Math.random() * categoryTitles.length)];
  }

  private generateSummary(category: string): string {
    return `Recent developments in ${category.toLowerCase()} have captured global attention. Experts are analyzing the implications and potential impact on various sectors. Stay tuned for more updates as this story develops.`;
  }

  private generateDate(): string {
    const hoursAgo = Math.floor(Math.random() * 24);
    if (hoursAgo === 0) return "Just now";
    if (hoursAgo === 1) return "1 hour ago";
    return `${hoursAgo} hours ago`;
  }

  private getImageUrl(category: string, index: number): string {
    const baseUrl = "https://images.unsplash.com/photo-";
    const images = {
      World: ["1588681664899-f142ff2dc9b1", "1464800956163-e6cd6f5c5eb3"],
      Technology: ["1553877522-43269d4ea984", "1518709268805-4e9072c6bbcf"],
      Business: ["1551288049-bebda4e38f71", "1460925895917-afdab827c52f"],
      Health: ["1517976384346-3136801d605d", "1576091160557-3cfcf5c3d8d9"],
      Sports: ["1461896836934-ffe607ba8211", "1571019613454-1cb2f99e6c6d"],
      Entertainment: [
        "1470225620780-dba8ba36b745",
        "1506157786151-51b7a6c96643",
      ],
    };

    const categoryImages =
      images[category as keyof typeof images] || images.World;
    return `${baseUrl}${
      categoryImages[index % categoryImages.length]
    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80`;
  }
}
