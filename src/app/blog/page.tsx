'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, User, ArrowRight, Tag, BookOpen } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Choose the Right Web Hosting Plan for Your Business',
      excerpt: 'Selecting the perfect hosting plan is crucial for your website\'s success. Learn the key factors to consider when choosing between shared, VPS, and dedicated hosting.',
      author: 'Dot Web Hosting Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Hosting Guide',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: '10 Essential Security Practices for Your Website',
      excerpt: 'Protect your website from cyber threats with these essential security practices. From SSL certificates to regular backups, learn how to keep your site secure.',
      author: 'Security Expert',
      date: '2024-01-12',
      readTime: '8 min read',
      category: 'Security',
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'The Complete Guide to Domain Name Registration',
      excerpt: 'Everything you need to know about registering a domain name. From choosing the right extension to protecting your privacy, we cover it all.',
      author: 'Domain Specialist',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Domains',
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'WordPress Hosting: Optimized for Performance',
      excerpt: 'Discover why WordPress-specific hosting can significantly improve your site\'s performance, security, and user experience.',
      author: 'WordPress Expert',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'WordPress',
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'Understanding SSL Certificates: Why Your Site Needs HTTPS',
      excerpt: 'Learn about SSL certificates and why HTTPS is essential for your website\'s security, SEO, and user trust.',
      author: 'Security Team',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Security',
      image: '/api/placeholder/600/400'
    },
    {
      id: 6,
      title: 'VPS vs Shared Hosting: Which is Right for You?',
      excerpt: 'Compare VPS and shared hosting to understand the differences in performance, control, and cost. Make an informed decision for your website.',
      author: 'Hosting Expert',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Hosting Guide',
      image: '/api/placeholder/600/400'
    },
    {
      id: 7,
      title: 'Website Backup Strategies: Protecting Your Digital Assets',
      excerpt: 'Implement effective backup strategies to protect your website data. Learn about automated backups, storage options, and recovery procedures.',
      author: 'Backup Specialist',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Backup',
      image: '/api/placeholder/600/400'
    },
    {
      id: 8,
      title: 'SEO Benefits of Fast Hosting: Speed Up Your Success',
      excerpt: 'Discover how fast hosting can improve your search engine rankings and user experience. Speed matters for SEO success.',
      author: 'SEO Expert',
      date: '2023-12-25',
      readTime: '5 min read',
      category: 'SEO',
      image: '/api/placeholder/600/400'
    }
  ];



  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
              Hosting Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert insights, tutorials, and tips for web hosting, domains, and website management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 p-8 flex items-center justify-center">
                <BookOpen className="w-32 h-32 text-white opacity-20" />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Tag className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">{blogPosts[0].category}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(blogPosts[0].date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].id}`}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-200"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-br from-blue-500 to-green-500 h-48 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white opacity-20" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Tag className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8">
              Get the latest hosting tips, tutorials, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage; 