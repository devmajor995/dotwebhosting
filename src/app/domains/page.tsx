'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { domainExtensions } from '@/data/hosting-plans';
import { Search, Globe, Shield, ArrowRight, Star, Clock, Users } from 'lucide-react';
import Link from 'next/link';

const DomainsPage = () => {
  const [domain, setDomain] = useState('');
  const [selectedExtension, setSelectedExtension] = useState('.com');

  const handleDomainSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement domain search functionality
    console.log('Searching for domain:', domain + selectedExtension);
  };

  const popularExtensions = domainExtensions.filter(ext => ext.popular);
  const allExtensions = domainExtensions;

  const domainServices = [
    {
      icon: Shield,
      title: 'WHOIS Privacy Protection',
      description: 'Keep your personal information private and protect yourself from spam and identity theft.',
      price: '₦1,500/year'
    },
    {
      icon: Globe,
      title: 'DNS Management',
      description: 'Easy-to-use DNS management tools to point your domain to your hosting or other services.',
      price: 'Free'
    },
    {
      icon: Clock,
      title: 'Domain Transfer',
      description: 'Transfer your existing domains to Dot Web Hosting with our simple transfer process.',
      price: '₦2,000'
    },
    {
      icon: Users,
      title: 'Email Forwarding',
      description: 'Forward emails from your domain to any email address you choose.',
      price: '₦500/year'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect Domain Name
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Search for available domain names and secure your online identity. 
            Get started with domain registration today.
          </p>
          
          {/* Domain Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={handleDomainSearch} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="Enter your domain name..."
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 text-gray-900"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={selectedExtension}
                  onChange={(e) => setSelectedExtension(e.target.value)}
                  className="px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 text-gray-900"
                  aria-label="Select domain extension"
                >
                  {popularExtensions.map((ext) => (
                    <option key={ext.extension} value={ext.extension}>
                      {ext.extension}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-200 transform hover:scale-105"
                >
                  Search Domain
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Free WHOIS Privacy
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              DNS Management
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Email Forwarding
            </span>
          </div>
        </div>
      </section>

      {/* Popular Domain Extensions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Domain Extensions
            </h2>
            <p className="text-xl text-gray-600">
              Choose from a wide range of domain extensions to find the perfect match for your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularExtensions.map((ext) => (
              <div
                key={ext.extension}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {ext.extension}
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  ₦{ext.price.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  per year
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-200">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Domain Extensions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All Domain Extensions
            </h2>
            <p className="text-xl text-gray-600">
              Browse our complete list of available domain extensions
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Domain Extension</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Price (₦)</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Popular</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {allExtensions.map((ext, index) => (
                  <tr key={ext.extension} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                    <td className="py-4 px-6 font-medium text-gray-900">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">{ext.extension}</span>
                        {ext.popular && <Star className="w-4 h-4 text-yellow-500" />}
                      </div>
                    </td>
                    <td className="text-center py-4 px-6">
                      <span className="font-bold text-lg">{ext.price.toLocaleString()}</span>
                      <span className="text-gray-500">/year</span>
                    </td>
                    <td className="text-center py-4 px-6">
                      {ext.popular ? (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          Popular
                        </span>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                        Register
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Domain Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Domain Services
            </h2>
            <p className="text-xl text-gray-600">
              Additional services to enhance your domain experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    {service.price}
                  </div>
                  <button className="w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Register Your Domain?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Secure your online presence with a professional domain name. 
            Get started today and build your brand online.
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

export default DomainsPage; 