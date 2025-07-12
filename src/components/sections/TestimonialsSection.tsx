'use client';

import { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Nigeria',
      content: 'Dot Web Hosting has been instrumental in our company&apos;s growth. The 99.9% uptime guarantee is real, and their support team is incredibly responsive. Highly recommended!',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Michael Chen',
      role: 'Web Developer',
      content: 'I&apos;ve been using Dot Web Hosting for over 3 years now. The performance is outstanding, and the one-click WordPress installation makes my job so much easier.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Aisha Bello',
      role: 'E-commerce Entrepreneur',
      content: 'Switching to Dot Web Hosting was the best decision for my online store. The loading speeds improved dramatically, and my customers love the fast checkout experience.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'David Okafor',
      role: 'Digital Marketing Consultant',
      content: 'The VPS hosting from Dot Web Hosting gives me the perfect balance of performance and control. Their technical support is knowledgeable and always helpful.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Grace Williams',
      role: 'Blog Owner',
      content: 'I started with shared hosting and upgraded to their reseller plan. The transition was seamless, and now I\'m successfully hosting multiple client websites.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their experience with Dot Web Hosting.
          </p>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-blue-100">
              <Quote className="w-12 h-12" />
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              {/* Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                &ldquo;{currentTestimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {currentTestimonial.name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-gray-600">
                    {currentTestimonial.role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by businesses across Nigeria and beyond</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for client logos */}
            <div className="h-12 w-32 bg-gray-300 rounded"></div>
            <div className="h-12 w-32 bg-gray-300 rounded"></div>
            <div className="h-12 w-32 bg-gray-300 rounded"></div>
            <div className="h-12 w-32 bg-gray-300 rounded"></div>
            <div className="h-12 w-32 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 