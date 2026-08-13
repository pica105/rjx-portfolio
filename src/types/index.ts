export interface Project {
  slug: string;
  name: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
  github: string;
  proofType: 'screenshot' | 'architecture';
}

export interface Capability {
  title: string;
  description: string;
  icon: string;
}
