'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      value: 'support@dotwebhosting.com',
      description: 'Get help with technical issues'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      value: '+234 123 456 7890',
      description: 'Call us for immediate assistance'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      value: 'Lagos, Nigeria',
      description: 'Visit our office during business hours'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: '24/7 Support',
      description: 'We&apos;re here to help anytime'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Technical Support',
    'Sales Question',
    'Billing Issue',
    'Domain Services',
    'Hosting Plans',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Have questions? We&apos;re here to help. Get in touch with our team 
            and we&apos;ll get back to you as soon as possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              24/7 Support
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Fast Response
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Expert Team
            </span>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="text-lg font-medium text-blue-600 mb-2">
                    {info.value}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we&apos;ll get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
                >
                  <option value="">Select a subject</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Come and meet our team in person
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Dot Web Hosting Headquarters
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>123 Tech Street, Victoria Island, Lagos, Nigeria</span>
                </p>
                <p className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>+234 123 456 7890</span>
                </p>
                <p className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>info@dotwebhosting.com</span>
                </p>
                <p className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p>Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How quickly do you respond to support requests?
              </h3>
              <p className="text-gray-600">
                We typically respond to all support requests within 2-4 hours during business hours. 
                For urgent technical issues, we provide 24/7 support.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I upgrade or downgrade my hosting plan?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your hosting plan at any time. 
                Changes are typically processed within 24 hours with no downtime.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee on all hosting plans. 
                If you&apos;re not satisfied, we&apos;ll provide a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage; 