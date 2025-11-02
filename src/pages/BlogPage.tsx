import React from 'react';
import { VideoHero } from '../components/VideoHero';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

export const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'Top 10 Places to Visit in Patna, Bihar',
      excerpt: 'Discover the rich history and cultural heritage of Patna, from ancient monuments to modern attractions. A comprehensive guide for travelers.',
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800',
      date: '2024-10-15',
      author: 'Saalt Travel Team',
      category: 'Travel Guide',
    },
    {
      title: 'Complete Guide to Bodh Gaya: The Buddhist Pilgrimage',
      excerpt: 'Everything you need to know about visiting Bodh Gaya, the place of Buddha\'s enlightenment. Temple timings, best season, and accommodation tips.',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
      date: '2024-10-10',
      author: 'Saalt Travel Team',
      category: 'Pilgrimage',
    },
    {
      title: 'Planning Your Dream Destination Wedding in Bihar',
      excerpt: 'Make your wedding unforgettable at Narayana Greens Resort. Tips for planning a destination wedding in Bodh Gaya with our expert advice.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c459?w=800',
      date: '2024-10-05',
      author: 'Events Team',
      category: 'Weddings',
    },
    {
      title: 'Baba Baidyanath Temple: A Sacred Jyotirlinga Journey',
      excerpt: 'Experience the spiritual power of Baba Baidyanath Temple in Deoghar. History, significance, and travel information for devotees.',
      image: 'https://images.unsplash.com/photo-1582552938357-32b906d3c1ab?w=800',
      date: '2024-09-28',
      author: 'Saalt Travel Team',
      category: 'Pilgrimage',
    },
    {
      title: 'Bihar Cuisine: A Culinary Journey Through Our Restaurants',
      excerpt: 'Explore the flavors of Bihar through our multi-cuisine restaurants. From traditional Bihari dishes to international favorites.',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800',
      date: '2024-09-20',
      author: 'Culinary Team',
      category: 'Food & Dining',
    },
    {
      title: 'Business Travel Tips: Making the Most of Your Patna Visit',
      excerpt: 'Essential tips for business travelers visiting Patna. Conference facilities, connectivity, and local business etiquette.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      date: '2024-09-15',
      author: 'Business Services',
      category: 'Business Travel',
    },
  ];

  return (
    <div className="min-h-screen">
      <VideoHero
        videoPlaceholder="/saalt-patna.jpg"
        title="Blog & Travel Guides"
        subtitle="Stories, tips, and insights from across Bihar and Jharkhand"
        height="h-[60vh]"
      />

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block bg-[#daeee0] text-[#1a472a] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-[#1a472a] mb-3 line-clamp-2 hover:text-[#2d6e4b] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#2c3e50] mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" icon={ArrowRight} className="w-full justify-center">
                    Read More
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
