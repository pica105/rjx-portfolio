export interface Project {
  slug: string;
  name: string;
  description: string;
  image: string;
  url?: string;
  github: string;
}

export interface Capability {
  title: string;
  description: string;
  icon: string;
}
