import React, { useState } from 'react';
import { VideoHero } from '../components/VideoHero';
import { Button } from '../components/Button';
import { packages } from '../data/offers';
import { Sparkles, Check, Calendar, MapPin, Tag } from 'lucide-react';

export const OffersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Seasonal', 'Wedding', 'Pilgrimage', 'Corporate', 'Family', 'Romance', 'Special Offer'];

  const filteredPackages = selectedCategory === 'all'
    ? packages
    : packages.filter(pkg => pkg.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <VideoHero
        videoPlaceholder="/narayana-greens-proeperties.avif"
        title="Special Offers & Packages"
        subtitle="Discover exclusive deals and curated packages for every occasion"
        height="h-[60vh]"
      />

      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#1a472a] to-[#2d6e4b] text-white shadow-lg'
                    : 'bg-gray-100 text-[#2c3e50] hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Packages' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-56 object-cover"
                  />
                  {pkg.badge && (
                    <div className="absolute top-4 right-4 bg-[#d4a574] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {pkg.badge}
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1a472a] px-3 py-1 rounded-full text-xs font-semibold">
                    {pkg.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a472a] mb-2">{pkg.title}</h3>
                  <p className="text-[#2c3e50] mb-4 line-clamp-2">{pkg.description}</p>

                  <div className="space-y-2 mb-4">
                    {pkg.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="text-[#2d6e4b] flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-sm text-[#2c3e50]">{feature}</span>
                      </div>
                    ))}
                    {pkg.features.length > 4 && (
                      <p className="text-sm text-[#d4a574] font-medium">
                        +{pkg.features.length - 4} more features
                      </p>
                    )}
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-[#2c3e50] mb-2">
                      <MapPin size={16} className="text-[#d4a574]" />
                      <span>{pkg.properties.join(', ')}</span>
                    </div>
                    {pkg.duration && (
                      <div className="flex items-center gap-2 text-sm text-[#2c3e50] mb-2">
                        <Calendar size={16} className="text-[#d4a574]" />
                        <span>{pkg.duration}</span>
                      </div>
                    )}
                    {pkg.validUntil && (
                      <div className="flex items-center gap-2 text-sm text-[#2c3e50]">
                        <Tag size={16} className="text-[#d4a574]" />
                        <span>Valid until {pkg.validUntil}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-[#1a472a]">{pkg.price}</p>
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={() => window.open(`https://wa.me/919709633313?text=Hi, I'm interested in the ${pkg.title} package`, '_blank')}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Sparkles className="mx-auto mb-4 text-[#d4a574]" size={48} />
            <h2 className="text-4xl font-bold mb-4">Why Book Directly with Us?</h2>
            <div className="w-24 h-1 bg-[#d4a574] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl font-bold mb-2">25%</div>
                <p className="text-lg">Best Price Guarantee</p>
                <p className="text-sm text-white/80 mt-2">Lowest rates available only on direct bookings</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl font-bold mb-2">Free</div>
                <p className="text-lg">Cancellation</p>
                <p className="text-sm text-white/80 mt-2">Cancel up to 7 days before check-in on most packages</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-lg">Customer Support</p>
                <p className="text-sm text-white/80 mt-2">Round-the-clock assistance for all your queries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1a472a] mb-6">Need a Custom Package?</h2>
          <p className="text-lg text-[#2c3e50] mb-8">
            Can't find exactly what you're looking for? Our team can create a personalized package
            tailored to your specific requirements, group size, and budget.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => window.open('https://wa.me/919709633313?text=Hi, I would like to inquire about a custom package', '_blank')}
          >
            Request Custom Package
          </Button>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#1a472a] mb-6">Terms & Conditions</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-[#2c3e50]">
              <div>
                <h4 className="font-semibold text-[#1a472a] mb-2">Booking & Payment</h4>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Advance payment required to confirm booking</li>
                  <li>Prices subject to availability and seasonal variations</li>
                  <li>GST and taxes applicable as per government regulations</li>
                  <li>Payment can be made via card, UPI, or bank transfer</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#1a472a] mb-2">Cancellation Policy</h4>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Free cancellation up to 7 days before check-in</li>
                  <li>50% refund for cancellations 3-7 days before</li>
                  <li>No refund for cancellations within 3 days</li>
                  <li>Wedding packages have different cancellation terms</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#1a472a] mb-2">Check-in/Check-out</h4>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Standard check-in: 12:00 PM</li>
                  <li>Standard check-out: 11:00 AM</li>
                  <li>Early check-in subject to availability</li>
                  <li>Late checkout may incur additional charges</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#1a472a] mb-2">General Terms</h4>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Valid government ID required at check-in</li>
                  <li>Packages non-transferable to other properties</li>
                  <li>Management reserves right to modify terms</li>
                  <li>Special requests subject to availability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
