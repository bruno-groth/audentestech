export interface Author {
  name: string
  avatar: string
  bio: string
}

export interface BlogPost {
  title: string
  slug: string
  date: string
  readingTime: string
  image: string
  tags: string[]
  excerpt: string
  content: string
  author: Author
  category: string
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  type: 'site' | 'landing' | 'app' | 'ecommerce'
  url: string
}

export interface Category {
  slug: string
  name: string
}

export interface FormData {
  name: string
  email: string
  project_type: string
  message: string
}