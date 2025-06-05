export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  type: 'web' | 'android';
  githubUrl: string;
  liveUrl?: string;
  playStoreUrl?: string;
}