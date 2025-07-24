import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star, Clock, Users, MapPin, Heart, ShoppingCart } from 'lucide-react'
import { Activity } from '@/types'

interface ActivityCardProps {
  activity: Activity
  onAddToCart: (activity: Activity) => void
  onToggleFavorite: (activityId: string) => void
  isFavorite: boolean
}

export default function ActivityCard({ activity, onAddToCart, onToggleFavorite, isFavorite }: ActivityCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="relative">
        <img
          src={activity.images[0]}
          alt={activity.title}
          className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 bg-white/80 hover:bg-white ${
            isFavorite ? 'text-red-500' : 'text-gray-600'
          }`}
          onClick={(e) => {
            e.stopPropagation()
            onToggleFavorite(activity.id)
          }}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>
        
        {activity.badge && (
          <Badge className="absolute top-3 left-3 bg-primary text-white">
            {activity.badge}
          </Badge>
        )}
        
        <div className="absolute bottom-3 left-3">
          <Badge variant="secondary" className="bg-black/70 text-white">
            {activity.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {activity.location}
          </div>

          {/* Title */}
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {activity.title}
          </h3>

          {/* Rating and Reviews */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{activity.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              ({activity.reviewCount} reviews)
            </span>
          </div>

          {/* Duration and Group Size */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {activity.duration}
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              Up to {activity.maxGroupSize}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-1">
            {activity.highlights.slice(0, 2).map((highlight, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="flex flex-wrap gap-1">
            {activity.languages.slice(0, 3).map((language) => (
              <Badge key={language} variant="outline" className="text-xs">
                {language}
              </Badge>
            ))}
            {activity.languages.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{activity.languages.length - 3} more
              </Badge>
            )}
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-2 border-t">
            <div className="space-y-1">
              {activity.originalPrice && activity.originalPrice > activity.price && (
                <span className="text-sm text-muted-foreground line-through">
                  ${activity.originalPrice}
                </span>
              )}
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-primary">
                  ${activity.price}
                </span>
                <span className="text-sm text-muted-foreground">per person</span>
              </div>
            </div>

            <Button
              onClick={(e) => {
                e.stopPropagation()
                onAddToCart(activity)
              }}
              className="gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}