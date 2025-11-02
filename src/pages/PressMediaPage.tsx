import React from 'react';
import { VideoHero } from '../components/VideoHero';
import { Button } from '../components/Button';
import { Newspaper, Award, Image, Download, Mail, Phone, FileText, Video } from 'lucide-react';

export const PressMediaPage: React.FC = () => {
  const pressReleases = [
    {
      date: 'March 15, 2025',
      title: 'Saalt Group Celebrates 6 Years of Hospitality Excellence',
      excerpt: 'Saalt Group of Hotels marks another milestone year, continuing its legacy of providing exceptional hospitality across Bihar and Jharkhand with four premium properties.',
    },
    {
      date: 'January 20, 2025',
      title: 'Narayana Greens Resort Hosts Record 150 Weddings in 2024',
      excerpt: 'Our flagship resort continues to be Bihar\'s premier wedding destination, with couples choosing the venue for its stunning 40,000 sq.ft garden and world-class facilities.',
    },
    {
      date: 'November 10, 2024',
      title: 'Saalt Hotels Launches Sustainable Tourism Initiative',
      excerpt: 'New eco-friendly practices implemented across all properties, including solar power, water conservation, and waste management programs.',
    },
    {
      date: 'August 5, 2024',
      title: 'Buddha Saalt Hotel Expands Services for International Pilgrims',
      excerpt: 'Enhanced amenities and multilingual staff to better serve Buddhist pilgrims from around the world visiting Bodh Gaya.',
    },
  ];

  const awards = [
    {
      year: '2024',
      title: 'Best Business Hotel - Patna',
      organization: 'Bihar Tourism Awards',
      property: 'Patliputra Saalt Hotel',
    },
    {
      year: '2024',
      title: 'Top Wedding Venue in Bihar',
      organization: 'WeddingSutra Awards',
      property: 'Narayana Greens Resort',
    },
    {
      year: '2023',
      title: 'Excellence in Hospitality',
      organization: 'Indian Hotel Federation',
      property: 'Saalt Group',
    },
    {
      year: '2023',
      title: 'Best Pilgrimage Hotel',
      organization: 'Bihar Tourism Board',
      property: 'Buddha Saalt Hotel',
    },
    {
      year: '2022',
      title: 'Outstanding Service Award',
      organization: 'Guest Review Excellence',
      property: 'Deoghar Saalt Hotel',
    },
  ];

  const mediaKit = [
    { name: 'Company Overview & Fact Sheet', type: 'PDF', size: '2.5 MB' },
    { name: 'High-Resolution Property Images', type: 'ZIP', size: '45 MB' },
    { name: 'Logo Package (Various Formats)', type: 'ZIP', size: '8 MB' },
    { name: 'Executive Biographies', type: 'PDF', size: '1.2 MB' },
    { name: 'Press Release Archive', type: 'PDF', size: '3.8 MB' },
  ];

  const coverage = [
    {
      publication: 'The Times of India',
      title: 'Bihar\'s Hospitality Sector Sees Growth with Premium Hotels',
      date: 'February 2025',
    },
    {
      publication: 'Hindustan Times',
      title: 'Saalt Group: Redefining Luxury in Eastern India',
      date: 'December 2024',
    },
    {
      publication: 'Economic Times',
      title: 'Pilgrimage Tourism Boosts Hotel Industry in Bihar',
      date: 'October 2024',
    },
    {
      publication: 'Travel + Leisure India',
      title: 'Top Wedding Destinations in India 2024',
      date: 'September 2024',
    },
  ];

  return (
    <div className="min-h-screen">
      <VideoHero
        videoPlaceholder="/about-saalt-1.png"
        title="Press & Media"
        subtitle="Latest News, Awards, and Media Resources"
        height="h-[60vh]"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Newspaper className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Latest Press Releases</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Stay updated with the latest news and announcements from Saalt Group of Hotels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 text-[#d4a574] text-sm font-semibold mb-3">
                  <FileText size={16} />
                  <span>{release.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1a472a] mb-4">{release.title}</h3>
                <p className="text-[#2c3e50] leading-relaxed mb-4">{release.excerpt}</p>
                <button className="text-[#1a472a] hover:text-[#2d6e4b] font-semibold flex items-center gap-2">
                  Read Full Release
                  <Download size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Awards & Recognition</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Celebrating our achievements and industry recognition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#d4a574] hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] text-white text-center py-2 px-4 rounded-lg mb-4 inline-block font-bold">
                  {award.year}
                </div>
                <h3 className="text-xl font-bold text-[#1a472a] mb-2">{award.title}</h3>
                <p className="text-[#2c3e50] mb-2">{award.organization}</p>
                <p className="text-[#d4a574] font-semibold text-sm">{award.property}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image className="text-[#d4a574] mb-4" size={48} />
              <h2 className="text-4xl font-bold text-[#1a472a] mb-6">Media Kit & Resources</h2>
              <p className="text-lg text-[#2c3e50] leading-relaxed mb-8">
                Download our comprehensive media kit including high-resolution images, logos, company information,
                and press materials. Perfect for journalists, bloggers, and media professionals.
              </p>
              <div className="space-y-4">
                {mediaKit.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-[#f5f5f0] rounded-lg hover:bg-[#e5e5e0] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded">
                        <Download className="text-[#1a472a]" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1a472a]">{item.name}</p>
                        <p className="text-sm text-[#2c3e50]">{item.type} • {item.size}</p>
                      </div>
                    </div>
                    <button className="text-[#d4a574] hover:text-[#c89356] font-semibold">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600"
                alt="Property exterior"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600"
                alt="Hotel interior"
                className="rounded-2xl shadow-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f29da8c459?w=600"
                alt="Wedding venue"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600"
                alt="Resort view"
                className="rounded-2xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Newspaper className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Featured Media Coverage</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Recent mentions and features in leading publications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {coverage.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-[#f5f5f0] px-4 py-2 rounded-lg">
                    <p className="font-bold text-[#1a472a]">{item.publication}</p>
                  </div>
                  <span className="text-sm text-[#2c3e50]">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1a472a] mb-2">{item.title}</h3>
                <button className="text-[#d4a574] hover:text-[#c89356] font-semibold">
                  Read Article →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#1a472a] to-[#2d6e4b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="mx-auto mb-6 text-[#d4a574]" size={48} />
          <h2 className="text-4xl font-bold mb-4">Media Inquiries</h2>
          <p className="text-xl text-white/90 mb-8">
            For press inquiries, interview requests, or additional information, please contact our media relations team
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <p className="font-semibold mb-2">Media Relations Contact</p>
                <p className="text-white/80">Mr. Avinash Kumar</p>
                <p className="text-white/80">Founder & Director</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Contact Information</p>
                <p className="text-white/80">Phone: +91 9709633313</p>
                <p className="text-white/80">Email: press@saalthotels.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:press@saalthotels.com"
              className="inline-flex items-center gap-2 bg-[#d4a574] hover:bg-[#c89356] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Mail size={20} />
              Email Us
            </a>
            <a
              href="tel:+919709633313"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#1a472a] px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone size={20} />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
