'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Star, Server, Zap, Shield, Users } from 'lucide-react';
import { hostingPlans } from '@/data/hosting-plans';

const HostingPlansSection = () => {
  const [selectedType, setSelectedType] = useState<string>('all');

  const planTypes = [
    { id: 'all', name: 'All Plans', icon: Server },
    { id: 'shared', name: 'Shared', icon: Users },
    { id: 'vps', name: 'VPS', icon: Zap },
    { id: 'dedicated', name: 'Dedicated', icon: Shield },
    { id: 'reseller', name: 'Reseller', icon: Server },
  ];

  const filteredPlans = selectedType === 'all' 
    ? hostingPlans 
    : hostingPlans.filter(plan => plan.type === selectedType);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'shared': return Users;
      case 'vps': return Zap;
      case 'dedicated': return Shield;
      case 'reseller': return Server;
      default: return Server;
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Hosting Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From shared hosting for small websites to dedicated servers for enterprise applications, 
            we have the perfect solution for your needs.
          </p>
        </div>

        {/* Plan Type Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {planTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedType === type.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{type.name}</span>
              </button>
            );
          })}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlans.map((plan) => {
            const TypeIcon = getTypeIcon(plan.type);
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-blue-500 shadow-blue-100' 
                    : 'border-gray-100'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <TypeIcon className="w-8 h-8 text-blue-600" />
                      <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    </div>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.currency}{plan.price.toLocaleString()}
                      </span>
                      <span className="text-gray-500">/{plan.period}</span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {plan.highlights.map((highlight, index) => (
                        <p key={index} className="text-sm text-gray-600">
                          {highlight}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/plans/${plan.id}`}
                    className={`block w-full text-center py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-green-500 text-white hover:from-blue-700 hover:to-green-600 transform hover:scale-105'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need a custom solution? Contact our sales team for a personalized quote.
          </p>
          <Link
            href="/contact"
            className="inline-block"
          >
            <span className="sr-only">Contact Sales</span>
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 transform hover:scale-105">
              <span>Contact Sales</span>
              <span className="ml-2">→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HostingPlansSection; 