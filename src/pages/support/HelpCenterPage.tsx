import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  Search, MessageCircle, Phone, Mail, Clock, 
  HelpCircle, BookOpen, CreditCard, Shield, 
  MapPin, Users, Calendar, RefreshCw
} from 'lucide-react'

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const popularTopics = [
    { icon: BookOpen, title: 'Booking & Reservations', count: 15 },
    { icon: CreditCard, title: 'Payments & Refunds', count: 12 },
    { icon: RefreshCw, title: 'Cancellations', count: 8 },
    { icon: Calendar, title: 'Rescheduling', count: 6 },
    { icon: Shield, title: 'Safety Guidelines', count: 10 },
    { icon: MapPin, title: 'Meeting Points', count: 7 }
  ]

  const faqs = [
    {
      category: 'Booking',
      questions: [
        {
          question: 'How do I book an activity?',
          answer: 'You can book an activity by selecting your preferred date and time, choosing the number of participants, and clicking "Book Now". You\'ll be guided through our secure checkout process.'
        },
        {
          question: 'Can I book for someone else?',
          answer: 'Yes, you can book activities for other people. Just make sure to provide their correct contact information during checkout for confirmation details.'
        },
        {
          question: 'Do I need to print my tickets?',
          answer: 'No, you don\'t need to print tickets. You\'ll receive a digital confirmation with a QR code that you can show on your mobile device.'
        }
      ]
    },
    {
      category: 'Payments',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and various local payment methods depending on your location.'
        },
        {
          question: 'When will I be charged?',
          answer: 'For most bookings, you\'ll be charged immediately upon confirmation. Some activities may offer "Reserve Now, Pay Later" options.'
        },
        {
          question: 'Are there any additional fees?',
          answer: 'The price you see includes all taxes and fees. There are no hidden charges or booking fees added at checkout.'
        }
      ]
    },
    {
      category: 'Cancellations',
      questions: [
        {
          question: 'Can I cancel my booking?',
          answer: 'Most activities offer free cancellation up to 24 hours before the start time. Check your booking confirmation for specific cancellation policies.'
        },
        {
          question: 'How do I cancel my booking?',
          answer: 'You can cancel your booking through your account dashboard or by clicking the cancellation link in your confirmation email.'
        },
        {
          question: 'When will I receive my refund?',
          answer: 'Refunds are typically processed within 5-10 business days and will appear on your original payment method.'
        }
      ]
    }
  ]

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', contactForm)
    // In real app, this would send the message
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')
    setContactForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-muted-foreground mb-8">
            How can we help you today?
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg"
            />
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTopics.map((topic, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <topic.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {topic.count} articles
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="Booking" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="Booking">Booking</TabsTrigger>
                    <TabsTrigger value="Payments">Payments</TabsTrigger>
                    <TabsTrigger value="Cancellations">Cancellations</TabsTrigger>
                  </TabsList>
                  
                  {faqs.map((category) => (
                    <TabsContent key={category.category} value={category.category}>
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Live Chat</div>
                    <div className="text-sm text-muted-foreground">
                      Available 24/7
                    </div>
                  </div>
                  <Badge className="ml-auto">Online</Badge>
                </div>
                
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Phone Support</div>
                    <div className="text-sm text-muted-foreground">
                      +52 55 1234 5678
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Email Support</div>
                    <div className="text-sm text-muted-foreground">
                      support@tourxperience.com
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Business Hours</div>
                    <div className="text-sm text-muted-foreground">
                      Mon-Fri: 9AM-6PM (CST)
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="How can we help you?"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="font-medium">TourXperience Mexico</div>
                  <div className="text-sm text-muted-foreground">
                    Av. Insurgentes Sur 1234<br />
                    Col. Del Valle<br />
                    03100 Ciudad de México<br />
                    México
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