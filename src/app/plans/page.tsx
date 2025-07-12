import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { hostingPlans } from '@/data/hosting-plans';
import { Check, Star, Server, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hosting Plans - Dot Web Hosting',
  description: 'Choose from our range of hosting plans: Shared hosting, VPS, dedicated servers, and reseller hosting. Compare features and find the perfect plan for your needs.',
};

const PlansPage = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'shared': return Users;
      case 'vps': return Zap;
      case 'dedicated': return Shield;
      case 'reseller': return Server;
      default: return Server;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'shared': return 'bg-blue-100 text-blue-800';
      case 'vps': return 'bg-green-100 text-green-800';
      case 'dedicated': return 'bg-purple-100 text-purple-800';
      case 'reseller': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your Perfect Hosting Plan
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            From shared hosting for small websites to dedicated servers for enterprise applications, 
            we have the perfect solution for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              99.9% Uptime Guarantee
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              24/7 Support
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Free SSL Certificates
            </span>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostingPlans.map((plan) => {
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
                      
                      {/* Type Badge */}
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getTypeColor(plan.type)}`}>
                        {plan.type.charAt(0).toUpperCase() + plan.type.slice(1)} Hosting
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
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compare Hosting Plans
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect hosting solution for your website
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                  {hostingPlans.map((plan) => (
                    <th key={plan.id} className="text-center py-4 px-6 font-semibold text-gray-900">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-700">Price</td>
                  {hostingPlans.map((plan) => (
                    <td key={plan.id} className="text-center py-4 px-6">
                      <span className="font-bold text-lg">{plan.currency}{plan.price.toLocaleString()}</span>
                      <span className="text-gray-500">/{plan.period}</span>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-700">Websites</td>
                  {hostingPlans.map((plan) => (
                    <td key={plan.id} className="text-center py-4 px-6">
                      {plan.features.find(f => f.includes('Website')) || 'Unlimited'}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-700">Storage</td>
                  {hostingPlans.map((plan) => (
                    <td key={plan.id} className="text-center py-4 px-6">
                      {plan.features.find(f => f.includes('Storage')) || 'Unlimited'}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-700">Bandwidth</td>
                  {hostingPlans.map((plan) => (
                    <td key={plan.id} className="text-center py-4 px-6">
                      {plan.features.find(f => f.includes('Bandwidth')) || 'Unlimited'}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-700">SSL Certificate</td>
                  {hostingPlans.map((plan) => (
                    <td key={plan.id} className="text-center py-4 px-6">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-700">Support</td>
                  {hostingPlans.map((plan) => (
                    <td key={plan.id} className="text-center py-4 px-6">
                      {plan.features.find(f => f.includes('Support')) || '24/7'}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose your hosting plan and get your website online in minutes. 
            Our expert support team is here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Contact Sales</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/support"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Get Support
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlansPage; 