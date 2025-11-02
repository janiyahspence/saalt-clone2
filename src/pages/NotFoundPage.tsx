import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Phone, ArrowLeft, Building2, Calendar, MapPin } from 'lucide-react';
import { Button } from '../components/Button';

export const NotFoundPage: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Properties', path: '/properties', icon: Building2 },
    { name: 'Events & Weddings', path: '/events', icon: Calendar },
    { name: 'Contact Us', path: '/contact', icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f5f0] to-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] rounded-full mb-6 shadow-2xl">
            <span className="text-6xl font-bold text-white">404</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#1a472a] mb-4">Page Not Found</h1>
          <p className="text-xl text-[#2c3e50] mb-2">
            Oops! The page you're looking for seems to have checked out.
          </p>
          <p className="text-lg text-[#2c3e50]/80">
            Don't worry, we have plenty of other rooms to explore!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Search className="text-[#d4a574]" size={24} />
            <h2 className="text-2xl font-bold text-[#1a472a]">Where would you like to go?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="flex flex-col items-center gap-3 p-6 bg-[#f5f5f0] hover:bg-gradient-to-br hover:from-[#1a472a] hover:to-[#2d6e4b] rounded-xl transition-all duration-300 group"
              >
                <div className="bg-white group-hover:bg-[#d4a574] p-3 rounded-full transition-colors">
                  <link.icon className="text-[#1a472a] group-hover:text-white transition-colors" size={24} />
                </div>
                <span className="font-semibold text-[#2c3e50] group-hover:text-white transition-colors">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/">
            <Button variant="primary" size="lg" className="inline-flex items-center gap-2">
              <Home size={20} />
              Back to Home
            </Button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-white hover:bg-[#f5f5f0] text-[#1a472a] px-8 py-3 rounded-lg font-semibold transition-colors border-2 border-[#1a472a]"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        <div className="bg-gradient-to-r from-[#1a472a] to-[#2d6e4b] rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Need Assistance?</h3>
          <p className="text-white/90 mb-6">
            Our team is available 24/7 to help you find what you're looking for
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919709633313"
              className="inline-flex items-center gap-2 bg-[#d4a574] hover:bg-[#c89356] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone size={20} />
              Call: +91 9709633313
            </a>
            <a
              href="https://wa.me/919709633313"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#1a472a] px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone size={20} />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-[#2c3e50]/60 text-sm">
            Error Code: 404 | Page Not Found
          </p>
        </div>
      </div>
    </div>
  );
};
