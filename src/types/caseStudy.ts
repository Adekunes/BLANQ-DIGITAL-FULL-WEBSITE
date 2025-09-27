export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  summary: string;
  problem: string[];
  strategy: string[];
  execution: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  image: string;
  category: 'web' | 'social' | 'content' | 'all';
  date: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}
