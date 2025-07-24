import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Menu, X, Globe, User, ShoppingCart, Heart, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { blink } from '@/blink/client'
import { useLanguage, useTranslations, languageNames, Language } from '@/i18n'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  const handleLogout = () => {
    blink.auth.logout()
  }

  const handleLogin = () => {
    blink.auth.login()
  }

  if (loading) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="animate-pulse bg-gray-200 h-8 w-48 rounded"></div>
            <div className="animate-pulse bg-gray-200 h-8 w-32 rounded"></div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">TX</span>
            </div>
            <span className="font-bold text-xl text-primary">TourXperience</span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder={t.home.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  {languageNames[language]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('es')}>
                  <span>🇪🇸 Español</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  <span>🇺🇸 English</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('fr')}>
                  <span>🇫🇷 Français</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('it')}>
                  <span>🇮🇹 Italiano</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('zh')}>
                  <span>🇨🇳 中文</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Currency Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  USD
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>USD - US Dollar</DropdownMenuItem>
                <DropdownMenuItem>EUR - Euro</DropdownMenuItem>
                <DropdownMenuItem>MXN - Mexican Peso</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {user && (
              <>
                {/* Favorites */}
                <Button variant="ghost" size="sm" className="relative">
                  <Heart className="h-4 w-4" />
                  <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    3
                  </Badge>
                </Button>

                {/* Cart */}
                <Link to="/cart">
                  <Button variant="ghost" size="sm" className="relative">
                    <ShoppingCart className="h-4 w-4" />
                    <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      2
                    </Badge>
                  </Button>
                </Link>
              </>
            )}

            {/* Auth Section */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    {user.displayName || user.email}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <Link to="/dashboard" className="w-full">{t.dashboard.dashboard}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/dashboard" className="w-full">{t.dashboard.myBookings}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/dashboard" className="w-full">{t.dashboard.favorites}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to="/admin" className="w-full">Panel Admin</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    {t.header.logout}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={handleLogin}>
                  {t.header.signIn}
                </Button>
                <Button size="sm" onClick={handleLogin}>
                  {t.header.register}
                </Button>
              </div>
            )}
          </nav>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {user ? (
                    <>
                      <div className="flex items-center space-x-2 pb-4 border-b">
                        <User className="h-5 w-5" />
                        <span className="font-medium">{user.displayName || user.email}</span>
                      </div>
                      
                      <Link to="/dashboard" className="flex items-center space-x-2 p-2 hover:bg-accent rounded-md">
                        <User className="h-4 w-4" />
                        <span>{t.dashboard.dashboard}</span>
                      </Link>
                      
                      <Link to="/dashboard" className="flex items-center space-x-2 p-2 hover:bg-accent rounded-md">
                        <span>{t.dashboard.myBookings}</span>
                      </Link>
                      
                      <Link to="/dashboard" className="flex items-center space-x-2 p-2 hover:bg-accent rounded-md">
                        <Heart className="h-4 w-4" />
                        <span>{t.dashboard.favorites}</span>
                        <Badge variant="secondary" className="ml-auto">3</Badge>
                      </Link>
                      
                      <Link to="/cart" className="flex items-center space-x-2 p-2 hover:bg-accent rounded-md">
                        <ShoppingCart className="h-4 w-4" />
                        <span>{t.header.cart}</span>
                        <Badge variant="secondary" className="ml-auto">2</Badge>
                      </Link>
                      
                      <div className="pt-4 border-t">
                        <Link to="/admin" className="flex items-center space-x-2 p-2 hover:bg-accent rounded-md">
                          <span>Panel Admin</span>
                        </Link>
                        <Button 
                          variant="ghost" 
                          className="w-full justify-start p-2 mt-2 text-red-600"
                          onClick={handleLogout}
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          {t.header.logout}
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-4">
                      <Button className="w-full" onClick={handleLogin}>
                        {t.header.signIn} / {t.header.register}
                      </Button>
                    </div>
                  )}
                  
                  <div className="pt-4 border-t space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{t.header.language}</span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">{languageNames[language]}</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => setLanguage('es')}>
                            <span>🇪🇸 Español</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setLanguage('en')}>
                            <span>🇺🇸 English</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setLanguage('fr')}>
                            <span>🇫🇷 Français</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setLanguage('it')}>
                            <span>🇮🇹 Italiano</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setLanguage('zh')}>
                            <span>🇨🇳 中文</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{t.header.currency}</span>
                      <Button variant="outline" size="sm">USD</Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder={t.home.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}