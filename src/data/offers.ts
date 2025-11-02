export interface Package {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  price: string;
  duration?: string;
  image: string;
  properties: string[];
  validUntil?: string;
  badge?: string;
}

export const packages: Package[] = [
  {
    id: 'grand-wedding-celebration',
    title: 'Grand Wedding Celebration Package',
    category: 'Wedding',
    description: 'Transform your special day into an unforgettable celebration at Bihar\'s premier wedding destination. Our comprehensive package includes stunning venues, world-class catering, and impeccable service for your dream wedding.',
    features: [
      '40,000 sq.ft landscaped garden venue for 3,500 guests',
      'Three elegant banquet halls with customizable layouts',
      'Complete décor with floral arrangements and lighting',
      'Multi-cuisine catering with customized menus',
      '25 premium rooms for wedding guests',
      'Dedicated wedding planner and coordination team',
      'Bridal suite with luxury amenities',
      'Pre-wedding venue access for photoshoot',
      'DJ, sound system, and stage setup',
      'Valet parking and guest assistance'
    ],
    price: 'Starting from ₹15,00,000',
    duration: 'Customizable packages available',
    image: '/narayana-weddin1.JPG',
    properties: ['Narayana Greens'],
    badge: 'Most Popular'
  },
  {
    id: 'corporate-conference-excellence',
    title: 'Corporate Excellence Package',
    category: 'Corporate',
    description: 'Host successful business events with our professional conference facilities and comprehensive corporate services. Perfect for meetings, seminars, training programs, and corporate gatherings of all sizes.',
    features: [
      'State-of-the-art conference halls with AV equipment',
      'High-speed WiFi and business center access',
      'Professional event coordination support',
      'Accommodation for all attendees',
      'Multiple coffee breaks and gourmet lunch',
      'Flexible seating arrangements (theater, classroom, U-shape)',
      'Projector, screens, and presentation equipment',
      'Team building activities and breakout rooms',
      'Airport and railway station transfers',
      'Secure parking and 24/7 support'
    ],
    price: 'Starting from ₹2,500/person/day',
    duration: 'Flexible duration options',
    image: '/Corporate Excellence Package.png',
    properties: ['Patliputra Saalt', 'Narayana Greens'],
    badge: 'Business Choice'
  },
  {
    id: 'spiritual-pilgrimage-journey',
    title: 'Sacred Pilgrimage Journey',
    category: 'Pilgrimage',
    description: 'Embark on a transformative spiritual journey with our carefully curated pilgrimage packages. Experience divine blessings at sacred sites with comfortable stays, guided tours, and complete travel arrangements.',
    features: [
      'Comfortable accommodation near holy sites',
      'Guided temple tours with knowledgeable guides',
      'Early morning darshan arrangements',
      'Pure vegetarian sattvic meals',
      'Airport and railway station pickup/drop',
      'Meditation and prayer spaces',
      'Puja thali and offerings included',
      'Visit to multiple temples and spiritual centers',
      'Flexible itineraries for groups and families',
      'English, Hindi, and regional language support'
    ],
    price: 'Starting from ₹8,500/person',
    duration: '2-4 days packages',
    image: '/Sacred Pilgrimage Journey.avif',
    properties: ['Buddha Saalt', 'Deoghar Saalt', 'Narayana Greens'],
    badge: 'Spiritual'
  },
  {
    id: 'bodh-gaya-buddhist',
    title: 'Bodh Gaya Buddhist Pilgrimage',
    category: 'Pilgrimage',
    description: 'Complete Buddhist circuit package with guided temple tours, meditation sessions, and comfortable accommodation near Mahabodhi Temple.',
    features: [
      '3 nights accommodation',
      'Guided tours to all major temples',
      'Mahabodhi Temple visit',
      'Meditation sessions',
      'Vegetarian meals',
      'Airport/station pickup',
      'English/Japanese speaking guide',
      'Donation to monastery included'
    ],
    price: '₹12,000 per person',
    duration: '3 Nights / 4 Days',
    image: '/buddha-saalt-properties.webp',
    properties: ['Buddha Saalt', 'Narayana Greens']
  },
  {
    id: 'baidyanath-jyotirlinga',
    title: 'Baidyanath Jyotirlinga Darshan',
    category: 'Pilgrimage',
    description: 'Sacred pilgrimage package to Baba Baidyanath Temple with convenient stay near railway station and temple transportation.',
    features: [
      '2 nights accommodation',
      'Daily temple transportation',
      'Early morning darshan arrangement',
      'Puja thali included',
      'Vegetarian meals',
      'Railway station pickup/drop',
      'Naulakha Mandir visit',
      'Tapovan Hills excursion'
    ],
    price: '₹8,500 per person',
    duration: '2 Nights / 3 Days',
    image: 'https://images.unsplash.com/photo-1582552938357-32b906d3c1ab?w=800',
    properties: ['Deoghar Saalt']
  },
  {
    id: 'corporate-conference',
    title: 'Corporate Conference Package',
    category: 'Corporate',
    description: 'Professional conference package with modern facilities, business amenities, and team building activities for corporate groups.',
    features: [
      'Conference hall with AV equipment',
      'High-speed WiFi',
      'Business center access',
      'Accommodation for all attendees',
      'Coffee and lunch breaks',
      'Team building activities',
      'Airport transfers',
      'Event coordinator support'
    ],
    price: 'Starting from ₹2,500/person/day',
    duration: 'Flexible duration',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    properties: ['Patliputra Saalt', 'Narayana Greens']
  },
  {
    id: 'family-vacation',
    title: 'Family Vacation Package',
    category: 'Family',
    description: 'Perfect family getaway with activities for all ages, spacious accommodations, and special amenities for children.',
    features: [
      'Interconnected family rooms',
      'Swimming pool access',
      'Special kids menu',
      'Indoor and outdoor games',
      'Local sightseeing tours',
      'Complimentary breakfast',
      'Babysitting services available',
      'Family photography session'
    ],
    price: 'Starting from ₹6,500/night',
    duration: 'Minimum 2 nights',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
    properties: ['Narayana Greens', 'Patliputra Saalt']
  },
  {
    id: 'honeymoon-bliss',
    title: 'Honeymoon Bliss Package',
    category: 'Romance',
    description: 'Romantic honeymoon package with luxury accommodations, couples spa, candlelight dinner, and special amenities for newlyweds.',
    features: [
      'Deluxe room with pool view',
      'Room decoration with flowers',
      'Couples spa treatment',
      'Candlelight dinner',
      'Complimentary champagne',
      'Late checkout',
      'Honeymoon photography',
      'Special honeymoon cake'
    ],
    price: '₹18,000 for 2 nights',
    duration: '2 Nights / 3 Days',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    properties: ['Narayana Greens'],
    badge: 'Romantic'
  },
  {
    id: 'early-bird',
    title: 'Early Bird Discount',
    category: 'Special Offer',
    description: 'Book 30 days in advance and save up to 25% on your stay at any Saalt property. Perfect for planned trips.',
    features: [
      '25% discount on room rates',
      'Free room upgrade (subject to availability)',
      'Complimentary breakfast',
      'Free cancellation up to 7 days',
      'Priority check-in',
      'Welcome amenities'
    ],
    price: 'Save up to 25%',
    duration: 'Year-round offer',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    properties: ['All Properties'],
    badge: 'Limited Time'
  },
  {
    id: 'long-stay',
    title: 'Long Stay Corporate Rates',
    category: 'Corporate',
    description: 'Exclusive rates for extended business stays with flexible terms and added conveniences for corporate guests.',
    features: [
      'Weekly/monthly discounted rates',
      'Laundry service included',
      'Business center access',
      'Free WiFi and parking',
      'Flexible payment terms',
      'Complimentary breakfast',
      'Room cleaning 3 times weekly',
      'Dedicated relationship manager'
    ],
    price: 'Starting from ₹65,000/month',
    duration: 'Minimum 1 month',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    properties: ['Patliputra Saalt', 'Deoghar Saalt']
  },
  {
    id: 'group-booking',
    title: 'Group Booking Benefits',
    category: 'Special Offer',
    description: 'Special rates and benefits for group bookings of 10+ rooms. Perfect for family reunions, tour groups, and large gatherings.',
    features: [
      '15% discount on 10+ rooms',
      'Complimentary meeting space',
      'Group meal arrangements',
      'Dedicated group coordinator',
      'Flexible check-in/out',
      'Free parking for tour buses',
      'Welcome refreshments',
      'Customized itinerary assistance'
    ],
    price: 'Custom pricing for 10+ rooms',
    duration: 'Year-round',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800',
    properties: ['All Properties']
  },
  {
    id: 'festival-special',
    title: 'Festival Special Package',
    category: 'Seasonal',
    description: 'Celebrate major Indian festivals with our special package including festive decorations, traditional cuisine, and cultural programs.',
    features: [
      'Festive room decoration',
      'Special festival menu',
      'Cultural program and entertainment',
      'Traditional welcome ceremony',
      'Festive gifts',
      'Complimentary breakfast',
      'Late checkout',
      'Photography services'
    ],
    price: 'Starting from ₹4,500/night',
    duration: 'During Diwali, Holi, Durga Puja, Chhath Puja',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    properties: ['All Properties']
  }
];
