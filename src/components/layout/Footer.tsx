import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/use-toast'
import { blink } from '@/blink/client'
import { useState } from 'react'
import { useTranslations } from '../../i18n'

export default function Footer() {
  const t = useTranslations()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleNewsletterSubmit = async () => {
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      })
      return
    }

    setIsLoading(true)
    try {
      // Send notification email to admin
      await blink.notifications.email({
        to: 'gaaderman@gmail.com',
        subject: 'New Newsletter Subscription - TourXperience',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563EB;">New Newsletter Subscription</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Source:</strong> Footer Newsletter Form</p>
            <hr style="margin: 20px 0;">
            <p style="color: #666; font-size: 12px;">This email was sent from TourXperience newsletter subscription form.</p>
          </div>
        `,
        text: `New Newsletter Subscription\n\nEmail: ${email}\nDate: ${new Date().toLocaleString()}\nSource: Footer Newsletter Form`
      })

      toast({
        title: "Subscribed Successfully!",
        description: "Thank you for subscribing to our newsletter."
      })
      setEmail('')
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "There was an error subscribing to the newsletter. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <footer className="bg-slate-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TX</span>
              </div>
              <span className="font-bold text-xl text-primary">TourXperience</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Discover amazing experiences around the world. Book tours, activities, and unique adventures with confidence.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link to="/how-it-works" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </Link>
              <Link to="/destinations" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Destinations
              </Link>
              <Link to="/categories" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Categories
              </Link>
              <Link to="/gift-cards" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Gift Cards
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <div className="space-y-2">
              <Link to="/help" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
              <Link to="/cancellation-policy" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cancellation Policy
              </Link>
              <Link to="/safety-guidelines" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Safety Guidelines
              </Link>
              <Link to="/partner-with-us" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Partner with Us
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t.footer.stayUpdated}</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest deals and travel inspiration delivered to your inbox.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder={t.footer.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <Button 
                className="w-full" 
                onClick={handleNewsletterSubmit}
                disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : t.footer.subscribe}
              </Button>
            </div>
            <div className="space-y-2 pt-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>soporte@tourxperience.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+52 (55) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap items-center space-x-4 text-sm text-muted-foreground">
            <span>© 2024 TourXperience. {t.footer.allRightsReserved}</span>
          </div>
          <div className="flex flex-wrap items-center space-x-4 text-sm">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.legal.privacyPolicy}
            </Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.legal.termsOfService}
            </Link>
            <Link to="/cookie-policy" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.legal.cookiePolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}