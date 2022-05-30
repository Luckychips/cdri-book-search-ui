export interface Book {
  author: string;
  description: string;
  discount: string;
  image: string;
  isbn: string;
  link: string;
  price: string;
  pubdate: string;
  publisher: string;
  title: string;
}

export interface ResponseData {
  rss?: any;
  channel?: any;
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: Book[];
}
