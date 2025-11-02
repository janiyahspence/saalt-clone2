import React, { useState } from 'react';
import { VideoHero } from '../components/VideoHero';
import { Button } from '../components/Button';
import { properties } from '../data/properties';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Property Interest: ${formData.property || 'General Inquiry'}
Subject: ${formData.subject}
Message: ${formData.message}`;

    window.open(`https://wa.me/919709633313?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <VideoHero
        videoPlaceholder="/saalt-patliputra-properties.jpg"
        title="Get in Touch"
        subtitle="We're here to help with your accommodation needs"
        height="h-[60vh]"
      />

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1a472a] mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#2c3e50] mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2c3e50] mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Property of Interest</label>
                  <select
                    value={formData.property}
                    onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  >
                    <option value="">General Inquiry</option>
                    {properties.map((property) => (
                      <option key={property.id} value={property.name}>
                        {property.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Message *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message via WhatsApp
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#1a472a] mb-6">Contact Information</h2>

              <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
                <h3 className="text-xl font-bold text-[#1a472a] mb-4">Head Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#d4a574] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#2c3e50]">Patliputra Colony, Patna, Bihar, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-[#d4a574]" size={20} />
                    <a href="tel:+919709633313" className="text-[#2c3e50] hover:text-[#1a472a] transition-colors">
                      +91 9709633313
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-[#d4a574]" size={20} />
                    <a href="tel:+917909046993" className="text-[#2c3e50] hover:text-[#1a472a] transition-colors">
                      +91 7909046993
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#d4a574]" size={20} />
                    <a href="mailto:info@saalthotels.com" className="text-[#2c3e50] hover:text-[#1a472a] transition-colors">
                      info@saalthotels.com
                    </a>
                  </div>
                </div>
              </div>

              {properties.map((property) => (
                <div key={property.id} className="bg-white rounded-2xl shadow-lg p-6 mb-4">
                  <h3 className="text-lg font-bold text-[#1a472a] mb-3">{property.shortName}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="text-[#d4a574] flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-[#2c3e50]">{property.address}, {property.state} {property.pincode}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="text-[#d4a574]" size={16} />
                      <a href={`tel:${property.phone}`} className="text-[#2c3e50] hover:text-[#1a472a]">
                        {property.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
