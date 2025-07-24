import { useState, useEffect, useCallback } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Check, Download, Mail, Calendar, MapPin, Users, Clock, QrCode } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { blink } from '@/blink/client'
import { useToast } from '@/hooks/use-toast'
import { useLanguage, useTranslations } from '@/i18n'
import { generateBookingConfirmationEmail, BookingDetails as EmailBookingDetails } from '@/utils/emailTemplates'

interface BookingDetails {
  id: string
  confirmationNumber: string
  status: 'confirmed' | 'pending' | 'cancelled'
  totalAmount: number
  currency: string
  bookingDate: string
  customerEmail: string
  items: BookingItem[]
}

interface BookingItem {
  id: string
  title: string
  image: string
  date: string
  time: string
  duration: string
  participants: number
  meetingPoint: string
  price: number
  qrCode: string
}

export default function BookingConfirmationPage() {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const { toast } = useToast()
  const { language } = useLanguage()
  const t = useTranslations()
  
  const [booking, setBooking] = useState<BookingDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [emailSent, setEmailSent] = useState(false)

  const generateConfirmationEmailHTML = useCallback((booking: BookingDetails) => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Booking Confirmation</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563EB; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .booking-item { background: white; margin: 20px 0; padding: 20px; border-radius: 8px; }
          .qr-code { text-align: center; margin: 20px 0; }
          .footer { text-align: center; padding: 20px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Booking Confirmed!</h1>
            <p>Confirmation Number: <strong>${booking.confirmationNumber}</strong></p>
          </div>
          
          <div class="content">
            <h2>Your TourXperience Adventures</h2>
            <p>Thank you for booking with TourXperience! Your activities are confirmed and ready for an amazing experience.</p>
            
            ${booking.items.map(item => `
              <div class="booking-item">
                <h3>${item.title}</h3>
                <p><strong>📅 Date:</strong> ${new Date(item.date).toLocaleDateString()}</p>
                <p><strong>🕐 Time:</strong> ${item.time}</p>
                <p><strong>⏱️ Duration:</strong> ${item.duration}</p>
                <p><strong>👥 Participants:</strong> ${item.participants}</p>
                <p><strong>📍 Meeting Point:</strong> ${item.meetingPoint}</p>
                
                <div class="qr-code">
                  <h4>Your QR Code Ticket</h4>
                  <img src="${item.qrCode}" alt="QR Code" style="width: 150px; height: 150px;">
                  <p><small>Show this QR code at the meeting point</small></p>
                </div>
              </div>
            `).join('')}
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <h3>💰 Payment Summary</h3>
              <p><strong>Total Paid:</strong> $${booking.totalAmount.toFixed(2)} ${booking.currency}</p>
              <p><strong>Payment Date:</strong> ${new Date(booking.bookingDate).toLocaleDateString()}</p>
            </div>
          </div>
          
          <div class="footer">
            <p>Need help? Contact us at support@tourxperience.com</p>
            <p>TourXperience - Creating Unforgettable Memories</p>
          </div>
        </div>
      </body>
      </html>
    `
  }, [])

  const generateConfirmationEmailText = useCallback((booking: BookingDetails) => {
    return `
      🎉 BOOKING CONFIRMED! 🎉
      
      Confirmation Number: ${booking.confirmationNumber}
      
      Your TourXperience Adventures:
      
      ${booking.items.map(item => `
      ${item.title}
      📅 Date: ${new Date(item.date).toLocaleDateString()}
      🕐 Time: ${item.time}
      ⏱️ Duration: ${item.duration}
      👥 Participants: ${item.participants}
      📍 Meeting Point: ${item.meetingPoint}
      
      `).join('')}
      
      💰 Payment Summary:
      Total Paid: $${booking.totalAmount.toFixed(2)} ${booking.currency}
      Payment Date: ${new Date(booking.bookingDate).toLocaleDateString()}
      
      Important: QR codes have been sent in the HTML version of this email. Please show them at the meeting points.
      
      Need help? Contact us at support@tourxperience.com
      TourXperience - Creating Unforgettable Memories
    `
  }, [])

  const sendConfirmationEmail = useCallback(async (bookingDetails: BookingDetails) => {
    try {
      // Convert booking details to email format
      const emailBookingDetails: EmailBookingDetails = {
        orderNumber: bookingDetails.confirmationNumber,
        customerName: 'Valued Customer', // In real app, get from user profile
        customerEmail: bookingDetails.customerEmail,
        bookingDate: new Date(bookingDetails.bookingDate).toLocaleDateString(),
        totalAmount: `${bookingDetails.totalAmount.toFixed(2)}`,
        currency: bookingDetails.currency,
        activities: bookingDetails.items.map(item => ({
          name: item.title,
          date: new Date(item.date).toLocaleDateString(),
          time: item.time,
          participants: item.participants,
          price: `${item.price.toFixed(2)}`,
          meetingPoint: item.meetingPoint,
          duration: item.duration,
          highlights: ['Professional guide', 'Skip-the-line access', 'Small group experience'],
          included: ['Expert guide', 'All entrance fees', 'Group photos'],
          recommendations: [
            language === 'es' ? 'Llega 15 minutos antes' : 
            language === 'en' ? 'Arrive 15 minutes early' :
            language === 'fr' ? 'Arrivez 15 minutes plus tôt' :
            language === 'it' ? 'Arriva 15 minuti prima' :
            '提前15分钟到达',
            language === 'es' ? 'Trae ropa cómoda' : 
            language === 'en' ? 'Wear comfortable clothing' :
            language === 'fr' ? 'Portez des vêtements confortables' :
            language === 'it' ? 'Indossa abiti comodi' :
            '穿舒适的衣服',
            language === 'es' ? 'Lleva tu cámara' : 
            language === 'en' ? 'Bring your camera' :
            language === 'fr' ? 'Apportez votre appareil photo' :
            language === 'it' ? 'Porta la tua macchina fotografica' :
            '带上你的相机'
          ]
        }))
      }

      const { subject, html, text } = generateBookingConfirmationEmail(emailBookingDetails, language)
      
      const result = await blink.notifications.email({
        to: bookingDetails.customerEmail,
        from: 'bookings@tourxperience.com',
        subject,
        html,
        text
      })

      if (result.success) {
        setEmailSent(true)
        toast({
          title: t.common.success,
          description: language === 'es' ? 'Revisa tu email para los detalles y códigos QR' :
                      language === 'en' ? 'Check your email for booking details and QR codes' :
                      language === 'fr' ? 'Vérifiez votre email pour les détails et codes QR' :
                      language === 'it' ? 'Controlla la tua email per i dettagli e codici QR' :
                      '查看您的电子邮件以获取预订详情和二维码',
        })
      }
    } catch (error) {
      console.error('Error sending email:', error)
      toast({
        title: t.common.error,
        description: language === 'es' ? 'Reserva confirmada pero falló el envío del email' :
                    language === 'en' ? 'Booking confirmed but email failed to send' :
                    language === 'fr' ? 'Réservation confirmée mais échec de l\'envoi de l\'email' :
                    language === 'it' ? 'Prenotazione confermata ma invio email fallito' :
                    '预订已确认但电子邮件发送失败',
        variant: "destructive"
      })
    }
  }, [language, t, toast])

  useEffect(() => {
    const fetchBookingDetails = async () => {
      if (!sessionId) {
        setLoading(false)
        return
      }

      try {
        // In a real app, this would fetch from your backend
        // For now, we'll use mock data
        const mockBooking: BookingDetails = {
          id: 'booking_' + Date.now(),
          confirmationNumber: 'TX' + Math.random().toString(36).substr(2, 8).toUpperCase(),
          status: 'confirmed',
          totalAmount: 303,
          currency: 'USD',
          bookingDate: new Date().toISOString(),
          customerEmail: 'customer@example.com',
          items: [
            {
              id: '1',
              title: 'Eiffel Tower Skip-the-Line Tour',
              image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=300',
              date: '2024-02-15',
              time: '10:00 AM',
              duration: '2 hours',
              participants: 2,
              meetingPoint: 'Eiffel Tower South Pillar, Avenue Gustave Eiffel, Paris',
              price: 178,
              qrCode: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0id2hpdGUiLz4KICA8ZyBmaWxsPSJibGFjayI+CiAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiLz4KICAgIDxyZWN0IHg9IjQwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiLz4KICAgIDxyZWN0IHg9IjgwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiLz4KICA8L2c+Cjwvc3ZnPg=='
            },
            {
              id: '2',
              title: 'Seine River Cruise with Dinner',
              image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=300',
              date: '2024-02-16',
              time: '7:00 PM',
              duration: '3 hours',
              participants: 2,
              meetingPoint: 'Port de la Bourdonnais, 75007 Paris',
              price: 125,
              qrCode: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0id2hpdGUiLz4KICA8ZyBmaWxsPSJibGFjayI+CiAgICA8cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIvPgogICAgPHJlY3QgeD0iNjAiIHk9IjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiLz4KICAgIDxyZWN0IHg9IjEwMCIgeT0iMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIvPgogIDwvZz4KPC9zdmc+'
            }
          ]
        }

        setBooking(mockBooking)
        
        // Send confirmation email
        await sendConfirmationEmail(mockBooking)
        
      } catch (error) {
        console.error('Error fetching booking:', error)
        toast({
          title: "Error",
          description: "Failed to load booking details.",
          variant: "destructive"
        })
      } finally {
        setLoading(false)
      }
    }

    fetchBookingDetails()
  }, [sessionId, sendConfirmationEmail, toast])

  const downloadTicket = (item: BookingItem) => {
    // Create a simple ticket PDF-like content
    const ticketContent = `
      TOURXPERIENCE TICKET
      
      ${item.title}
      
      Confirmation: ${booking?.confirmationNumber}
      Date: ${new Date(item.date).toLocaleDateString()}
      Time: ${item.time}
      Duration: ${item.duration}
      Participants: ${item.participants}
      
      Meeting Point:
      ${item.meetingPoint}
      
      QR Code: ${item.id}
      
      Show this ticket and QR code at the meeting point.
      
      Contact: support@tourxperience.com
    `
    
    const blob = new Blob([ticketContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `ticket-${item.id}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Processing your booking...</p>
        </div>
      </div>
    )
  }

  if (!booking) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardContent className="pt-6 text-center">
              <h2 className="text-xl font-semibold mb-2">Booking Not Found</h2>
              <p className="text-muted-foreground mb-4">
                We couldn't find your booking details. Please check your confirmation email or contact support.
              </p>
              <Link to="/">
                <Button>Return Home</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-green-600 mb-2">
            {language === 'es' ? '¡Reserva Confirmada!' :
             language === 'en' ? 'Booking Confirmed!' :
             language === 'fr' ? 'Réservation Confirmée!' :
             language === 'it' ? 'Prenotazione Confermata!' :
             '预订已确认！'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'es' ? 'Número de Confirmación' :
             language === 'en' ? 'Confirmation Number' :
             language === 'fr' ? 'Numéro de Confirmation' :
             language === 'it' ? 'Numero di Conferma' :
             '确认号码'}: <span className="font-bold text-primary">{booking.confirmationNumber}</span>
          </p>
        </div>

        {/* Email Confirmation Alert */}
        {emailSent && (
          <Alert className="mb-6">
            <Mail className="h-4 w-4" />
            <AlertDescription>
              Confirmation email with QR codes sent to {booking.customerEmail}
            </AlertDescription>
          </Alert>
        )}

        {/* Booking Details */}
        <div className="space-y-6">
          {booking.items.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <Badge variant="secondary" className="mt-2">
                      Confirmed
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">${item.price}</p>
                    <p className="text-sm text-muted-foreground">{item.participants} participants</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Activity Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{new Date(item.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{item.time} ({item.duration})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{item.participants} participants</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                      <span className="text-sm">{item.meetingPoint}</span>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="text-center">
                    <h4 className="font-semibold mb-2 flex items-center justify-center gap-2">
                      <QrCode className="h-4 w-4" />
                      Your Ticket QR Code
                    </h4>
                    <div className="bg-white p-4 rounded-lg border inline-block">
                      <img
                        src={item.qrCode}
                        alt="QR Code"
                        className="w-32 h-32 mx-auto"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Show this QR code at the meeting point
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => downloadTicket(item)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Ticket
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Payment Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total Activities</span>
                  <span>{booking.items.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Participants</span>
                  <span>{booking.items.reduce((sum, item) => sum + item.participants, 0)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Paid</span>
                  <span>${booking.totalAmount.toFixed(2)} {booking.currency}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Payment processed on {new Date(booking.bookingDate).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-medium">Check Your Email</h4>
                    <p className="text-sm text-muted-foreground">
                      We've sent detailed confirmation with QR codes to {booking.customerEmail}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-medium">Save Your QR Codes</h4>
                    <p className="text-sm text-muted-foreground">
                      Download or screenshot your QR codes for easy access during your activities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-medium">Arrive on Time</h4>
                    <p className="text-sm text-muted-foreground">
                      Please arrive at the meeting points 15 minutes before your scheduled time
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button variant="outline">View My Bookings</Button>
            </Link>
            <Link to="/">
              <Button>Book More Activities</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}