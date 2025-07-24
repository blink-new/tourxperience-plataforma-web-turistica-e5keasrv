import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Star, Clock, Users, MapPin, X } from 'lucide-react'

interface FilterSidebarProps {
  filters: {
    priceRange: [number, number]
    duration: string[]
    rating: number
    categories: string[]
    languages: string[]
    groupSize: string
  }
  onFiltersChange: (filters: any) => void
  onClearFilters: () => void
}

export default function FilterSidebar({ filters, onFiltersChange, onClearFilters }: FilterSidebarProps) {
  const categories = [
    'Sightseeing', 'Food & Drink', 'Outdoor Activities', 'Cultural Tours',
    'Adventure Sports', 'Museums & Galleries', 'Day Trips', 'Water Activities',
    'Nightlife', 'Shopping', 'Photography', 'Family Friendly'
  ]

  const languages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese']
  const durations = ['0-2 hours', '2-4 hours', '4-8 hours', 'Full day', 'Multi-day']

  const updateFilter = (key: string, value: any) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  const toggleArrayFilter = (key: string, value: string) => {
    const current = filters[key as keyof typeof filters] as string[]
    const updated = current.includes(value)
      ? current.filter(item => item !== value)
      : [...current, value]
    updateFilter(key, updated)
  }

  const activeFiltersCount = 
    filters.categories.length + 
    filters.languages.length + 
    filters.duration.length + 
    (filters.rating > 0 ? 1 : 0) +
    (filters.groupSize ? 1 : 0)

  return (
    <div className="w-80 space-y-6">
      {/* Clear Filters */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        {activeFiltersCount > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClearFilters}
            className="text-primary hover:text-primary/80"
          >
            Clear all ({activeFiltersCount})
          </Button>
        )}
      </div>

      {/* Price Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => updateFilter('priceRange', value)}
            max={500}
            min={0}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}+</span>
          </div>
        </CardContent>
      </Card>

      {/* Duration */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Duration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {durations.map((duration) => (
            <div key={duration} className="flex items-center space-x-2">
              <Checkbox
                id={duration}
                checked={filters.duration.includes(duration)}
                onCheckedChange={() => toggleArrayFilter('duration', duration)}
              />
              <label htmlFor={duration} className="text-sm cursor-pointer">
                {duration}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Rating */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Star className="h-4 w-4" />
            Minimum Rating
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[4.5, 4.0, 3.5, 3.0].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${rating}`}
                checked={filters.rating === rating}
                onCheckedChange={() => updateFilter('rating', filters.rating === rating ? 0 : rating)}
              />
              <label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer flex items-center gap-1">
                {rating}
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                & up
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={filters.categories.includes(category)}
                onCheckedChange={() => toggleArrayFilter('categories', category)}
              />
              <label htmlFor={category} className="text-sm cursor-pointer">
                {category}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Languages */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Languages</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {languages.map((language) => (
            <div key={language} className="flex items-center space-x-2">
              <Checkbox
                id={language}
                checked={filters.languages.includes(language)}
                onCheckedChange={() => toggleArrayFilter('languages', language)}
              />
              <label htmlFor={language} className="text-sm cursor-pointer">
                {language}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Group Size */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Users className="h-4 w-4" />
            Group Size
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {['Small (1-10)', 'Medium (11-25)', 'Large (26+)', 'Private'].map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox
                id={size}
                checked={filters.groupSize === size}
                onCheckedChange={() => updateFilter('groupSize', filters.groupSize === size ? '' : size)}
              />
              <label htmlFor={size} className="text-sm cursor-pointer">
                {size}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}