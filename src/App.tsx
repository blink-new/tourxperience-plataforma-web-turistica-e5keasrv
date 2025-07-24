import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Toaster } from '@/components/ui/toaster'
import { LanguageProvider } from '@/i18n'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HomePage from '@/pages/HomePage'
import SearchResultsPage from '@/pages/SearchResultsPage'
import ActivityDetailPage from '@/pages/ActivityDetailPage'
import CartPage from '@/pages/CartPage'
import CheckoutPage from '@/pages/CheckoutPage'
import BookingConfirmationPage from '@/pages/BookingConfirmationPage'
import LoginPage from '@/pages/auth/LoginPage'
import RegisterPage from '@/pages/auth/RegisterPage'
import DashboardPage from '@/pages/user/DashboardPage'
import AdminDashboard from '@/pages/admin/AdminDashboard'
import HelpCenterPage from '@/pages/support/HelpCenterPage'
import ContactUsPage from '@/pages/support/ContactUsPage'
import PrivacyPolicyPage from '@/pages/legal/PrivacyPolicyPage'
import TermsOfServicePage from '@/pages/legal/TermsOfServicePage'
import CancellationPolicyPage from '@/pages/legal/CancellationPolicyPage'
import SafetyGuidelinesPage from '@/pages/legal/SafetyGuidelinesPage'
import CookiePolicyPage from '@/pages/legal/CookiePolicyPage'
import AboutUsPage from '@/pages/AboutUsPage'
import HowItWorksPage from '@/pages/HowItWorksPage'
import DestinationsPage from '@/pages/DestinationsPage'
import CategoriesPage from '@/pages/CategoriesPage'
import GiftCardsPage from '@/pages/GiftCardsPage'
import PartnerWithUsPage from '@/pages/PartnerWithUsPage'

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // List of pages that should scroll to top with title visible
    const scrollToTopPages = [
      '/help',
      '/contact',
      '/cancellation-policy',
      '/safety-guidelines',
      '/partner-with-us',
      '/about',
      '/how-it-works',
      '/destinations',
      '/categories',
      '/gift-cards',
      '/privacy-policy',
      '/terms-of-service',
      '/cookie-policy'
    ]

    if (scrollToTopPages.includes(pathname)) {
      // Scroll to top and show title
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname])

  return null
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <ScrollToTop />
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchResultsPage />} />
              <Route path="/activity/:id" element={<ActivityDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/help" element={<HelpCenterPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/cancellation-policy" element={<CancellationPolicyPage />} />
              <Route path="/safety-guidelines" element={<SafetyGuidelinesPage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/gift-cards" element={<GiftCardsPage />} />
              <Route path="/partner-with-us" element={<PartnerWithUsPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App