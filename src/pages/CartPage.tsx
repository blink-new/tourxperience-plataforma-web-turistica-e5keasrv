import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Calendar, Clock, Users, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { CartItem } from '@/types'
import { blink } from '@/blink/client'

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [promoCode, setPromoCode] = useState('')
  const [discount, setDiscount] = useState(0)

  const loadCartItems = async () => {
    setLoading(true)
    try {
      // Mock cart data - replace with actual API call
      const mockCartItems: CartItem[] = [
        {
          id: 'cart1',
          activityId: '1',
          activity: {
            id: '1',
            title: 'Chichen Itza Day Trip from Cancun',
            description: 'Explore one of the New Seven Wonders of the World',
            price: 89,
            originalPrice: 120,
            currency: 'USD',
            rating: 4.8,
            reviewCount: 2847,
            duration: '12 hours',
            category: 'Cultural Tours',
            location: 'Cancun, Mexico',
            images: ['https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&h=300&fit=crop'],
            highlights: ['Skip-the-line access', 'Professional guide', 'Transportation included'],
            languages: ['English', 'Spanish'],
            maxGroupSize: 45,
            instantConfirmation: true,
            freeCancellation: true,
            providerId: 'viator',
            availability: 'available'
          },
          date: '2024-02-15',
          time: '07:30',
          participants: 2,
          totalPrice: 178
        },
        {
          id: 'cart2',
          activityId: '2',
          activity: {
            id: '2',
            title: 'Tulum Ruins & Cenote Swimming Adventure',
            description: 'Discover ancient Mayan ruins and swim in cenotes',
            price: 75,
            originalPrice: 95,
            currency: 'USD',
            rating: 4.7,
            reviewCount: 1923,
            duration: '8 hours',
            category: 'Adventure Tours',
            location: 'Tulum, Mexico',
            images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop'],
            highlights: ['Ancient Mayan ruins', 'Cenote swimming', 'Small group tour'],
            languages: ['English', 'Spanish', 'French'],
            maxGroupSize: 16,
            instantConfirmation: true,
            freeCancellation: true,
            providerId: 'local',
            availability: 'available'
          },
          date: '2024-02-16',
          time: '09:00',
          participants: 2,
          totalPrice: 150
        }
      ]
      
      setCartItems(mockCartItems)
    } catch (error) {
      console.error('Error loading cart items:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCartItems()
  }, [])

  const updateQuantity = (itemId: string, newParticipants: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === itemId
          ? {
              ...item,
              participants: newParticipants,
              totalPrice: item.activity.price * newParticipants
            }
          : item
      )
    )
  }

  const removeItem = (itemId: string) => {
    setCartItems(items => items.filter(item => item.id !== itemId))
  }

  const applyPromoCode = () => {
    // Mock promo code logic
    if (promoCode.toLowerCase() === 'save10') {
      setDiscount(0.1) // 10% discount
    } else if (promoCode.toLowerCase() === 'welcome20') {
      setDiscount(0.2) // 20% discount
    } else {
      setDiscount(0)
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0)
  const discountAmount = subtotal * discount
  const total = subtotal - discountAmount

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-1/4" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="h-32 bg-gray-200 rounded-lg" />
                ))}
              </div>
              <div className="h-64 bg-gray-200 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center py-16">
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h1>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any activities to your cart yet.
            </p>
            <Link to="/">
              <Button size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600 mt-1">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex">
                    {/* Image */}
                    <div className="w-32 h-32 flex-shrink-0">
                      <img
                        src={item.activity.images[0]}
                        alt={item.activity.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg line-clamp-2">
                            {item.activity.title}
                          </h3>
                          <div className="flex items-center text-sm text-gray-600 mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {item.activity.location}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Booking Details */}
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(item.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.time}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {item.participants} adults
                        </div>
                      </div>

                      {/* Price and Quantity */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.participants - 1))}
                            disabled={item.participants <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="font-medium">{item.participants}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, Math.min(item.activity.maxGroupSize, item.participants + 1))}
                            disabled={item.participants >= item.activity.maxGroupSize}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="text-right">
                          {item.activity.originalPrice && item.activity.originalPrice > item.activity.price && (
                            <div className="text-sm text-gray-500 line-through">
                              ${item.activity.originalPrice * item.participants}
                            </div>
                          )}
                          <div className="text-xl font-bold text-primary">
                            ${item.totalPrice}
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex gap-2 mt-3">
                        {item.activity.freeCancellation && (
                          <Badge variant="outline" className="text-xs">Free cancellation</Badge>
                        )}
                        {item.activity.instantConfirmation && (
                          <Badge variant="outline" className="text-xs">Instant confirmation</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Promo Code */}
                <div>
                  <label className="block text-sm font-medium mb-2">Promo Code</label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline" onClick={applyPromoCode}>
                      Apply
                    </Button>
                  </div>
                  {discount > 0 && (
                    <p className="text-sm text-green-600 mt-1">
                      Promo code applied! {Math.round(discount * 100)}% off
                    </p>
                  )}
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({Math.round(discount * 100)}%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Taxes & Fees</span>
                    <span>$0.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link to="/checkout" className="block">
                  <Button className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                </Link>

                <div className="text-center text-sm text-gray-600">
                  <p>Free cancellation up to 24 hours before your experience</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}