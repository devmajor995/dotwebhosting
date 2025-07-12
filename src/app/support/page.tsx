'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, BookOpen, MessageSquare, Phone, Mail, Clock, ChevronDown, ChevronRight, FileText, Video, Users, Settings } from 'lucide-react';
import Link from 'next/link';

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const supportCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      articles: [
        'How to access your hosting control panel',
        'Setting up your first website',
        'Connecting your domain to hosting',
        'Uploading files via FTP',
        'Creating email accounts'
      ]
    },
    {
      id: 'domains',
      title: 'Domain Management',
      icon: Settings,
      articles: [
        'How to register a new domain',
        'Transferring domains to Dot Web Hosting',
        'Managing DNS records',
        'Setting up domain forwarding',
        'WHOIS privacy protection'
      ]
    },
    {
      id: 'hosting',
      title: 'Hosting Services',
      icon: Users,
      articles: [
        'Understanding different hosting types',
        'Upgrading your hosting plan',
        'Managing databases',
        'Setting up SSL certificates',
        'Backup and restore procedures'
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: FileText,
      articles: [
        'Website not loading',
        'Email not working',
        'Database connection issues',
        'SSL certificate problems',
        'Performance optimization'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I access my hosting control panel?',
      answer: 'You can access your cPanel by going to yourdomain.com/cpanel or by logging into your Dot Web Hosting client area and clicking on the "Control Panel" button.'
    },
    {
      question: 'What is the difference between shared and VPS hosting?',
      answer: 'Shared hosting shares server resources with other websites, making it more affordable but with limited resources. VPS hosting provides dedicated resources and more control, suitable for growing websites.'
    },
    {
      question: 'How long does it take to set up my hosting account?',
      answer: 'Hosting accounts are typically activated instantly after payment confirmation. You can start uploading your website files immediately.'
    },
    {
      question: 'Do you provide website migration services?',
      answer: 'Yes, we offer free website migration services for new customers. Our technical team will help you move your website from your current host to Dot Web Hosting.'
    },
    {
      question: 'What backup options do you provide?',
      answer: 'We provide daily automated backups for all hosting plans. You can also create manual backups through your control panel at any time.'
    },
    {
      question: 'How do I contact technical support?',
      answer: 'You can contact our 24/7 technical support team via live chat, email at support@dotwebhosting.com, or by phone at +234 123 456 7890.'
    }
  ];

  const supportChannels = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      response: 'Instant',
      action: 'Start Chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: '24/7',
      response: '2-4 hours',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: '24/7',
      response: 'Immediate',
      action: 'Call Now'
    },
    {
      icon: Clock,
      title: 'Ticket System',
      description: 'Create a support ticket',
      availability: '24/7',
      response: '4-8 hours',
      action: 'Create Ticket'
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Support Center
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Find answers to your questions, get help with technical issues, 
            and learn how to make the most of your hosting services.
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help articles, tutorials, and guides..."
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600">
              Choose the support channel that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {channel.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {channel.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="text-sm">
                      <span className="font-medium">Availability:</span> {channel.availability}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Response:</span> {channel.response}
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-200">
                    {channel.action}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Knowledge Base
            </h2>
            <p className="text-xl text-gray-600">
              Browse our comprehensive help articles and tutorials
            </p>
          </div>

          <div className="space-y-6">
            {supportCategories.map((category) => {
              const Icon = category.icon;
              const isExpanded = expandedCategory === category.id;
              
              return (
                <div
                  key={category.id}
                  className="bg-gray-50 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {category.title}
                      </h3>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 pb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.articles.map((article, index) => (
                          <Link
                            key={index}
                            href={`/support/${category.id}/${index}`}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-colors duration-200"
                          >
                            <FileText className="w-4 h-4 text-blue-600" />
                            <span className="text-gray-700">{article}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to the most common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Video Tutorials
            </h2>
            <p className="text-xl text-gray-600">
              Watch step-by-step guides to get the most out of your hosting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Getting Started with cPanel',
              'Setting Up Email Accounts',
              'Installing WordPress',
              'Managing DNS Records',
              'Creating Backups',
              'SSL Certificate Setup'
            ].map((tutorial, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl p-6 text-center hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
              >
                <Video className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tutorial}
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn how to {tutorial.toLowerCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our support team is here to help you 24/7. 
            Don&apos;t hesitate to reach out if you need assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Support
            </Link>
            <Link
              href="/plans"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              View Hosting Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportPage; 