import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Activity } from '@/types'
import { getActivityById } from '../data/mockInventory'
import { blink } from '../blink/client'
import { 
  MapPin, Clock, Users, Globe, Shield, RefreshCw, 
  CheckCircle, XCircle, Info, Star, Calendar as CalendarIcon,
  Heart, Share2, Award, AlertCircle, Plus, Minus
} from 'lucide-react'
import { format } from 'date-fns'

export default function ActivityDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activity, setActivity] = useState<Activity | null>(null)
  const [loading, setLoading] = useState(true)
  const [favorites, setFavorites] = useState<string[]>([])
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [participants, setParticipants] = useState(2)
  const [isBooking, setIsBooking] = useState(false)

  // Load activity data
  useEffect(() => {
    if (id) {
      const foundActivity = getActivityById(id)
      if (foundActivity) {
        setActivity(foundActivity)
      }
      setLoading(false)
    }
  }, [id])

  const handleBookNow = async () => {
    if (!activity || !selectedDate || !selectedTime) {
      alert('Please select a date and time')
      return
    }

    setIsBooking(true)
    
    try {
      // Create Stripe checkout session
      const response = await blink.data.fetch({
        url: 'https://api.stripe.com/v1/checkout/sessions',
        method: 'POST',
        headers: {
          'Authorization': 'Bearer {{stripe_secret_key}}',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          'payment_method_types[]': 'card',
          'line_items[0][price_data][currency]': activity.currency.toLowerCase(),
          'line_items[0][price_data][product_data][name]': activity.title,
          'line_items[0][price_data][product_data][description]': activity.shortDescription,
          'line_items[0][price_data][unit_amount]': (activity.price * 100).toString(),
          'line_items[0][quantity]': participants.toString(),
          'mode': 'payment',
          'success_url': `${window.location.origin}/booking-confirmation?session_id={CHECKOUT_SESSION_ID}&activity_id=${activity.id}&date=${format(selectedDate, 'yyyy-MM-dd')}&time=${selectedTime}&participants=${participants}`,
          'cancel_url': `${window.location.origin}/activity/${activity.id}`,
          'metadata[activity_id]': activity.id,
          'metadata[date]': format(selectedDate, 'yyyy-MM-dd'),
          'metadata[time]': selectedTime,
          'metadata[participants]': participants.toString()
        }).toString()
      })

      if (response.status === 200 && response.body.url) {
        // Open Stripe checkout in new tab
        window.open(response.body.url, '_blank')
      } else {
        throw new Error('Failed to create checkout session')
      }
    } catch (error) {
      console.error('Booking error:', error)
      alert('Failed to process booking. Please try again.')
    } finally {
      setIsBooking(false)
    }
  }

  const handleToggleFavorite = (activityId: string) => {
    setFavorites(prev => 
      prev.includes(activityId)
        ? prev.filter(id => id !== activityId)
        : [...prev, activityId]
    )
  }

  const totalPrice = activity ? activity.price * participants : 0
  const savings = activity?.originalPrice ? (activity.originalPrice - activity.price) * participants : 0

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-96 bg-gray-200 rounded-lg"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
              </div>
              <div className="h-96 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!activity) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Activity not found</h1>
          <p className="text-muted-foreground mb-4">The activity you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <button onClick={() => navigate('/')} className="hover:text-primary">Home</button>
          <span>/</span>
          <button onClick={() => navigate(`/search?destination=${activity.destination}`)} className="hover:text-primary">
            {activity.destination.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </button>
          <span>/</span>
          <span className="text-foreground">{activity.title}</span>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-96">
            <div className="lg:col-span-2 lg:row-span-2">
              <img
                src={activity.images[0]}
                alt={activity.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {activity.images.slice(1, 5).map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`${activity.title} ${index + 2}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                {index === 3 && activity.images.length > 5 && (
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold">+{activity.images.length - 5} more</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Activity Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-primary text-white">
                  Bestseller
                </Badge>
                <Badge variant="outline">{activity.category}</Badge>
                {activity.provider.verified && (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    <Award className="h-3 w-3 mr-1" />
                    Verified Provider
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-bold">{activity.title}</h1>
              
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {activity.destination.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-foreground">{activity.rating}</span>
                  <span>({activity.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{activity.provider.name}</span>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">Duration</div>
                  <div className="text-xs text-muted-foreground">{activity.duration}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">Group Size</div>
                  <div className="text-xs text-muted-foreground">Max {activity.maxGroupSize}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Globe className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">Languages</div>
                  <div className="text-xs text-muted-foreground">{activity.languages.length} available</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">Booking</div>
                  <div className="text-xs text-muted-foreground">Instant confirm</div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs Content */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Details</TabsTrigger>
                <TabsTrigger value="included">What's Included</TabsTrigger>
                <TabsTrigger value="policies">Policies</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">About this experience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activity.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Available Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {activity.languages.map((language) => (
                      <Badge key={language} variant="outline">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="itinerary" className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Meeting Point</h3>
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-900">{activity.meetingPoint}</p>
                      <p className="text-sm text-blue-700 mt-1">Please arrive 15 minutes before your scheduled time</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Difficulty Level</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant={activity.difficulty === 'easy' ? 'default' : activity.difficulty === 'moderate' ? 'secondary' : 'destructive'}>
                      {activity.difficulty.charAt(0).toUpperCase() + activity.difficulty.slice(1)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Minimum age: {activity.minAge} years
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {activity.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="capitalize">
                        {tag.replace('-', ' ')}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="included" className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-600">What's Included</h3>
                  <div className="space-y-3">
                    {activity.included.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="policies" className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Cancellation Policy</h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <RefreshCw className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-green-800">Free Cancellation</span>
                    </div>
                    <p className="text-green-700">
                      {activity.cancellationPolicy}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Provider Information</h3>
                  <div className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{activity.provider.name}</span>
                        {activity.provider.verified && (
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            <Award className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{activity.provider.rating}</span>
                        <span>({activity.provider.reviewCount} reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6 space-y-6">
                {/* Price */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {activity.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        ${activity.originalPrice}
                      </span>
                    )}
                    <span className="text-3xl font-bold text-primary">
                      ${activity.price}
                    </span>
                    <span className="text-muted-foreground">per person</span>
                  </div>
                  {savings > 0 && (
                    <div className="text-sm text-green-600 font-medium">
                      Save ${savings} total
                    </div>
                  )}
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium mb-2">Select Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium mb-2">Select Time</label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose time" />
                    </SelectTrigger>
                    <SelectContent>
                      {activity.availability.times.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Participants */}
                <div>
                  <label className="block text-sm font-medium mb-2">Participants</label>
                  <div className="flex items-center justify-between border rounded-lg p-3">
                    <span>Adults</span>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setParticipants(Math.max(1, participants - 1))}
                        disabled={participants <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="font-medium">{participants}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setParticipants(Math.min(activity.maxGroupSize, participants + 1))}
                        disabled={participants >= activity.maxGroupSize}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Total Price */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span>Total ({participants} {participants === 1 ? 'person' : 'people'})</span>
                    <span className="text-xl font-bold">${totalPrice}</span>
                  </div>
                  {savings > 0 && (
                    <div className="text-sm text-green-600">
                      You save ${savings}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={handleBookNow}
                    disabled={!selectedDate || !selectedTime || isBooking}
                  >
                    {isBooking ? 'Processing...' : 'Book Now'}
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleToggleFavorite(activity.id)}
                    >
                      <Heart 
                        className={`h-4 w-4 mr-2 ${
                          favorites.includes(activity.id) 
                            ? 'fill-red-500 text-red-500' 
                            : ''
                        }`} 
                      />
                      {favorites.includes(activity.id) ? 'Saved' : 'Save'}
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Instant confirmation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-blue-500" />
                    <span>Secure payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCw className="h-4 w-4 text-orange-500" />
                    <span>Free cancellation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}