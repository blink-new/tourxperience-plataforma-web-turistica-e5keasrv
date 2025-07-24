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
  notIncluded: string[]
  meetingPoint: string
  languages: string[]
  maxGroupSize: number
  minAge: number
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  cancellationPolicy: string
  providerId: string
  providerName: string
  providerRating: number
  availability: {
    date: string
    times: string[]
    spotsLeft: number
  }[]
  coordinates: {
    lat: number
    lng: number
  }
  tags: string[]
  safetyMeasures: string[]
  whatToBring: string[]
  importantInfo: string[]
}

export const mockActivities: Activity[] = [
  // CDMX Activities
  {
    id: 'cdmx-teotihuacan-tour',
    title: 'Teotihuacán Pyramids & Tequila Tasting Tour',
    description: 'Explore the ancient pyramids of Teotihuacán, climb the Pyramid of the Sun and Moon, and enjoy a traditional tequila tasting experience with authentic Mexican lunch.',
    shortDescription: 'Ancient pyramids tour with tequila tasting',
    price: 89,
    originalPrice: 120,
    currency: 'USD',
    rating: 4.8,
    reviewCount: 2847,
    duration: '8 hours',
    category: 'sightseeing',
    destination: 'Ciudad de México',
    images: [
      'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800',
      'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=800',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'
    ],
    highlights: [
      'Climb the Pyramid of the Sun (65m high)',
      'Walk the Avenue of the Dead',
      'Professional tequila tasting session',
      'Traditional Mexican lunch included',
      'Small group experience (max 12 people)'
    ],
    included: [
      'Round-trip transportation from CDMX',
      'Professional bilingual guide',
      'Entrance fees to Teotihuacán',
      'Tequila tasting with 5 varieties',
      'Traditional Mexican lunch',
      'Bottled water'
    ],
    notIncluded: [
      'Tips for guide and driver',
      'Personal expenses',
      'Additional drinks during lunch'
    ],
    meetingPoint: 'Zócalo Metro Station, Exit 2',
    languages: ['Spanish', 'English'],
    maxGroupSize: 12,
    minAge: 8,
    difficulty: 'Moderate',
    cancellationPolicy: 'Free cancellation up to 24 hours before',
    providerId: 'mexico-adventures-001',
    providerName: 'Mexico Adventures',
    providerRating: 4.9,
    availability: [
      { date: '2024-01-25', times: ['08:00', '09:00'], spotsLeft: 8 },
      { date: '2024-01-26', times: ['08:00', '09:00'], spotsLeft: 5 },
      { date: '2024-01-27', times: ['08:00'], spotsLeft: 12 }
    ],
    coordinates: { lat: 19.6925, lng: -98.8438 },
    tags: ['UNESCO World Heritage', 'Ancient History', 'Cultural', 'Food & Drink'],
    safetyMeasures: [
      'COVID-19 safety protocols',
      'First aid kit on board',
      'Licensed and insured transportation',
      'Emergency contact 24/7'
    ],
    whatToBring: [
      'Comfortable walking shoes',
      'Sun hat and sunscreen',
      'Camera',
      'Valid ID'
    ],
    importantInfo: [
      'Tour operates rain or shine',
      'Moderate walking required',
      'Not suitable for people with mobility issues',
      'Minimum 2 people required'
    ]
  },
  {
    id: 'cdmx-xochimilco-trajineras',
    title: 'Xochimilco Floating Gardens & Trajinera Boat Tour',
    description: 'Navigate the ancient canals of Xochimilco on a colorful trajinera boat, enjoy mariachi music, traditional food, and learn about this UNESCO World Heritage site.',
    shortDescription: 'Colorful boat tour through floating gardens',
    price: 45,
    currency: 'USD',
    rating: 4.6,
    reviewCount: 1923,
    duration: '4 hours',
    category: 'sightseeing',
    destination: 'Ciudad de México',
    images: [
      'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=800',
      'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800'
    ],
    highlights: [
      'Traditional trajinera boat ride',
      'Live mariachi music',
      'Floating gardens exploration',
      'Local food and drinks available',
      'UNESCO World Heritage site'
    ],
    included: [
      'Trajinera boat rental (2 hours)',
      'Professional guide',
      'Welcome drink',
      'Transportation from meeting point'
    ],
    notIncluded: [
      'Food and additional drinks',
      'Mariachi music (optional, $20 USD)',
      'Tips'
    ],
    meetingPoint: 'Xochimilco Pier, Embarcadero Nuevo Nativitas',
    languages: ['Spanish', 'English'],
    maxGroupSize: 20,
    minAge: 0,
    difficulty: 'Easy',
    cancellationPolicy: 'Free cancellation up to 24 hours before',
    providerId: 'xochimilco-tours-002',
    providerName: 'Xochimilco Cultural Tours',
    providerRating: 4.7,
    availability: [
      { date: '2024-01-25', times: ['10:00', '14:00', '16:00'], spotsLeft: 15 },
      { date: '2024-01-26', times: ['10:00', '14:00'], spotsLeft: 8 }
    ],
    coordinates: { lat: 19.2647, lng: -99.1031 },
    tags: ['UNESCO World Heritage', 'Cultural', 'Family Friendly', 'Traditional'],
    safetyMeasures: [
      'Life jackets provided',
      'Certified boat operators',
      'Emergency communication equipment'
    ],
    whatToBring: [
      'Sunscreen',
      'Camera',
      'Cash for food and drinks'
    ],
    importantInfo: [
      'Boats accommodate up to 20 people',
      'Food vendors available on floating platforms',
      'Best visited on weekends for full experience'
    ]
  },

  // Cancún Activities
  {
    id: 'cancun-chichen-itza-cenote',
    title: 'Chichen Itza & Sacred Cenote Full Day Tour',
    description: 'Visit the New Wonder of the World, Chichen Itza, swim in a sacred cenote, and enjoy a buffet lunch in this comprehensive Mayan cultural experience.',
    shortDescription: 'Chichen Itza pyramid & cenote swimming',
    price: 95,
    originalPrice: 130,
    currency: 'USD',
    rating: 4.9,
    reviewCount: 3421,
    duration: '12 hours',
    category: 'sightseeing',
    destination: 'Cancún',
    images: [
      'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=800'
    ],
    highlights: [
      'New Wonder of the World - Chichen Itza',
      'Swim in sacred Ik Kil Cenote',
      'Professional archaeological guide',
      'Traditional Yucatecan buffet lunch',
      'Visit colonial town of Valladolid'
    ],
    included: [
      'Round-trip transportation',
      'Professional bilingual guide',
      'Entrance to Chichen Itza',
      'Cenote swimming experience',
      'Buffet lunch',
      'Visit to Valladolid'
    ],
    notIncluded: [
      'Drinks during lunch',
      'Professional photos (optional)',
      'Tips'
    ],
    meetingPoint: 'Hotel pickup available in Cancun Hotel Zone',
    languages: ['Spanish', 'English', 'French'],
    maxGroupSize: 45,
    minAge: 5,
    difficulty: 'Easy',
    cancellationPolicy: 'Free cancellation up to 24 hours before',
    providerId: 'mayan-heritage-003',
    providerName: 'Mayan Heritage Tours',
    providerRating: 4.8,
    availability: [
      { date: '2024-01-25', times: ['07:00'], spotsLeft: 20 },
      { date: '2024-01-26', times: ['07:00'], spotsLeft: 35 }
    ],
    coordinates: { lat: 20.6843, lng: -88.5678 },
    tags: ['UNESCO World Heritage', 'Ancient History', 'Swimming', 'Cultural'],
    safetyMeasures: [
      'Life jackets at cenote',
      'First aid certified guides',
      'Emergency contact system'
    ],
    whatToBring: [
      'Swimming clothes',
      'Towel',
      'Biodegradable sunscreen',
      'Camera'
    ],
    importantInfo: [
      'Early departure (7:00 AM)',
      'Long day tour (12 hours)',
      'Comfortable shoes recommended'
    ]
  },

  // Playa del Carmen Activities
  {
    id: 'playa-tulum-cenote-adventure',
    title: 'Tulum Ruins & Cenote Adventure with Lunch',
    description: 'Explore the stunning clifftop Mayan ruins of Tulum overlooking the Caribbean Sea, then cool off in a crystal-clear cenote with snorkeling equipment included.',
    shortDescription: 'Tulum ruins & cenote snorkeling adventure',
    price: 75,
    currency: 'USD',
    rating: 4.7,
    reviewCount: 2156,
    duration: '8 hours',
    category: 'outdoor',
    destination: 'Playa del Carmen',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=800'
    ],
    highlights: [
      'Clifftop Mayan ruins with ocean views',
      'Snorkeling in crystal-clear cenote',
      'Professional archaeological guide',
      'Traditional Mexican lunch',
      'Small group experience'
    ],
    included: [
      'Transportation from Playa del Carmen',
      'Entrance to Tulum ruins',
      'Cenote access and snorkeling gear',
      'Professional guide',
      'Mexican lunch',
      'Bottled water'
    ],
    notIncluded: [
      'Towels',
      'Professional photos',
      'Additional drinks'
    ],
    meetingPoint: 'Playa del Carmen Main Square',
    languages: ['Spanish', 'English'],
    maxGroupSize: 16,
    minAge: 8,
    difficulty: 'Moderate',
    cancellationPolicy: 'Free cancellation up to 24 hours before',
    providerId: 'riviera-adventures-004',
    providerName: 'Riviera Maya Adventures',
    providerRating: 4.6,
    availability: [
      { date: '2024-01-25', times: ['08:30', '13:00'], spotsLeft: 12 },
      { date: '2024-01-26', times: ['08:30'], spotsLeft: 8 }
    ],
    coordinates: { lat: 20.2114, lng: -87.4654 },
    tags: ['Ancient History', 'Snorkeling', 'Beach', 'Cultural'],
    safetyMeasures: [
      'Certified snorkeling equipment',
      'Life jackets provided',
      'First aid trained guides'
    ],
    whatToBring: [
      'Swimming clothes',
      'Towel',
      'Waterproof camera',
      'Comfortable walking shoes'
    ],
    importantInfo: [
      'Basic swimming skills required',
      'Ruins require moderate walking',
      'Biodegradable sunscreen only'
    ]
  },

  // Food & Drink Activities
  {
    id: 'cdmx-street-food-tour',
    title: 'Mexico City Street Food & Market Tour',
    description: 'Discover authentic Mexican flavors on this guided street food tour through local markets and hidden gems, tasting tacos, tamales, and traditional sweets.',
    shortDescription: 'Authentic street food tasting tour',
    price: 55,
    currency: 'USD',
    rating: 4.9,
    reviewCount: 1876,
    duration: '4 hours',
    category: 'food-drink',
    destination: 'Ciudad de México',
    images: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800',
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800'
    ],
    highlights: [
      '8+ authentic food tastings',
      'Visit 3 traditional markets',
      'Learn about Mexican culinary culture',
      'Meet local vendors and chefs',
      'Small group experience (max 8 people)'
    ],
    included: [
      'Professional food guide',
      'All food tastings',
      'Traditional drinks (agua fresca, pulque)',
      'Market entrance fees',
      'Recipe cards to take home'
    ],
    notIncluded: [
      'Transportation to meeting point',
      'Additional food purchases',
      'Alcoholic beverages'
    ],
    meetingPoint: 'Mercado de San Juan, Main Entrance',
    languages: ['Spanish', 'English'],
    maxGroupSize: 8,
    minAge: 12,
    difficulty: 'Easy',
    cancellationPolicy: 'Free cancellation up to 24 hours before',
    providerId: 'foodie-mexico-005',
    providerName: 'Foodie Mexico Tours',
    providerRating: 4.9,
    availability: [
      { date: '2024-01-25', times: ['10:00', '15:00'], spotsLeft: 6 },
      { date: '2024-01-26', times: ['10:00', '15:00'], spotsLeft: 4 }
    ],
    coordinates: { lat: 19.4326, lng: -99.1332 },
    tags: ['Food', 'Cultural', 'Local Experience', 'Markets'],
    safetyMeasures: [
      'Food safety certified vendors',
      'Hygiene protocols followed',
      'Allergy information provided'
    ],
    whatToBring: [
      'Comfortable walking shoes',
      'Appetite for adventure',
      'Camera',
      'Cash for additional purchases'
    ],
    importantInfo: [
      'Please inform of food allergies',
      'Vegetarian options available',
      'Lots of walking involved'
    ]
  },

  // Outdoor Activities
  {
    id: 'cancun-isla-mujeres-catamaran',
    title: 'Isla Mujeres Catamaran Tour with Snorkeling',
    description: 'Sail to beautiful Isla Mujeres on a luxury catamaran, snorkel in crystal-clear waters, enjoy an open bar, and explore the charming island town.',
    shortDescription: 'Catamaran sailing & snorkeling adventure',
    price: 85,
    currency: 'USD',
    rating: 4.8,
    reviewCount: 2934,
    duration: '8 hours',
    category: 'outdoor',
    destination: 'Cancún',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'
    ],
    highlights: [
      'Luxury catamaran sailing',
      'Snorkeling at MUSA underwater museum',
      'Open bar with premium drinks',
      'Beach time at Playa Norte',
      'Free time to explore Isla Mujeres'
    ],
    included: [
      'Round-trip catamaran transportation',
      'Snorkeling equipment',
      'Open bar (national drinks)',
      'Lunch buffet',
      '2 hours free time on island'
    ],
    notIncluded: [
      'Hotel transportation',
      'Premium drinks',
      'Island activities and shopping'
    ],
    meetingPoint: 'Marina Aquatours, Cancun',
    languages: ['Spanish', 'English'],
    maxGroupSize: 80,
    minAge: 5,
    difficulty: 'Easy',
    cancellationPolicy: 'Free cancellation up to 24 hours before',
    providerId: 'caribbean-sailing-006',
    providerName: 'Caribbean Sailing Adventures',
    providerRating: 4.7,
    availability: [
      { date: '2024-01-25', times: ['09:00'], spotsLeft: 45 },
      { date: '2024-01-26', times: ['09:00'], spotsLeft: 62 }
    ],
    coordinates: { lat: 21.2311, lng: -86.7312 },
    tags: ['Sailing', 'Snorkeling', 'Beach', 'Open Bar'],
    safetyMeasures: [
      'Life jackets provided',
      'Certified boat crew',
      'First aid equipment on board'
    ],
    whatToBring: [
      'Swimming clothes',
      'Towel',
      'Sunscreen',
      'Cash for island purchases'
    ],
    importantInfo: [
      'Weather dependent',
      'Minimum age 5 years',
      'Bring cash for island activities'
    ]
  }
]

// Helper functions to filter activities
export const getActivitiesByDestination = (destination: string): Activity[] => {
  return mockActivities.filter(activity => 
    activity.destination.toLowerCase().includes(destination.toLowerCase())
  )
}

export const getActivitiesByCategory = (category: string): Activity[] => {
  return mockActivities.filter(activity => 
    activity.category === category
  )
}

export const getActivityById = (id: string): Activity | undefined => {
  return mockActivities.find(activity => activity.id === id)
}

export const searchActivities = (query: string): Activity[] => {
  const searchTerm = query.toLowerCase()
  return mockActivities.filter(activity =>
    activity.title.toLowerCase().includes(searchTerm) ||
    activity.description.toLowerCase().includes(searchTerm) ||
    activity.destination.toLowerCase().includes(searchTerm) ||
    activity.category.toLowerCase().includes(searchTerm) ||
    activity.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}

// Popular destinations data
export const popularDestinations = [
  {
    id: 'ciudad-de-mexico',
    name: 'Ciudad de México',
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800',
    activitiesCount: mockActivities.filter(a => a.destination === 'Ciudad de México').length,
    rating: 4.8,
    description: 'Capital histórica con pirámides, museos y gastronomía única'
  },
  {
    id: 'cancun',
    name: 'Cancún',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    activitiesCount: mockActivities.filter(a => a.destination === 'Cancún').length,
    rating: 4.9,
    description: 'Playas paradisíacas y aventuras en el Caribe mexicano'
  },
  {
    id: 'playa-del-carmen',
    name: 'Playa del Carmen',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    activitiesCount: mockActivities.filter(a => a.destination === 'Playa del Carmen').length,
    rating: 4.7,
    description: 'Riviera Maya con cenotes, ruinas mayas y vida nocturna'
  }
]

// Categories data
export const categories = [
  {
    id: 'sightseeing',
    name: 'Sightseeing',
    icon: '🏛️',
    activitiesCount: mockActivities.filter(a => a.category === 'sightseeing').length,
    description: 'Explora sitios históricos y culturales'
  },
  {
    id: 'food-drink',
    name: 'Food & Drink',
    icon: '🍽️',
    activitiesCount: mockActivities.filter(a => a.category === 'food-drink').length,
    description: 'Descubre sabores auténticos mexicanos'
  },
  {
    id: 'outdoor',
    name: 'Outdoor',
    icon: '🏔️',
    activitiesCount: mockActivities.filter(a => a.category === 'outdoor').length,
    description: 'Aventuras al aire libre y deportes'
  },
  {
    id: 'cultural',
    name: 'Cultural',
    icon: '🎭',
    activitiesCount: mockActivities.filter(a => a.category === 'cultural').length,
    description: 'Sumérgete en la cultura local'
  }
]