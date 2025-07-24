import { useState, useEffect } from 'react'
import { Star, ThumbsUp, Flag, User, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { blink } from '@/blink/client'
import { useToast } from '@/hooks/use-toast'

interface Review {
  id: string
  userId: string
  userName: string
  userAvatar?: string
  rating: number
  title: string
  comment: string
  date: string
  helpful: number
  verified: boolean
  photos?: string[]
}

interface ReviewsSectionProps {
  activityId: string
  averageRating: number
  totalReviews: number
}

export default function ReviewsSection({ activityId, averageRating, totalReviews }: ReviewsSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [newReview, setNewReview] = useState({ rating: 5, title: '', comment: '' })
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Mock data for demonstration
    const mockReviews: Review[] = [
      {
        id: '1',
        userId: 'user1',
        userName: 'Sarah Johnson',
        userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
        rating: 5,
        title: 'Amazing experience!',
        comment: 'This tour exceeded all my expectations. The guide was knowledgeable and friendly, and we saw some incredible sights. Highly recommend!',
        date: '2024-01-15',
        helpful: 12,
        verified: true,
        photos: ['https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=300']
      },
      {
        id: '2',
        userId: 'user2',
        userName: 'Michael Chen',
        rating: 4,
        title: 'Great value for money',
        comment: 'Really enjoyed this activity. The only downside was that it was quite crowded, but overall a great experience.',
        date: '2024-01-10',
        helpful: 8,
        verified: true
      },
      {
        id: '3',
        userId: 'user3',
        userName: 'Emma Rodriguez',
        rating: 5,
        title: 'Perfect for families',
        comment: 'Took my kids on this tour and they loved every minute of it. The guide was great with children and made it educational and fun.',
        date: '2024-01-08',
        helpful: 15,
        verified: true
      }
    ]
    
    setReviews(mockReviews)
    
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
    })
    return unsubscribe
  }, [])

  const handleSubmitReview = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to leave a review.",
        variant: "destructive"
      })
      return
    }

    if (!newReview.title.trim() || !newReview.comment.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide both a title and comment for your review.",
        variant: "destructive"
      })
      return
    }

    setLoading(true)
    try {
      // In a real app, this would save to the database
      const review: Review = {
        id: Date.now().toString(),
        userId: user.id,
        userName: user.displayName || user.email,
        userAvatar: user.avatar,
        rating: newReview.rating,
        title: newReview.title,
        comment: newReview.comment,
        date: new Date().toISOString().split('T')[0],
        helpful: 0,
        verified: true
      }

      setReviews(prev => [review, ...prev])
      setNewReview({ rating: 5, title: '', comment: '' })
      setShowReviewForm(false)

      toast({
        title: "Review Submitted",
        description: "Thank you for your feedback! Your review has been posted.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const handleHelpful = (reviewId: string) => {
    setReviews(prev => prev.map(review => 
      review.id === reviewId 
        ? { ...review, helpful: review.helpful + 1 }
        : review
    ))
  }

  const renderStars = (rating: number, size = 'sm') => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  const ratingDistribution = [
    { stars: 5, count: 45, percentage: 60 },
    { stars: 4, count: 20, percentage: 27 },
    { stars: 3, count: 8, percentage: 11 },
    { stars: 2, count: 1, percentage: 1 },
    { stars: 1, count: 1, percentage: 1 }
  ]

  return (
    <div className="space-y-6">
      {/* Rating Overview */}
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold">Reviews & Ratings</h3>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Overall Rating */}
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{averageRating}</div>
              {renderStars(averageRating, 'lg')}
              <p className="text-muted-foreground mt-2">Based on {totalReviews} reviews</p>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-2">
                  <span className="text-sm w-8">{item.stars}★</span>
                  <Progress value={item.percentage} className="flex-1" />
                  <span className="text-sm text-muted-foreground w-8">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Write Review Button */}
      {user && !showReviewForm && (
        <Button onClick={() => setShowReviewForm(true)} className="w-full md:w-auto">
          Write a Review
        </Button>
      )}

      {!user && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">Sign in to write a review</p>
              <Button onClick={() => blink.auth.login()}>Sign In</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Review Form */}
      {showReviewForm && (
        <Card>
          <CardHeader>
            <h4 className="text-lg font-semibold">Write Your Review</h4>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Rating Selection */}
            <div>
              <label className="text-sm font-medium mb-2 block">Rating</label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                    className="p-1"
                  >
                    <Star
                      className={`h-6 w-6 ${
                        star <= newReview.rating 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-gray-300 hover:text-yellow-400'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="text-sm font-medium mb-2 block">Title</label>
              <input
                type="text"
                value={newReview.title}
                onChange={(e) => setNewReview(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Summarize your experience"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Comment */}
            <div>
              <label className="text-sm font-medium mb-2 block">Your Review</label>
              <Textarea
                value={newReview.comment}
                onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                placeholder="Tell others about your experience..."
                rows={4}
              />
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button onClick={handleSubmitReview} disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Review'}
              </Button>
              <Button variant="outline" onClick={() => setShowReviewForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={review.userAvatar} />
                  <AvatarFallback>
                    {review.userName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h5 className="font-semibold">{review.userName}</h5>
                    {review.verified && (
                      <Badge variant="secondary" className="text-xs">
                        Verified Purchase
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    {renderStars(review.rating)}
                    <span className="text-sm text-muted-foreground">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>

                  <h6 className="font-medium mb-2">{review.title}</h6>
                  <p className="text-muted-foreground mb-4">{review.comment}</p>

                  {review.photos && review.photos.length > 0 && (
                    <div className="flex gap-2 mb-4">
                      {review.photos.map((photo, index) => (
                        <img
                          key={index}
                          src={photo}
                          alt="Review photo"
                          className="w-20 h-20 object-cover rounded-md"
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleHelpful(review.id)}
                      className="gap-1"
                    >
                      <ThumbsUp className="h-4 w-4" />
                      Helpful ({review.helpful})
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Flag className="h-4 w-4" />
                      Report
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline">Load More Reviews</Button>
      </div>
    </div>
  )
}