export interface Image {
  src: string
  alt: string
  width?: number
  height?: number
  blurDataUrl?: string
}

export interface SEOMetadata {
  title: string
  description: string
  ogImage?: string
  noindex?: boolean
  canonical?: string
}

export interface ContentBase {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  seo: SEOMetadata
}

export interface BlogPostContent extends ContentBase {
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: Image
  author: Author
  category: string
  tags: string[]
  readingTime: string
}

export interface ServiceContent extends ContentBase {
  title: string
  slug: string
  description: string
  features: string[]
  icon: string
  image: Image
}

export interface PortfolioContent extends ContentBase {
  title: string
  slug: string
  description: string
  coverImage: Image
  gallery: Image[]
  client: string
  technologies: string[]
  category: string
  url?: string
}