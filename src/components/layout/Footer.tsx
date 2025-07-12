'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const footerLinks = {
    hosting: [
      { name: 'Shared Hosting', href: '/plans#shared' },
      { name: 'VPS Hosting', href: '/plans#vps' },
      { name: 'Dedicated Servers', href: '/plans#dedicated' },
      { name: 'WordPress Hosting', href: '/plans#wordpress' },
      { name: 'Reseller Hosting', href: '/plans#reseller' },
    ],
    domains: [
      { name: 'Domain Search', href: '/domains' },
      { name: 'Domain Transfer', href: '/domains/transfer' },
      { name: 'WHOIS Privacy', href: '/domains/privacy' },
      { name: 'DNS Management', href: '/domains/dns' },
    ],
    support: [
      { name: 'Knowledge Base', href: '/support' },
      { name: 'Live Chat', href: '/support/chat' },
      { name: 'Ticket System', href: '/support/tickets' },
      { name: 'Server Status', href: '/status' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
    ],
    legal: [
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Refund Policy', href: '/legal/refund' },
      { name: 'Acceptable Use', href: '/legal/aup' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
  ];

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isExpanded = (section: string) => expandedSections.includes(section);

  const renderMenuSection = (title: string, links: typeof footerLinks.hosting, sectionKey: string) => (
    <div className="border-b border-gray-800 lg:border-none">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full py-3 lg:py-0 lg:mb-3 text-left"
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="lg:hidden">
          {isExpanded(sectionKey) ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>
      
      <div className={`lg:block ${isExpanded(sectionKey) ? 'block' : 'hidden lg:block'}`}>
        <ul className="space-y-1 lg:space-y-0">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 block py-0.5"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold">Dot Web Hosting</span>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 mb-6 max-w-md"
            >
              Your Domain. Our Priority. Professional web hosting solutions with 99.9% uptime guarantee. 
              Fast, secure, and affordable hosting for your business.
            </motion.p>
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span>support@dotwebhosting.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span>+234 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
                <MapPin className="w-4 h-4" />
                <span>Lagos, Nigeria</span>
              </div>
            </motion.div>
          </div>

          {/* Hosting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {renderMenuSection('Hosting', footerLinks.hosting, 'hosting')}
          </motion.div>

          {/* Domains */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {renderMenuSection('Domains', footerLinks.domains, 'domains')}
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {renderMenuSection('Support', footerLinks.support, 'support')}
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {renderMenuSection('Company', footerLinks.company, 'company')}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-gray-800 mt-8 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-300 text-sm">
                © {currentYear} Dot Web Hosting. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link
                    href={social.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 