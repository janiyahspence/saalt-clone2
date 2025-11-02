import React, { useState, useEffect } from 'react';

interface ImageCarouselHeroProps {
  images: string[];
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  height?: string;
  overlay?: 'light' | 'medium' | 'dark';
  autoPlayInterval?: number;
}

export const ImageCarouselHero: React.FC<ImageCarouselHeroProps> = ({
  images,
  title,
  subtitle,
  children,
  height = 'h-screen',
  overlay = 'medium',
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const overlayClasses = {
    light: 'bg-black/30',
    medium: 'bg-black/50',
    dark: 'bg-black/70',
  };

  useEffect(() => {
    if (!isHovered && images.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoPlayInterval);

      return () => clearInterval(timer);
    }
  }, [currentIndex, isHovered, images.length, autoPlayInterval]);

  return (
    <div
      className={`relative ${height} overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`${title} - Slide ${index + 1}`}
            className="w-full h-full object-cover transform scale-105 animate-ken-burns"
          />
        </div>
      ))}

      <div className={`absolute inset-0 ${overlayClasses[overlay]}`}></div>

      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
