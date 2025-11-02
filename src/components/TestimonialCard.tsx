import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../data/properties';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
      <div className="absolute top-6 right-6 text-[#d4a574] opacity-20">
        <Quote size={48} />
      </div>

      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
          />
        ))}
      </div>

      <p className="text-[#2c3e50] leading-relaxed mb-6 italic">
        "{testimonial.comment}"
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div>
          <p className="font-semibold text-[#1a472a]">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
        <p className="text-xs text-gray-400">{new Date(testimonial.date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</p>
      </div>
    </div>
  );
};
