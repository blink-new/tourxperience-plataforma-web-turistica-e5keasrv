// Sistema de traducciones para TourXperience
export type Language = 'es' | 'en' | 'fr' | 'it' | 'zh';

export interface Translations {
  // Header & Navigation
  header: {
    search: string;
    language: string;
    currency: string;
    signIn: string;
    register: string;
    dashboard: string;
    logout: string;
    cart: string;
    favorites: string;
  };
  
  // Navigation Menu
  nav: {
    home: string;
    destinations: string;
    categories: string;
    howItWorks: string;
    about: string;
    giftCards: string;
    partnerWithUs: string;
    help: string;
    contact: string;
  };
  
  // Home Page
  home: {
    heroTitle: string;
    heroSubtitle: string;
    searchPlaceholder: string;
    searchButton: string;
    popularDestinations: string;
    categories: string;
    featuredActivities: string;
    viewAll: string;
    from: string;
    duration: string;
    rating: string;
    reviews: string;
    bookNow: string;
  };
  
  // Search & Filters
  search: {
    results: string;
    filters: string;
    priceRange: string;
    duration: string;
    category: string;
    rating: string;
    features: string;
    sortBy: string;
    popularity: string;
    priceAsc: string;
    priceDesc: string;
    ratingDesc: string;
    clear: string;
    apply: string;
  };
  
  // Activity Details
  activity: {
    overview: string;
    highlights: string;
    included: string;
    meetingPoint: string;
    cancellation: string;
    reviews: string;
    selectDate: string;
    selectTime: string;
    participants: string;
    adults: string;
    children: string;
    addToCart: string;
    bookNow: string;
    writeReview: string;
    helpful: string;
    verified: string;
  };
  
  // Cart & Checkout
  cart: {
    title: string;
    empty: string;
    continueShopping: string;
    item: string;
    items: string;
    quantity: string;
    price: string;
    total: string;
    subtotal: string;
    taxes: string;
    discount: string;
    promoCode: string;
    apply: string;
    checkout: string;
    remove: string;
  };
  
  checkout: {
    title: string;
    contactInfo: string;
    billingAddress: string;
    paymentMethod: string;
    orderSummary: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    placeOrder: string;
    processing: string;
  };
  
  // User Dashboard
  dashboard: {
    welcome: string;
    myBookings: string;
    favorites: string;
    profile: string;
    settings: string;
    upcoming: string;
    past: string;
    cancelled: string;
    viewDetails: string;
    downloadTicket: string;
    cancel: string;
  };
  
  // Footer
  footer: {
    stayUpdated: string;
    emailPlaceholder: string;
    subscribe: string;
    company: string;
    support: string;
    legal: string;
    followUs: string;
    allRightsReserved: string;
  };
  
  // Legal Pages
  legal: {
    privacyPolicy: string;
    termsOfService: string;
    cancellationPolicy: string;
    safetyGuidelines: string;
    cookiePolicy: string;
  };
  
  // Common
  common: {
    loading: string;
    error: string;
    success: string;
    cancel: string;
    confirm: string;
    save: string;
    edit: string;
    delete: string;
    back: string;
    next: string;
    previous: string;
    close: string;
    yes: string;
    no: string;
    required: string;
    optional: string;
  };
  
  // Categories
  categories: {
    sightseeing: string;
    foodDrink: string;
    outdoor: string;
    cultural: string;
    adventure: string;
    entertainment: string;
    wellness: string;
    transportation: string;
    shopping: string;
    nightlife: string;
    seasonal: string;
  };
  
  // Email Confirmation
  email: {
    subject: string;
    greeting: string;
    confirmationText: string;
    orderDetails: string;
    orderNumber: string;
    bookingDate: string;
    totalAmount: string;
    activityDetails: string;
    recommendations: string;
    schedule: string;
    contact: string;
    support: string;
    thankYou: string;
    signature: string;
  };
}

export const translations: Record<Language, Translations> = {
  // ESPAÑOL
  es: {
    header: {
      search: 'Buscar',
      language: 'Idioma',
      currency: 'Moneda',
      signIn: 'Iniciar Sesión',
      register: 'Registrarse',
      dashboard: 'Mi Cuenta',
      logout: 'Cerrar Sesión',
      cart: 'Carrito',
      favorites: 'Favoritos',
    },
    nav: {
      home: 'Inicio',
      destinations: 'Destinos',
      categories: 'Categorías',
      howItWorks: 'Cómo Funciona',
      about: 'Sobre Nosotros',
      giftCards: 'Gift Cards',
      partnerWithUs: 'Ser Partner',
      help: 'Ayuda',
      contact: 'Contacto',
    },
    home: {
      heroTitle: 'Descubre Experiencias Únicas en México',
      heroSubtitle: 'Tours, actividades y experiencias auténticas creadas por locales para viajeros como tú',
      searchPlaceholder: 'Buscar destino o actividad...',
      searchButton: 'Buscar',
      popularDestinations: 'Destinos Populares',
      categories: 'Categorías',
      featuredActivities: 'Experiencias Destacadas',
      viewAll: 'Ver Todo',
      from: 'Desde',
      duration: 'Duración',
      rating: 'Calificación',
      reviews: 'reseñas',
      bookNow: 'Reservar Ahora',
    },
    search: {
      results: 'resultados',
      filters: 'Filtros',
      priceRange: 'Rango de Precio',
      duration: 'Duración',
      category: 'Categoría',
      rating: 'Calificación',
      features: 'Características',
      sortBy: 'Ordenar por',
      popularity: 'Popularidad',
      priceAsc: 'Precio: Menor a Mayor',
      priceDesc: 'Precio: Mayor a Menor',
      ratingDesc: 'Mejor Calificación',
      clear: 'Limpiar',
      apply: 'Aplicar',
    },
    activity: {
      overview: 'Descripción',
      highlights: 'Destacados',
      included: 'Incluido',
      meetingPoint: 'Punto de Encuentro',
      cancellation: 'Cancelación',
      reviews: 'Reseñas',
      selectDate: 'Seleccionar Fecha',
      selectTime: 'Seleccionar Hora',
      participants: 'Participantes',
      adults: 'Adultos',
      children: 'Niños',
      addToCart: 'Agregar al Carrito',
      bookNow: 'Reservar Ahora',
      writeReview: 'Escribir Reseña',
      helpful: 'Útil',
      verified: 'Verificado',
    },
    cart: {
      title: 'Carrito de Compras',
      empty: 'Tu carrito está vacío',
      continueShopping: 'Continuar Comprando',
      item: 'artículo',
      items: 'artículos',
      quantity: 'Cantidad',
      price: 'Precio',
      total: 'Total',
      subtotal: 'Subtotal',
      taxes: 'Impuestos',
      discount: 'Descuento',
      promoCode: 'Código Promocional',
      apply: 'Aplicar',
      checkout: 'Finalizar Compra',
      remove: 'Eliminar',
    },
    checkout: {
      title: 'Finalizar Compra',
      contactInfo: 'Información de Contacto',
      billingAddress: 'Dirección de Facturación',
      paymentMethod: 'Método de Pago',
      orderSummary: 'Resumen del Pedido',
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      address: 'Dirección',
      city: 'Ciudad',
      state: 'Estado',
      zipCode: 'Código Postal',
      country: 'País',
      cardNumber: 'Número de Tarjeta',
      expiryDate: 'Fecha de Vencimiento',
      cvv: 'CVV',
      placeOrder: 'Realizar Pedido',
      processing: 'Procesando...',
    },
    dashboard: {
      welcome: 'Bienvenido',
      myBookings: 'Mis Reservas',
      favorites: 'Favoritos',
      profile: 'Perfil',
      settings: 'Configuración',
      upcoming: 'Próximas',
      past: 'Pasadas',
      cancelled: 'Canceladas',
      viewDetails: 'Ver Detalles',
      downloadTicket: 'Descargar Ticket',
      cancel: 'Cancelar',
    },
    footer: {
      stayUpdated: 'Mantente Actualizado',
      emailPlaceholder: 'Tu correo electrónico',
      subscribe: 'Suscribirse',
      company: 'Empresa',
      support: 'Soporte',
      legal: 'Legal',
      followUs: 'Síguenos',
      allRightsReserved: 'Todos los derechos reservados',
    },
    legal: {
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio',
      cancellationPolicy: 'Política de Cancelación',
      safetyGuidelines: 'Guías de Seguridad',
      cookiePolicy: 'Política de Cookies',
    },
    common: {
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      save: 'Guardar',
      edit: 'Editar',
      delete: 'Eliminar',
      back: 'Atrás',
      next: 'Siguiente',
      previous: 'Anterior',
      close: 'Cerrar',
      yes: 'Sí',
      no: 'No',
      required: 'Requerido',
      optional: 'Opcional',
    },
    categories: {
      sightseeing: 'Turismo',
      foodDrink: 'Comida y Bebida',
      outdoor: 'Actividades al Aire Libre',
      cultural: 'Cultural',
      adventure: 'Aventura',
      entertainment: 'Entretenimiento',
      wellness: 'Bienestar',
      transportation: 'Transporte',
      shopping: 'Compras',
      nightlife: 'Vida Nocturna',
      seasonal: 'Estacional',
    },
    email: {
      subject: 'Confirmación de Reserva - TourXperience',
      greeting: 'Estimado/a',
      confirmationText: 'Gracias por tu reserva con TourXperience. Hemos recibido tu pedido y está confirmado.',
      orderDetails: 'Detalles del Pedido',
      orderNumber: 'Número de Orden',
      bookingDate: 'Fecha de Reserva',
      totalAmount: 'Monto Total',
      activityDetails: 'Detalles de la Actividad',
      recommendations: 'Recomendaciones',
      schedule: 'Horario',
      contact: 'Contacto',
      support: 'Soporte',
      thankYou: 'Gracias por elegir TourXperience para tu aventura.',
      signature: 'Equipo TourXperience',
    },
  },

  // ENGLISH
  en: {
    header: {
      search: 'Search',
      language: 'Language',
      currency: 'Currency',
      signIn: 'Sign In',
      register: 'Register',
      dashboard: 'My Account',
      logout: 'Logout',
      cart: 'Cart',
      favorites: 'Favorites',
    },
    nav: {
      home: 'Home',
      destinations: 'Destinations',
      categories: 'Categories',
      howItWorks: 'How It Works',
      about: 'About Us',
      giftCards: 'Gift Cards',
      partnerWithUs: 'Partner With Us',
      help: 'Help',
      contact: 'Contact',
    },
    home: {
      heroTitle: 'Discover Unique Experiences in Mexico',
      heroSubtitle: 'Authentic tours, activities and experiences created by locals for travelers like you',
      searchPlaceholder: 'Search destination or activity...',
      searchButton: 'Search',
      popularDestinations: 'Popular Destinations',
      categories: 'Categories',
      featuredActivities: 'Featured Activities',
      viewAll: 'View All',
      from: 'From',
      duration: 'Duration',
      rating: 'Rating',
      reviews: 'reviews',
      bookNow: 'Book Now',
    },
    search: {
      results: 'results',
      filters: 'Filters',
      priceRange: 'Price Range',
      duration: 'Duration',
      category: 'Category',
      rating: 'Rating',
      features: 'Features',
      sortBy: 'Sort by',
      popularity: 'Popularity',
      priceAsc: 'Price: Low to High',
      priceDesc: 'Price: High to Low',
      ratingDesc: 'Highest Rated',
      clear: 'Clear',
      apply: 'Apply',
    },
    activity: {
      overview: 'Overview',
      highlights: 'Highlights',
      included: 'What\'s Included',
      meetingPoint: 'Meeting Point',
      cancellation: 'Cancellation',
      reviews: 'Reviews',
      selectDate: 'Select Date',
      selectTime: 'Select Time',
      participants: 'Participants',
      adults: 'Adults',
      children: 'Children',
      addToCart: 'Add to Cart',
      bookNow: 'Book Now',
      writeReview: 'Write Review',
      helpful: 'Helpful',
      verified: 'Verified',
    },
    cart: {
      title: 'Shopping Cart',
      empty: 'Your cart is empty',
      continueShopping: 'Continue Shopping',
      item: 'item',
      items: 'items',
      quantity: 'Quantity',
      price: 'Price',
      total: 'Total',
      subtotal: 'Subtotal',
      taxes: 'Taxes',
      discount: 'Discount',
      promoCode: 'Promo Code',
      apply: 'Apply',
      checkout: 'Checkout',
      remove: 'Remove',
    },
    checkout: {
      title: 'Checkout',
      contactInfo: 'Contact Information',
      billingAddress: 'Billing Address',
      paymentMethod: 'Payment Method',
      orderSummary: 'Order Summary',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      city: 'City',
      state: 'State',
      zipCode: 'ZIP Code',
      country: 'Country',
      cardNumber: 'Card Number',
      expiryDate: 'Expiry Date',
      cvv: 'CVV',
      placeOrder: 'Place Order',
      processing: 'Processing...',
    },
    dashboard: {
      welcome: 'Welcome',
      myBookings: 'My Bookings',
      favorites: 'Favorites',
      profile: 'Profile',
      settings: 'Settings',
      upcoming: 'Upcoming',
      past: 'Past',
      cancelled: 'Cancelled',
      viewDetails: 'View Details',
      downloadTicket: 'Download Ticket',
      cancel: 'Cancel',
    },
    footer: {
      stayUpdated: 'Stay Updated',
      emailPlaceholder: 'Your email address',
      subscribe: 'Subscribe',
      company: 'Company',
      support: 'Support',
      legal: 'Legal',
      followUs: 'Follow Us',
      allRightsReserved: 'All rights reserved',
    },
    legal: {
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      cancellationPolicy: 'Cancellation Policy',
      safetyGuidelines: 'Safety Guidelines',
      cookiePolicy: 'Cookie Policy',
    },
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      cancel: 'Cancel',
      confirm: 'Confirm',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      close: 'Close',
      yes: 'Yes',
      no: 'No',
      required: 'Required',
      optional: 'Optional',
    },
    categories: {
      sightseeing: 'Sightseeing',
      foodDrink: 'Food & Drink',
      outdoor: 'Outdoor Activities',
      cultural: 'Cultural',
      adventure: 'Adventure',
      entertainment: 'Entertainment',
      wellness: 'Wellness',
      transportation: 'Transportation',
      shopping: 'Shopping',
      nightlife: 'Nightlife',
      seasonal: 'Seasonal',
    },
    email: {
      subject: 'Booking Confirmation - TourXperience',
      greeting: 'Dear',
      confirmationText: 'Thank you for your booking with TourXperience. We have received your order and it is confirmed.',
      orderDetails: 'Order Details',
      orderNumber: 'Order Number',
      bookingDate: 'Booking Date',
      totalAmount: 'Total Amount',
      activityDetails: 'Activity Details',
      recommendations: 'Recommendations',
      schedule: 'Schedule',
      contact: 'Contact',
      support: 'Support',
      thankYou: 'Thank you for choosing TourXperience for your adventure.',
      signature: 'TourXperience Team',
    },
  },

  // FRANÇAIS
  fr: {
    header: {
      search: 'Rechercher',
      language: 'Langue',
      currency: 'Devise',
      signIn: 'Se Connecter',
      register: 'S\'inscrire',
      dashboard: 'Mon Compte',
      logout: 'Déconnexion',
      cart: 'Panier',
      favorites: 'Favoris',
    },
    nav: {
      home: 'Accueil',
      destinations: 'Destinations',
      categories: 'Catégories',
      howItWorks: 'Comment Ça Marche',
      about: 'À Propos',
      giftCards: 'Cartes Cadeaux',
      partnerWithUs: 'Devenir Partenaire',
      help: 'Aide',
      contact: 'Contact',
    },
    home: {
      heroTitle: 'Découvrez des Expériences Uniques au Mexique',
      heroSubtitle: 'Tours authentiques, activités et expériences créées par des locaux pour des voyageurs comme vous',
      searchPlaceholder: 'Rechercher une destination ou activité...',
      searchButton: 'Rechercher',
      popularDestinations: 'Destinations Populaires',
      categories: 'Catégories',
      featuredActivities: 'Activités en Vedette',
      viewAll: 'Voir Tout',
      from: 'À partir de',
      duration: 'Durée',
      rating: 'Note',
      reviews: 'avis',
      bookNow: 'Réserver Maintenant',
    },
    search: {
      results: 'résultats',
      filters: 'Filtres',
      priceRange: 'Gamme de Prix',
      duration: 'Durée',
      category: 'Catégorie',
      rating: 'Note',
      features: 'Caractéristiques',
      sortBy: 'Trier par',
      popularity: 'Popularité',
      priceAsc: 'Prix: Croissant',
      priceDesc: 'Prix: Décroissant',
      ratingDesc: 'Mieux Noté',
      clear: 'Effacer',
      apply: 'Appliquer',
    },
    activity: {
      overview: 'Aperçu',
      highlights: 'Points Forts',
      included: 'Inclus',
      meetingPoint: 'Point de Rendez-vous',
      cancellation: 'Annulation',
      reviews: 'Avis',
      selectDate: 'Sélectionner Date',
      selectTime: 'Sélectionner Heure',
      participants: 'Participants',
      adults: 'Adultes',
      children: 'Enfants',
      addToCart: 'Ajouter au Panier',
      bookNow: 'Réserver Maintenant',
      writeReview: 'Écrire un Avis',
      helpful: 'Utile',
      verified: 'Vérifié',
    },
    cart: {
      title: 'Panier d\'Achat',
      empty: 'Votre panier est vide',
      continueShopping: 'Continuer les Achats',
      item: 'article',
      items: 'articles',
      quantity: 'Quantité',
      price: 'Prix',
      total: 'Total',
      subtotal: 'Sous-total',
      taxes: 'Taxes',
      discount: 'Remise',
      promoCode: 'Code Promo',
      apply: 'Appliquer',
      checkout: 'Commander',
      remove: 'Supprimer',
    },
    checkout: {
      title: 'Commande',
      contactInfo: 'Informations de Contact',
      billingAddress: 'Adresse de Facturation',
      paymentMethod: 'Méthode de Paiement',
      orderSummary: 'Résumé de Commande',
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'Email',
      phone: 'Téléphone',
      address: 'Adresse',
      city: 'Ville',
      state: 'État',
      zipCode: 'Code Postal',
      country: 'Pays',
      cardNumber: 'Numéro de Carte',
      expiryDate: 'Date d\'Expiration',
      cvv: 'CVV',
      placeOrder: 'Passer Commande',
      processing: 'Traitement...',
    },
    dashboard: {
      welcome: 'Bienvenue',
      myBookings: 'Mes Réservations',
      favorites: 'Favoris',
      profile: 'Profil',
      settings: 'Paramètres',
      upcoming: 'À Venir',
      past: 'Passées',
      cancelled: 'Annulées',
      viewDetails: 'Voir Détails',
      downloadTicket: 'Télécharger Billet',
      cancel: 'Annuler',
    },
    footer: {
      stayUpdated: 'Restez Informé',
      emailPlaceholder: 'Votre adresse email',
      subscribe: 'S\'abonner',
      company: 'Entreprise',
      support: 'Support',
      legal: 'Légal',
      followUs: 'Suivez-nous',
      allRightsReserved: 'Tous droits réservés',
    },
    legal: {
      privacyPolicy: 'Politique de Confidentialité',
      termsOfService: 'Conditions de Service',
      cancellationPolicy: 'Politique d\'Annulation',
      safetyGuidelines: 'Consignes de Sécurité',
      cookiePolicy: 'Politique des Cookies',
    },
    common: {
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès',
      cancel: 'Annuler',
      confirm: 'Confirmer',
      save: 'Sauvegarder',
      edit: 'Modifier',
      delete: 'Supprimer',
      back: 'Retour',
      next: 'Suivant',
      previous: 'Précédent',
      close: 'Fermer',
      yes: 'Oui',
      no: 'Non',
      required: 'Requis',
      optional: 'Optionnel',
    },
    categories: {
      sightseeing: 'Visite Touristique',
      foodDrink: 'Nourriture et Boisson',
      outdoor: 'Activités de Plein Air',
      cultural: 'Culturel',
      adventure: 'Aventure',
      entertainment: 'Divertissement',
      wellness: 'Bien-être',
      transportation: 'Transport',
      shopping: 'Shopping',
      nightlife: 'Vie Nocturne',
      seasonal: 'Saisonnier',
    },
    email: {
      subject: 'Confirmation de Réservation - TourXperience',
      greeting: 'Cher/Chère',
      confirmationText: 'Merci pour votre réservation avec TourXperience. Nous avons reçu votre commande et elle est confirmée.',
      orderDetails: 'Détails de la Commande',
      orderNumber: 'Numéro de Commande',
      bookingDate: 'Date de Réservation',
      totalAmount: 'Montant Total',
      activityDetails: 'Détails de l\'Activité',
      recommendations: 'Recommandations',
      schedule: 'Horaire',
      contact: 'Contact',
      support: 'Support',
      thankYou: 'Merci d\'avoir choisi TourXperience pour votre aventure.',
      signature: 'Équipe TourXperience',
    },
  },

  // ITALIANO
  it: {
    header: {
      search: 'Cerca',
      language: 'Lingua',
      currency: 'Valuta',
      signIn: 'Accedi',
      register: 'Registrati',
      dashboard: 'Il Mio Account',
      logout: 'Esci',
      cart: 'Carrello',
      favorites: 'Preferiti',
    },
    nav: {
      home: 'Home',
      destinations: 'Destinazioni',
      categories: 'Categorie',
      howItWorks: 'Come Funziona',
      about: 'Chi Siamo',
      giftCards: 'Carte Regalo',
      partnerWithUs: 'Diventa Partner',
      help: 'Aiuto',
      contact: 'Contatto',
    },
    home: {
      heroTitle: 'Scopri Esperienze Uniche in Messico',
      heroSubtitle: 'Tour autentici, attività ed esperienze create da locali per viaggiatori come te',
      searchPlaceholder: 'Cerca destinazione o attività...',
      searchButton: 'Cerca',
      popularDestinations: 'Destinazioni Popolari',
      categories: 'Categorie',
      featuredActivities: 'Attività in Evidenza',
      viewAll: 'Vedi Tutto',
      from: 'Da',
      duration: 'Durata',
      rating: 'Valutazione',
      reviews: 'recensioni',
      bookNow: 'Prenota Ora',
    },
    search: {
      results: 'risultati',
      filters: 'Filtri',
      priceRange: 'Fascia di Prezzo',
      duration: 'Durata',
      category: 'Categoria',
      rating: 'Valutazione',
      features: 'Caratteristiche',
      sortBy: 'Ordina per',
      popularity: 'Popolarità',
      priceAsc: 'Prezzo: Crescente',
      priceDesc: 'Prezzo: Decrescente',
      ratingDesc: 'Più Votato',
      clear: 'Cancella',
      apply: 'Applica',
    },
    activity: {
      overview: 'Panoramica',
      highlights: 'Punti Salienti',
      included: 'Incluso',
      meetingPoint: 'Punto d\'Incontro',
      cancellation: 'Cancellazione',
      reviews: 'Recensioni',
      selectDate: 'Seleziona Data',
      selectTime: 'Seleziona Ora',
      participants: 'Partecipanti',
      adults: 'Adulti',
      children: 'Bambini',
      addToCart: 'Aggiungi al Carrello',
      bookNow: 'Prenota Ora',
      writeReview: 'Scrivi Recensione',
      helpful: 'Utile',
      verified: 'Verificato',
    },
    cart: {
      title: 'Carrello della Spesa',
      empty: 'Il tuo carrello è vuoto',
      continueShopping: 'Continua lo Shopping',
      item: 'articolo',
      items: 'articoli',
      quantity: 'Quantità',
      price: 'Prezzo',
      total: 'Totale',
      subtotal: 'Subtotale',
      taxes: 'Tasse',
      discount: 'Sconto',
      promoCode: 'Codice Promo',
      apply: 'Applica',
      checkout: 'Checkout',
      remove: 'Rimuovi',
    },
    checkout: {
      title: 'Checkout',
      contactInfo: 'Informazioni di Contatto',
      billingAddress: 'Indirizzo di Fatturazione',
      paymentMethod: 'Metodo di Pagamento',
      orderSummary: 'Riepilogo Ordine',
      firstName: 'Nome',
      lastName: 'Cognome',
      email: 'Email',
      phone: 'Telefono',
      address: 'Indirizzo',
      city: 'Città',
      state: 'Stato',
      zipCode: 'CAP',
      country: 'Paese',
      cardNumber: 'Numero Carta',
      expiryDate: 'Data di Scadenza',
      cvv: 'CVV',
      placeOrder: 'Effettua Ordine',
      processing: 'Elaborazione...',
    },
    dashboard: {
      welcome: 'Benvenuto',
      myBookings: 'Le Mie Prenotazioni',
      favorites: 'Preferiti',
      profile: 'Profilo',
      settings: 'Impostazioni',
      upcoming: 'Prossime',
      past: 'Passate',
      cancelled: 'Cancellate',
      viewDetails: 'Vedi Dettagli',
      downloadTicket: 'Scarica Biglietto',
      cancel: 'Cancella',
    },
    footer: {
      stayUpdated: 'Rimani Aggiornato',
      emailPlaceholder: 'Il tuo indirizzo email',
      subscribe: 'Iscriviti',
      company: 'Azienda',
      support: 'Supporto',
      legal: 'Legale',
      followUs: 'Seguici',
      allRightsReserved: 'Tutti i diritti riservati',
    },
    legal: {
      privacyPolicy: 'Politica sulla Privacy',
      termsOfService: 'Termini di Servizio',
      cancellationPolicy: 'Politica di Cancellazione',
      safetyGuidelines: 'Linee Guida di Sicurezza',
      cookiePolicy: 'Politica sui Cookie',
    },
    common: {
      loading: 'Caricamento...',
      error: 'Errore',
      success: 'Successo',
      cancel: 'Cancella',
      confirm: 'Conferma',
      save: 'Salva',
      edit: 'Modifica',
      delete: 'Elimina',
      back: 'Indietro',
      next: 'Avanti',
      previous: 'Precedente',
      close: 'Chiudi',
      yes: 'Sì',
      no: 'No',
      required: 'Richiesto',
      optional: 'Opzionale',
    },
    categories: {
      sightseeing: 'Turismo',
      foodDrink: 'Cibo e Bevande',
      outdoor: 'Attività all\'Aperto',
      cultural: 'Culturale',
      adventure: 'Avventura',
      entertainment: 'Intrattenimento',
      wellness: 'Benessere',
      transportation: 'Trasporto',
      shopping: 'Shopping',
      nightlife: 'Vita Notturna',
      seasonal: 'Stagionale',
    },
    email: {
      subject: 'Conferma Prenotazione - TourXperience',
      greeting: 'Caro/Cara',
      confirmationText: 'Grazie per la tua prenotazione con TourXperience. Abbiamo ricevuto il tuo ordine ed è confermato.',
      orderDetails: 'Dettagli dell\'Ordine',
      orderNumber: 'Numero Ordine',
      bookingDate: 'Data Prenotazione',
      totalAmount: 'Importo Totale',
      activityDetails: 'Dettagli dell\'Attività',
      recommendations: 'Raccomandazioni',
      schedule: 'Orario',
      contact: 'Contatto',
      support: 'Supporto',
      thankYou: 'Grazie per aver scelto TourXperience per la tua avventura.',
      signature: 'Team TourXperience',
    },
  },

  // 中文 (MANDARIN)
  zh: {
    header: {
      search: '搜索',
      language: '语言',
      currency: '货币',
      signIn: '登录',
      register: '注册',
      dashboard: '我的账户',
      logout: '退出',
      cart: '购物车',
      favorites: '收藏',
    },
    nav: {
      home: '首页',
      destinations: '目的地',
      categories: '分类',
      howItWorks: '如何使用',
      about: '关于我们',
      giftCards: '礼品卡',
      partnerWithUs: '成为合作伙伴',
      help: '帮助',
      contact: '联系我们',
    },
    home: {
      heroTitle: '发现墨西哥独特体验',
      heroSubtitle: '由当地人为像您这样的旅行者创造的正宗旅游、活动和体验',
      searchPlaceholder: '搜索目的地或活动...',
      searchButton: '搜索',
      popularDestinations: '热门目的地',
      categories: '分类',
      featuredActivities: '精选活动',
      viewAll: '查看全部',
      from: '起价',
      duration: '时长',
      rating: '评分',
      reviews: '评价',
      bookNow: '立即预订',
    },
    search: {
      results: '结果',
      filters: '筛选',
      priceRange: '价格范围',
      duration: '时长',
      category: '分类',
      rating: '评分',
      features: '特色',
      sortBy: '排序',
      popularity: '热门度',
      priceAsc: '价格：低到高',
      priceDesc: '价格：高到低',
      ratingDesc: '评分最高',
      clear: '清除',
      apply: '应用',
    },
    activity: {
      overview: '概览',
      highlights: '亮点',
      included: '包含内容',
      meetingPoint: '集合地点',
      cancellation: '取消政策',
      reviews: '评价',
      selectDate: '选择日期',
      selectTime: '选择时间',
      participants: '参与者',
      adults: '成人',
      children: '儿童',
      addToCart: '加入购物车',
      bookNow: '立即预订',
      writeReview: '写评价',
      helpful: '有用',
      verified: '已验证',
    },
    cart: {
      title: '购物车',
      empty: '您的购物车是空的',
      continueShopping: '继续购物',
      item: '项',
      items: '项',
      quantity: '数量',
      price: '价格',
      total: '总计',
      subtotal: '小计',
      taxes: '税费',
      discount: '折扣',
      promoCode: '促销代码',
      apply: '应用',
      checkout: '结账',
      remove: '移除',
    },
    checkout: {
      title: '结账',
      contactInfo: '联系信息',
      billingAddress: '账单地址',
      paymentMethod: '支付方式',
      orderSummary: '订单摘要',
      firstName: '名',
      lastName: '姓',
      email: '邮箱',
      phone: '电话',
      address: '地址',
      city: '城市',
      state: '州/省',
      zipCode: '邮编',
      country: '国家',
      cardNumber: '卡号',
      expiryDate: '有效期',
      cvv: 'CVV',
      placeOrder: '下单',
      processing: '处理中...',
    },
    dashboard: {
      welcome: '欢迎',
      myBookings: '我的预订',
      favorites: '收藏',
      profile: '个人资料',
      settings: '设置',
      upcoming: '即将到来',
      past: '过去的',
      cancelled: '已取消',
      viewDetails: '查看详情',
      downloadTicket: '下载票据',
      cancel: '取消',
    },
    footer: {
      stayUpdated: '保持更新',
      emailPlaceholder: '您的邮箱地址',
      subscribe: '订阅',
      company: '公司',
      support: '支持',
      legal: '法律',
      followUs: '关注我们',
      allRightsReserved: '版权所有',
    },
    legal: {
      privacyPolicy: '隐私政策',
      termsOfService: '服务条款',
      cancellationPolicy: '取消政策',
      safetyGuidelines: '安全指南',
      cookiePolicy: 'Cookie政策',
    },
    common: {
      loading: '加载中...',
      error: '错误',
      success: '成功',
      cancel: '取消',
      confirm: '确认',
      save: '保存',
      edit: '编辑',
      delete: '删除',
      back: '返回',
      next: '下一步',
      previous: '上一步',
      close: '关闭',
      yes: '是',
      no: '否',
      required: '必填',
      optional: '可选',
    },
    categories: {
      sightseeing: '观光',
      foodDrink: '美食饮品',
      outdoor: '户外活动',
      cultural: '文化',
      adventure: '冒险',
      entertainment: '娱乐',
      wellness: '健康',
      transportation: '交通',
      shopping: '购物',
      nightlife: '夜生活',
      seasonal: '季节性',
    },
    email: {
      subject: '预订确认 - TourXperience',
      greeting: '亲爱的',
      confirmationText: '感谢您在TourXperience的预订。我们已收到您的订单并已确认。',
      orderDetails: '订单详情',
      orderNumber: '订单号',
      bookingDate: '预订日期',
      totalAmount: '总金额',
      activityDetails: '活动详情',
      recommendations: '建议',
      schedule: '时间安排',
      contact: '联系方式',
      support: '支持',
      thankYou: '感谢您选择TourXperience进行您的冒险之旅。',
      signature: 'TourXperience团队',
    },
  },
};

// Language names for display
export const languageNames: Record<Language, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
  it: 'Italiano',
  zh: '中文',
};

// Default language
export const DEFAULT_LANGUAGE: Language = 'es';