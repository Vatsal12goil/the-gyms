export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  tags: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  popular?: boolean;
  features: string[];
  color: "standard" | "gold" | "platinum";
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  result: string;
  memberSince: string;
  plan: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  image: string;
  specialization: string[];
  experience: string;
  clients: number;
  bio: string;
  certifications: string[];
  instagram?: string;
}

export interface GymClass {
  id: string;
  name: string;
  description: string;
  instructor: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  schedule: string[];
  capacity: number;
  image: string;
  category: string;
}
