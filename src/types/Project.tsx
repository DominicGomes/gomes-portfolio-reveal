export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
  category: 'web' | 'android';
  technologies: string[];
  features?: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  contributions?: string[];
  highlightColorClass?: string;
}