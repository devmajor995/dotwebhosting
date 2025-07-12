'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ChevronDown, ChevronUp, Search, HelpCircle, Server, Shield, Globe, CreditCard } from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: 'General Hosting',
      icon: Server,
      items: [
        {
          question: 'What is web hosting?',
          answer: 'Web hosting is a service that allows individuals and organizations to make their website accessible on the internet. It involves storing your website files on servers that are connected to the internet, making your site available to visitors worldwide.'
        },
        {
          question: 'What types of hosting do you offer?',
          answer: 'We offer shared hosting, VPS hosting, dedicated servers, WordPress hosting, and reseller hosting. Each type is designed for different needs and budgets, from small personal websites to large enterprise applications.'
        },
        {
          question: 'How do I choose the right hosting plan?',
          answer: 'Consider your website\'s traffic, storage needs, and technical requirements. Shared hosting is great for small websites, VPS for growing sites, and dedicated servers for high-traffic applications. Our team can help you choose the best option.'
        },
        {
          question: 'Do you offer a money-back guarantee?',
          answer: 'Yes, we offer a 30-day money-back guarantee on all our hosting plans. If you\'re not satisfied with our service, you can request a full refund within 30 days of your initial purchase.'
        }
      ]
    },
    {
      title: 'Domain Services',
      icon: Globe,
      items: [
        {
          question: 'How do I register a domain name?',
          answer: 'You can register a domain through our domain search tool. Simply enter your desired domain name, choose from available extensions (.com, .net, .org, .ng, etc.), and complete the registration process. We also offer domain transfers from other providers.'
        },
        {
          question: 'What domain extensions do you support?',
          answer: 'We support all major domain extensions including .com, .net, .org, .co, .io, .tech, .app, and country-specific domains like .ng for Nigeria. We also offer premium domains and new gTLDs.'
        },
        {
          question: 'Can I transfer my existing domain?',
          answer: 'Yes, you can transfer your domain from another registrar to Dot Web Hosting. The transfer process typically takes 5-7 days and we provide step-by-step instructions to make it easy.'
        },
        {
          question: 'Do you offer WHOIS privacy protection?',
          answer: 'Yes, we offer WHOIS privacy protection to keep your personal information private. This service hides your contact details from public WHOIS databases, protecting you from spam and identity theft.'
        }
      ]
    },
    {
      title: 'Security & Support',
      icon: Shield,
      items: [
        {
          question: 'What security features do you provide?',
          answer: 'We provide SSL certificates, DDoS protection, daily backups, malware scanning, and firewall protection. All our servers are monitored 24/7 and we use industry-standard security practices to protect your data.'
        },
        {
          question: 'How do I get technical support?',
          answer: 'We offer 24/7 technical support through live chat, email, and phone. Our support team consists of certified professionals who can help with any hosting-related issues you may encounter.'
        },
        {
          question: 'Do you provide backup services?',
          answer: 'Yes, we provide daily automated backups for all hosting plans. These backups are stored securely and can be restored quickly if needed. We also offer additional backup solutions for enhanced protection.'
        },
        {
          question: 'What is your uptime guarantee?',
          answer: 'We guarantee 99.9% uptime for all our hosting services. If we fail to meet this guarantee, you\'ll receive credits toward your hosting account. Our infrastructure is designed for maximum reliability.'
        }
      ]
    },
    {
      title: 'Billing & Payments',
      icon: CreditCard,
      items: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and local payment methods in Nigeria. All payments are processed securely through our payment partners.'
        },
        {
          question: 'Can I upgrade or downgrade my plan?',
          answer: 'Yes, you can upgrade or downgrade your hosting plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle. No data loss occurs during plan changes.'
        },
        {
          question: 'Do you offer discounts for long-term plans?',
          answer: 'Yes, we offer significant discounts for annual and multi-year plans. The longer the commitment, the greater the savings. We also offer special discounts for new customers and bulk purchases.'
        },
        {
          question: 'What happens if my payment fails?',
          answer: 'If your payment fails, we\'ll send you multiple reminders. Your hosting service will continue for a grace period, but we recommend updating your payment method to avoid service interruption.'
        }
      ]
    },
    {
      title: 'WHMCS Integration',
      icon: HelpCircle,
      items: [
        {
          question: 'How do I integrate WHMCS with my reseller hosting?',
          answer: 'To integrate WHMCS with your reseller hosting, log in to your WHMCS admin area using the license provided with your DotResell plan. Go to Setup > Products/Services > Servers and add your hosting server (e.g., cPanel/WHM) using the API credentials. Then, configure your hosting products and payment gateways. For a step-by-step guide, see our WHMCS Integration Guide in the Support Center.'
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Find answers to common questions about our hosting services, domains, and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isExpanded = expandedItems.includes(globalIndex);
                    
                    return (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-between"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                            {item.question}
                          </h3>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 text-white">
              <HelpCircle className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                             <p className="text-xl mb-6">
                 Can&apos;t find what you&apos;re looking for? Our support team is here to help.
               </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Contact Support
                </a>
                <a
                  href="/support"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Visit Support Center
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage; 