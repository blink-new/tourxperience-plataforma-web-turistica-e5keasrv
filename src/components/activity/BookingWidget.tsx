import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Activity } from '@/types'
import { Calendar as CalendarIcon, Users, Clock, Shield, RefreshCw, Star, Heart, Share2 } from 'lucide-react'
import { format } from 'date-fns'

interface BookingWidgetProps {
  activity: Activity
  onBook: (bookingData: any) => void
  onAddToCart: (activity: Activity) => void
  onToggleFavorite: (activityId: string) => void
  isFavorite: boolean
}

export default function BookingWidget({ activity, onBook, onAddToCart, onToggleFavorite, isFavorite }: BookingWidgetProps) {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState('')
  const [participants, setParticipants] = useState(1)
  const [showCalendar, setShowCalendar] = useState(false)

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ]

  const totalPrice = activity.price * participants
  const savings = activity.originalPrice ? (activity.originalPrice - activity.price) * participants : 0

  const handleBookNow = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select date and time')
      return
    }

    const bookingData = {
      activityId: activity.id,
      date: selectedDate,
      time: selectedTime,
      participants,
      totalPrice
    }

    onBook(bookingData)
  }

  return (
    <div className="space-y-6">
      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onToggleFavorite(activity.id)}
          className={isFavorite ? 'text-red-500 border-red-200' : ''}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>
        <Button variant="outline" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Booking Card */}
      <Card className="sticky top-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              {activity.originalPrice && activity.originalPrice > activity.price && (
                <span className="text-sm text-muted-foreground line-through">
                  ${activity.originalPrice}
                </span>
              )}
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">
                  ${activity.price}
                </span>
                <span className="text-muted-foreground">per person</span>
              </div>
              {savings > 0 && (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Save ${savings.toFixed(0)} per person
                </Badge>
              )}
            </div>
            
            <div className="text-right">
              <div className="flex items-center gap-1 mb-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{activity.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {activity.reviewCount} reviews
              </span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Date Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Date</label>
            <Popover open={showCalendar} onOpenChange={setShowCalendar}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, 'PPP') : 'Choose date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    setSelectedDate(date)
                    setShowCalendar(false)
                  }}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Time</label>
            <Select value={selectedTime} onValueChange={setSelectedTime}>
              <SelectTrigger>
                <SelectValue placeholder="Choose time" />
              </SelectTrigger>
              <SelectContent>
                {availableTimes.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Participants */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Participants</label>
            <Select value={participants.toString()} onValueChange={(value) => setParticipants(parseInt(value))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: Math.min(activity.maxGroupSize, 10) }, (_, i) => i + 1).map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {num} {num === 1 ? 'person' : 'people'}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Separator />

          {/* Price Breakdown */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>${activity.price} × {participants} {participants === 1 ? 'person' : 'people'}</span>
              <span>${totalPrice}</span>
            </div>
            {savings > 0 && (
              <div className="flex justify-between text-sm text-green-600">
                <span>Savings</span>
                <span>-${savings}</span>
              </div>
            )}
            <Separator />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <Button 
              className="w-full" 
              size="lg"
              onClick={handleBookNow}
              disabled={!selectedDate || !selectedTime}
            >
              Book Now
            </Button>
            <Button 
              variant="outline" 
              className="w-full" 
              size="lg"
              onClick={() => onAddToCart(activity)}
            >
              Add to Cart
            </Button>
          </div>

          {/* Features */}
          <div className="space-y-3 pt-4 border-t">
            {activity.freeCancellation && (
              <div className="flex items-center gap-2 text-sm text-green-600">
                <RefreshCw className="h-4 w-4" />
                <span>Free cancellation up to 24 hours before</span>
              </div>
            )}
            {activity.instantConfirmation && (
              <div className="flex items-center gap-2 text-sm text-blue-600">
                <Shield className="h-4 w-4" />
                <span>Instant confirmation</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Duration: {activity.duration}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}