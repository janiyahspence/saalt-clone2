import React from 'react';
import { MapPin, Star, Bed, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Property } from '../data/properties';
import { Button } from './Button';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative h-72 overflow-hidden">
        <img
          src={property.heroImage}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <Star className="text-yellow-500 fill-yellow-500" size={16} />
          <span className="font-semibold text-sm">{property.rating}</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-1">{property.shortName}</h3>
          <div className="flex items-center text-white/90 text-sm gap-1">
            <MapPin size={14} />
            <span>{property.city}, {property.state}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#8B4513] font-medium text-sm bg-[#f5f5f0] px-3 py-1 rounded-full">
            {property.type}
          </span>
          <div className="flex items-center text-[#2c3e50] gap-1">
            <Bed size={16} />
            <span className="text-sm font-medium">{property.totalRooms} Rooms</span>
          </div>
        </div>

        <p className="text-[#2c3e50] text-sm leading-relaxed mb-4 line-clamp-3">
          {property.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {property.highlights.slice(0, 3).map((highlight, index) => (
            <span
              key={index}
              className="text-xs text-[#1a472a] bg-[#daeee0] px-2.5 py-1 rounded-full"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <p className="text-xs text-gray-500 mb-1">Starting from</p>
            <p className="text-lg font-bold text-[#1a472a]">{property.priceRange.split(' - ')[0]}</p>
          </div>
          <Link to={`/properties/${property.id}`}>
            <Button variant="primary" size="sm" icon={ArrowRight}>
              View Property
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
