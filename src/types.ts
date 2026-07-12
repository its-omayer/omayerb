export interface WorkItem {
  id: string;
  year: string;
  title: string;
  description: string;
  category: string;
  image: string;
}


export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string; // Lucide icon name
}

export interface TestimonialItem {
  id: string;
  name: string;
  occupation: string;
  rating: number;
  review: string;
  photo: string;
}
