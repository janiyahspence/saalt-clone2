import React from 'react';
import { Link } from 'react-router-dom';
import { VideoHero } from '../components/VideoHero';
import { Home, Building2, Calendar, Image, FileText, Phone, Briefcase, Gift, MapPin, Users, Plane, Shield, HelpCircle, Menu } from 'lucide-react';

export const SitemapPage: React.FC = () => {
  const siteStructure = [
    {
      icon: Home,
      title: 'Main Pages',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Blog', path: '/blog' },
      ],
    },
    {
      icon: Building2,
      title: 'Properties',
      links: [
        { name: 'All Properties', path: '/properties' },
        { name: 'Patliputra Saalt Hotel', path: '/property/patliputra-saalt' },
        { name: 'Narayana Greens Resort', path: '/properties/narayana-greens' },
        { name: 'Buddha Saalt Hotel, Bodh Gaya', path: '/properties/buddha-saalt' },
        { name: 'Deoghar Saalt Hotel', path: '/properties/deoghar-saalt' },
      ],
    },
    {
      icon: Calendar,
      title: 'Events & Services',
      links: [
        { name: 'Events & Weddings', path: '/events' },
        { name: 'Special Offers', path: '/offers' },
        { name: 'Corporate Services', path: '/corporate-services' },
        { name: 'Pilgrimage Tourism', path: '/pilgrimage-tourism' },
        { name: 'Guest Services & Amenities', path: '/guest-services' },
      ],
    },
    {
      icon: Briefcase,
      title: 'Career & Media',
      links: [
        { name: 'Careers', path: '/careers' },
        { name: 'Press & Media', path: '/press-media' },
      ],
    },
    {
      icon: Shield,
      title: 'Legal & Policies',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms & Conditions', path: '/terms-conditions' },
        { name: 'FAQ', path: '/faq' },
      ],
    },
    {
      icon: Menu,
      title: 'Utility Pages',
      links: [
        { name: 'Sitemap', path: '/sitemap' },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <VideoHero
        videoPlaceholder="/saalt-patna.jpg"
        title="Sitemap"
        subtitle="Navigate Through Our Website"
        height="h-[50vh]"
      />

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MapPin className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Website Navigation</h2>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Quick access to all pages and sections of the Saalt Hotels website
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteStructure.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] p-3 rounded-full">
                    <section.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a472a]">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.path}
                        className="flex items-center gap-2 text-[#2c3e50] hover:text-[#1a472a] transition-colors group"
                      >
                        <div className="w-2 h-2 bg-[#d4a574] rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#1a472a] to-[#2d6e4b] rounded-2xl p-8 mt-12 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <p className="flex items-center gap-3">
                    <Phone size={20} className="text-[#d4a574]" />
                    <span>+91 9709633313 / +91 7909046993</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone size={20} className="text-[#d4a574]" />
                    <span>info@saalthotels.com</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <MapPin size={20} className="text-[#d4a574]" />
                    <span>Patliputra Colony, Patna, Bihar</span>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Properties</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Patliputra Saalt Hotel - Patna</li>
                  <li>• Narayana Greens Resort - Patna</li>
                  <li>• Buddha Saalt Hotel - Bodh Gaya</li>
                  <li>• Deoghar Saalt Hotel - Jasidih</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-[#2c3e50] mb-4">
              Can't find what you're looking for?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 bg-[#1a472a] hover:bg-[#2d6e4b] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <HelpCircle size={20} />
                Check FAQ
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#d4a574] hover:bg-[#c89356] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone size={20} />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
