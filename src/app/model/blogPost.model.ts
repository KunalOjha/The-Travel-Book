export interface IBlogPost {
  id?: string;
  location: string;
  lat: number;
  lng: number;
  title: string;
  description: string;
  imageUrl: string;
  content?: any;
}
