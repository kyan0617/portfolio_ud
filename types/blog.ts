export type Blog = {
  publishedAt: string;
  title: string;
  content: string;
  category: string;
  description: string;
  postName: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  }
}