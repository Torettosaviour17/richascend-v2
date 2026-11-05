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
export class NewsService {
  static getInstance() {
    return new NewsService();
  }
  async fetchNews(): Promise<NewsArticle[]> {
    return [];
  }
}
