# TourXperience API Integration Manual

## Overview

TourXperience is designed to integrate with multiple third-party tourism APIs to provide a comprehensive inventory of activities and experiences. This manual provides step-by-step instructions for connecting to major tourism API providers.

## Supported API Providers

### 1. Viator API
**Description:** GetYourGuide's API for tours and activities worldwide
**Website:** https://developer.viator.com/

#### Setup Instructions:
1. **Create Developer Account**
   - Visit https://developer.viator.com/
   - Sign up for a developer account
   - Complete the application process (may take 2-3 business days)

2. **Get API Credentials**
   - Once approved, log into the developer portal
   - Navigate to "API Keys" section
   - Generate your API key and secret
   - Note your partner ID

3. **Configure in TourXperience**
   ```javascript
   // Add these secrets to your Blink project
   VIATOR_API_KEY=your_api_key_here
   VIATOR_SECRET=your_secret_here
   VIATOR_PARTNER_ID=your_partner_id_here
   ```

4. **Implementation Example**
   ```javascript
   // src/services/viatorAPI.js
   import { blink } from '@/blink/client'

   export const searchViatorActivities = async (destination, startDate, endDate) => {
     const response = await blink.data.fetch({
       url: 'https://api.viator.com/partner/products/search',
       method: 'POST',
       headers: {
         'Authorization': 'Bearer {{VIATOR_API_KEY}}',
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
       body: {
         destination,
         startDate,
         endDate,
         currency: 'USD'
       }
     })
     return response.body
   }
   ```

### 2. GetYourGuide API
**Description:** Direct API access to GetYourGuide's inventory
**Website:** https://partner.getyourguide.com/

#### Setup Instructions:
1. **Partner Application**
   - Visit https://partner.getyourguide.com/
   - Apply for partnership program
   - Complete business verification process

2. **API Access**
   - Once approved as partner, request API access
   - Receive API credentials and documentation
   - Review rate limits and terms of service

3. **Configure in TourXperience**
   ```javascript
   GETYOURGUIDE_API_KEY=your_api_key_here
   GETYOURGUIDE_PARTNER_ID=your_partner_id_here
   ```

4. **Implementation Example**
   ```javascript
   export const searchGetYourGuideActivities = async (cityId, categoryId) => {
     const response = await blink.data.fetch({
       url: `https://api.getyourguide.com/v1/activities`,
       method: 'GET',
       headers: {
         'Authorization': 'Bearer {{GETYOURGUIDE_API_KEY}}',
         'Accept': 'application/json'
       },
       query: {
         city_id: cityId,
         category_id: categoryId,
         partner_id: '{{GETYOURGUIDE_PARTNER_ID}}'
       }
     })
     return response.body
   }
   ```

### 3. TourCMS API
**Description:** Tour operator management system with booking API
**Website:** https://www.tourcms.com/

#### Setup Instructions:
1. **Create Account**
   - Sign up at https://www.tourcms.com/
   - Choose appropriate plan (API access available on paid plans)
   - Complete account setup

2. **Generate API Key**
   - Go to Settings > API Settings
   - Generate new API key
   - Note your marketplace ID and channel ID

3. **Configure in TourXperience**
   ```javascript
   TOURCMS_API_KEY=your_api_key_here
   TOURCMS_MARKETPLACE_ID=your_marketplace_id
   TOURCMS_CHANNEL_ID=your_channel_id
   ```

4. **Implementation Example**
   ```javascript
   export const searchTourCMSActivities = async (location, startDate) => {
     const response = await blink.data.fetch({
       url: 'https://api.tourcms.com/api/rate/search.xml',
       method: 'GET',
       headers: {
         'Authorization': 'Bearer {{TOURCMS_API_KEY}}',
         'Accept': 'application/xml'
       },
       query: {
         location,
         date: startDate,
         marketplace_id: '{{TOURCMS_MARKETPLACE_ID}}',
         channel_id: '{{TOURCMS_CHANNEL_ID}}'
       }
     })
     return response.body
   }
   ```

### 4. Amadeus Travel API
**Description:** Comprehensive travel API including activities
**Website:** https://developers.amadeus.com/

#### Setup Instructions:
1. **Developer Registration**
   - Visit https://developers.amadeus.com/
   - Create developer account
   - Verify email and complete profile

2. **Create Application**
   - Go to "My Apps" in developer portal
   - Create new application
   - Select "Tours and Activities" API
   - Get API key and secret

3. **Configure in TourXperience**
   ```javascript
   AMADEUS_API_KEY=your_api_key_here
   AMADEUS_API_SECRET=your_api_secret_here
   ```

4. **Implementation Example**
   ```javascript
   export const searchAmadeusActivities = async (latitude, longitude, radius) => {
     // First, get access token
     const tokenResponse = await blink.data.fetch({
       url: 'https://api.amadeus.com/v1/security/oauth2/token',
       method: 'POST',
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
       },
       body: new URLSearchParams({
         grant_type: 'client_credentials',
         client_id: '{{AMADEUS_API_KEY}}',
         client_secret: '{{AMADEUS_API_SECRET}}'
       }).toString()
     })

     const accessToken = tokenResponse.body.access_token

     // Search activities
     const response = await blink.data.fetch({
       url: 'https://api.amadeus.com/v1/shopping/activities',
       method: 'GET',
       headers: {
         'Authorization': `Bearer ${accessToken}`,
         'Accept': 'application/json'
       },
       query: {
         latitude,
         longitude,
         radius
       }
     })
     return response.body
   }
   ```

## Unified API Service Implementation

Create a unified service that aggregates results from all providers:

```javascript
// src/services/activityAggregator.js
import { searchViatorActivities } from './viatorAPI'
import { searchGetYourGuideActivities } from './getyourguideAPI'
import { searchTourCMSActivities } from './tourcmsAPI'
import { searchAmadeusActivities } from './amadeusAPI'

export const searchAllProviders = async (searchParams) => {
  const { destination, startDate, endDate, latitude, longitude } = searchParams

  try {
    // Execute all API calls in parallel
    const [viatorResults, gygResults, tourcmsResults, amadeusResults] = await Promise.allSettled([
      searchViatorActivities(destination, startDate, endDate),
      searchGetYourGuideActivities(destination),
      searchTourCMSActivities(destination, startDate),
      searchAmadeusActivities(latitude, longitude, 50)
    ])

    // Normalize and combine results
    const allActivities = []

    if (viatorResults.status === 'fulfilled') {
      allActivities.push(...normalizeViatorResults(viatorResults.value))
    }

    if (gygResults.status === 'fulfilled') {
      allActivities.push(...normalizeGYGResults(gygResults.value))
    }

    if (tourcmsResults.status === 'fulfilled') {
      allActivities.push(...normalizeTourCMSResults(tourcmsResults.value))
    }

    if (amadeusResults.status === 'fulfilled') {
      allActivities.push(...normalizeAmadeusResults(amadeusResults.value))
    }

    // Remove duplicates and sort by relevance
    return deduplicateAndSort(allActivities)

  } catch (error) {
    console.error('Error searching activities:', error)
    throw error
  }
}

// Normalization functions to convert different API formats to unified format
const normalizeViatorResults = (results) => {
  return results.products?.map(product => ({
    id: `viator_${product.code}`,
    provider: 'viator',
    title: product.title,
    description: product.shortDescription,
    price: product.price?.amount,
    currency: product.price?.currency,
    duration: product.duration,
    rating: product.rating,
    reviewCount: product.reviewCount,
    images: product.images?.map(img => img.url),
    location: product.location,
    categories: product.categories,
    bookingUrl: product.bookingUrl
  })) || []
}

const normalizeGYGResults = (results) => {
  return results.activities?.map(activity => ({
    id: `gyg_${activity.id}`,
    provider: 'getyourguide',
    title: activity.title,
    description: activity.abstract,
    price: activity.price?.amount,
    currency: activity.price?.currency,
    duration: activity.duration,
    rating: activity.rating?.average,
    reviewCount: activity.rating?.count,
    images: activity.pictures?.map(pic => pic.url),
    location: activity.location,
    categories: activity.categories,
    bookingUrl: activity.url
  })) || []
}

const normalizeTourCMSResults = (results) => {
  // Implementation for TourCMS XML response parsing
  return []
}

const normalizeAmadeusResults = (results) => {
  return results.data?.map(activity => ({
    id: `amadeus_${activity.id}`,
    provider: 'amadeus',
    title: activity.name,
    description: activity.shortDescription,
    price: activity.price?.amount,
    currency: activity.price?.currency,
    duration: activity.duration,
    rating: activity.rating,
    reviewCount: activity.reviewCount,
    images: activity.pictures,
    location: activity.geoCode,
    categories: [activity.type],
    bookingUrl: activity.bookingLink
  })) || []
}

const deduplicateAndSort = (activities) => {
  // Remove duplicates based on title similarity and location
  const unique = activities.filter((activity, index, self) => 
    index === self.findIndex(a => 
      a.title.toLowerCase() === activity.title.toLowerCase() &&
      Math.abs(a.location?.latitude - activity.location?.latitude) < 0.01
    )
  )

  // Sort by rating and review count
  return unique.sort((a, b) => {
    const scoreA = (a.rating || 0) * Math.log(a.reviewCount || 1)
    const scoreB = (b.rating || 0) * Math.log(b.reviewCount || 1)
    return scoreB - scoreA
  })
}
```

## Booking Integration

For booking functionality, implement provider-specific booking flows:

```javascript
// src/services/bookingService.js
export const createBooking = async (activityId, bookingDetails) => {
  const [provider, originalId] = activityId.split('_')

  switch (provider) {
    case 'viator':
      return await createViatorBooking(originalId, bookingDetails)
    case 'getyourguide':
      return await createGYGBooking(originalId, bookingDetails)
    case 'tourcms':
      return await createTourCMSBooking(originalId, bookingDetails)
    case 'amadeus':
      return await createAmadeusBooking(originalId, bookingDetails)
    default:
      throw new Error(`Unknown provider: ${provider}`)
  }
}

const createViatorBooking = async (productCode, bookingDetails) => {
  const response = await blink.data.fetch({
    url: 'https://api.viator.com/partner/bookings',
    method: 'POST',
    headers: {
      'Authorization': 'Bearer {{VIATOR_API_KEY}}',
      'Content-Type': 'application/json'
    },
    body: {
      productCode,
      travelDate: bookingDetails.date,
      travelers: bookingDetails.travelers,
      contact: bookingDetails.contact
    }
  })

  return {
    bookingId: response.body.bookingId,
    confirmationNumber: response.body.confirmationNumber,
    status: response.body.status,
    voucher: response.body.voucher
  }
}
```

## Error Handling and Fallbacks

Implement robust error handling:

```javascript
// src/services/apiErrorHandler.js
export const handleAPIError = (error, provider) => {
  console.error(`${provider} API Error:`, error)

  // Log to monitoring service
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'api_error', {
      provider,
      error_message: error.message,
      error_code: error.status
    })
  }

  // Return user-friendly error message
  switch (error.status) {
    case 401:
      return `Authentication failed with ${provider}. Please check API credentials.`
    case 429:
      return `Rate limit exceeded for ${provider}. Please try again later.`
    case 500:
      return `${provider} service is temporarily unavailable.`
    default:
      return `Unable to fetch data from ${provider} at this time.`
  }
}
```

## Rate Limiting and Caching

Implement caching to reduce API calls:

```javascript
// src/services/cacheService.js
const cache = new Map()
const CACHE_DURATION = 30 * 60 * 1000 // 30 minutes

export const getCachedResult = (key) => {
  const cached = cache.get(key)
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }
  return null
}

export const setCachedResult = (key, data) => {
  cache.set(key, {
    data,
    timestamp: Date.now()
  })
}

// Usage in API calls
export const searchActivitiesWithCache = async (searchParams) => {
  const cacheKey = JSON.stringify(searchParams)
  const cached = getCachedResult(cacheKey)
  
  if (cached) {
    return cached
  }

  const results = await searchAllProviders(searchParams)
  setCachedResult(cacheKey, results)
  return results
}
```

## Testing API Integrations

Create test scripts for each provider:

```javascript
// tests/apiIntegration.test.js
import { searchViatorActivities } from '../src/services/viatorAPI'

describe('API Integrations', () => {
  test('Viator API returns valid results', async () => {
    const results = await searchViatorActivities('Paris', '2024-03-01', '2024-03-02')
    
    expect(results).toBeDefined()
    expect(results.products).toBeInstanceOf(Array)
    expect(results.products.length).toBeGreaterThan(0)
    
    const firstProduct = results.products[0]
    expect(firstProduct).toHaveProperty('code')
    expect(firstProduct).toHaveProperty('title')
    expect(firstProduct).toHaveProperty('price')
  })

  // Add similar tests for other providers
})
```

## Deployment Checklist

Before going live:

1. **API Credentials**
   - [ ] All API keys are stored securely in Blink secrets
   - [ ] Test credentials are replaced with production keys
   - [ ] Rate limits are configured appropriately

2. **Error Handling**
   - [ ] All API calls have proper error handling
   - [ ] Fallback mechanisms are in place
   - [ ] User-friendly error messages are displayed

3. **Performance**
   - [ ] Caching is implemented for frequently accessed data
   - [ ] API calls are optimized and batched where possible
   - [ ] Loading states are shown during API calls

4. **Monitoring**
   - [ ] API usage is tracked and monitored
   - [ ] Error rates are monitored
   - [ ] Performance metrics are collected

5. **Legal Compliance**
   - [ ] Terms of service for each API provider are reviewed
   - [ ] Attribution requirements are met
   - [ ] Data usage complies with provider policies

## Support and Troubleshooting

### Common Issues:

1. **Authentication Errors (401)**
   - Check API key validity
   - Verify key has proper permissions
   - Ensure key is not expired

2. **Rate Limiting (429)**
   - Implement exponential backoff
   - Add caching to reduce API calls
   - Consider upgrading API plan

3. **Data Format Issues**
   - Review API documentation for changes
   - Update normalization functions
   - Add data validation

### Getting Help:

- **Viator:** support@viator.com
- **GetYourGuide:** partner-support@getyourguide.com
- **TourCMS:** support@tourcms.com
- **Amadeus:** developers@amadeus.com

For TourXperience specific issues, contact: support@tourxperience.com

---

This manual provides a comprehensive guide for integrating external tourism APIs with TourXperience. Follow the setup instructions carefully and test thoroughly before deploying to production.