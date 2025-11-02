import React from 'react';

interface VideoHeroProps {
  videoPlaceholder: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  height?: string;
  overlay?: 'light' | 'medium' | 'dark';
}

export const VideoHero: React.FC<VideoHeroProps> = ({
  videoPlaceholder,
  title,
  subtitle,
  children,
  height = 'h-screen',
  overlay = 'medium',
}) => {
  const overlayClasses = {
    light: 'bg-black/30',
    medium: 'bg-black/50',
    dark: 'bg-black/70',
  };

  return (
    <div className={`relative ${height} overflow-hidden`}>
      <div className="absolute inset-0">
        <img
          src={videoPlaceholder}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

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
    </div>
  );
};
