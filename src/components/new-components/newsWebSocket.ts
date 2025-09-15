// services/newsWebSocket.ts
export class NewsWebSocket {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private onMessageCallback:
    | ((data: {
        type: string;
        data: {
          id: number;
          title: string;
          summary: string;
          category: string;
          date: string;
          comments: number;
          imageUrl: string;
          categoryColor: string;
        };
      }) => void)
    | null = null;

  connect(
    onMessage: (data: {
      type: string;
      data: {
        id: number;
        title: string;
        summary: string;
        category: string;
        date: string;
        comments: number;
        imageUrl: string;
        categoryColor: string;
      };
    }) => void
  ) {
    this.onMessageCallback = onMessage;

    try {
      // In a real implementation, you would connect to your WebSocket server
      // this.ws = new WebSocket('wss://your-news-websocket-server.com');

      // For demo purposes, we'll simulate a WebSocket connection
      console.log("WebSocket connected (simulated)");

      // Simulate incoming messages
      setInterval(() => {
        if (Math.random() > 0.7) {
          // 30% chance of new news
          this.onMessageCallback?.({
            type: "NEW_NEWS",
            data: {
              id: Date.now(),
              title: "Breaking News Update",
              summary: "This just in - important development happening now.",
              category: "World",
              date: "Just now",
              comments: 0,
              imageUrl:
                "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1",
              categoryColor: "#3B82F6",
            },
          });
        }
      }, 10000);
    } catch (error) {
      console.error("WebSocket connection failed:", error);
      this.reconnect();
    }
  }

  private reconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      setTimeout(() => this.connect(this.onMessageCallback!), 2000);
    }
  }

  disconnect() {
    // this.ws?.close();
    this.onMessageCallback = null;
  }
}
