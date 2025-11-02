import React from 'react';
import { PropertyCard } from '../components/PropertyCard';
import { VideoHero } from '../components/VideoHero';
import { properties } from '../data/properties';
import { MapPin, Building2, Bed, Star } from 'lucide-react';

export const AllPropertiesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <VideoHero
        videoPlaceholder="/saalt-patna.jpg"
        title="Our Premium Properties"
        subtitle="Discover exceptional accommodations across Bihar and Jharkhand"
        height="h-[60vh]"
      />

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 overflow-x-auto">
            <h3 className="text-2xl font-bold text-[#1a472a] mb-6 text-center">Property Comparison</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#d4a574]">
                  <th className="text-left py-4 px-4 text-[#1a472a] font-bold">Property</th>
                  <th className="text-center py-4 px-4 text-[#1a472a] font-bold">Location</th>
                  <th className="text-center py-4 px-4 text-[#1a472a] font-bold">Rooms</th>
                  <th className="text-center py-4 px-4 text-[#1a472a] font-bold">Rating</th>
                  <th className="text-center py-4 px-4 text-[#1a472a] font-bold">Price Range</th>
                  <th className="text-center py-4 px-4 text-[#1a472a] font-bold">Type</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property) => (
                  <tr key={property.id} className="border-b border-gray-200 hover:bg-[#f5f5f0] transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-semibold text-[#1a472a]">{property.shortName}</div>
                    </td>
                    <td className="py-4 px-4 text-center text-[#2c3e50]">
                      {property.city}, {property.state}
                    </td>
                    <td className="py-4 px-4 text-center text-[#2c3e50] font-semibold">{property.totalRooms}</td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="text-yellow-500 fill-yellow-500" size={16} />
                        <span className="font-semibold text-[#2c3e50]">{property.rating}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center text-[#1a472a] font-semibold">{property.priceRange}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-xs bg-[#daeee0] text-[#1a472a] px-2 py-1 rounded-full">
                        {property.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
