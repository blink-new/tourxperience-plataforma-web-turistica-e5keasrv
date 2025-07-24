export interface Activity {
  id: string
  title: string
  description: string
  shortDescription: string
  price: number
  originalPrice?: number
  currency: string
  rating: number
  reviewCount: number
  duration: string
  category: string
  destination: string
  images: string[]
  highlights: string[]
  included: string[]
  meetingPoint: string
  languages: string[]
  cancellationPolicy: string
  provider: {
    id: string
    name: string
    rating: number
    reviewCount: number
    verified: boolean
  }
  availability: {
    dates: string[]
    times: string[]
  }
  maxGroupSize: number
  minAge: number
  difficulty: 'easy' | 'moderate' | 'challenging'
  tags: string[]
}

export interface Review {
  id: string
  userId: string
  userName: string
  userAvatar: string
  rating: number
  title: string
  comment: string
  date: string
  helpful: number
  verified: boolean
}

export interface CartItem {
  id: string
  activityId: string
  activity: Activity
  date: string
  time: string
  participants: number
  totalPrice: number
}

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  preferences?: {
    language: string
    currency: string
  }
}

export interface Booking {
  id: string
  userId: string
  activityId: string
  activity: Activity
  date: string
  time: string
  participants: number
  totalPrice: number
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
  bookingReference: string
  qrCode?: string
  createdAt: string
  updatedAt: string
}

export interface Provider {
  id: string
  name: string
  description: string
  logo?: string
  website?: string
  contactEmail: string
  contactPhone?: string
  address?: string
  apiEndpoint?: string
  apiKey?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Destination {
  id: string
  name: string
  country: string
  description: string
  image: string
  activityCount: number
  popularActivities: string[]
  coordinates?: {
    lat: number
    lng: number
  }
}

export interface Category {
  id: string
  name: string
  description: string
  icon: string
  activityCount: number
  popularActivities: string[]
}