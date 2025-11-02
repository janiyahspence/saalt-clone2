import React, { useState } from 'react';
import { VideoHero } from '../components/VideoHero';
import { properties } from '../data/properties';

export const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const allImages = [
    ...properties.flatMap((property) =>
      property.images.map((img) => ({
        url: img,
        property: property.shortName,
        category: 'property',
      }))
    ),
    ...properties.flatMap((property) =>
      property.rooms.flatMap((room) =>
        room.images.map((img) => ({
          url: img,
          property: property.shortName,
          category: 'rooms',
        }))
      )
    ),
    ...properties.flatMap((property) =>
      property.dining.map((dining) => ({
        url: dining.image,
        property: property.shortName,
        category: 'dining',
      }))
    ),
    ...properties.flatMap((property) =>
      property.nearbyAttractions.map((attraction) => ({
        url: attraction.image,
        property: property.shortName,
        category: 'attractions',
      }))
    ),
  ];

  const filteredImages = filter === 'all' ? allImages : allImages.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen">
      <VideoHero
        videoPlaceholder="/saalt-patna.jpg"
        title="Gallery"
        subtitle="Explore our properties and amenities through stunning visuals"
        height="h-[60vh]"
      />

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'property', 'rooms', 'dining', 'attractions'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-[#1a472a] to-[#2d6e4b] text-white shadow-lg'
                    : 'bg-white text-[#2c3e50] hover:bg-[#f5f5f0]'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={image.url}
                  alt={image.property}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-semibold text-lg">{image.property}</p>
                    <p className="text-sm text-white/80 capitalize">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
