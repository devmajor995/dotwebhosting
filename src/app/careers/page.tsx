'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { MapPin, Clock, DollarSign, Heart, Zap, Shield, Globe, ArrowRight, Search } from 'lucide-react';

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const departments = [
    { name: 'All', count: 8 },
    { name: 'Engineering', count: 3 },
    { name: 'Sales', count: 2 },
    { name: 'Marketing', count: 2 },
    { name: 'Support', count: 1 }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      salary: '$60,000 - $80,000',
      experience: '5+ years',
      description: 'We are looking for a Senior Full Stack Developer to join our engineering team. You will be responsible for developing and maintaining our hosting platform, customer portal, and internal tools.',
      requirements: [
        'Strong experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Knowledge of database design and optimization',
        'Experience with DevOps practices and CI/CD pipelines',
        'Excellent problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and benefits package',
        'Flexible working hours and remote work options',
        'Professional development opportunities',
        'Health insurance and wellness programs',
        'Modern office environment with latest technology'
      ]
    },
    {
      id: 2,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$70,000 - $90,000',
      experience: '3+ years',
      description: 'Join our DevOps team to help build and maintain our infrastructure. You will work on automation, monitoring, and ensuring our hosting services are reliable and scalable.',
      requirements: [
        'Experience with Docker, Kubernetes, and containerization',
        'Knowledge of Linux system administration',
        'Experience with monitoring tools (Prometheus, Grafana)',
        'Scripting skills (Python, Bash, or Go)',
        'Understanding of networking and security principles'
      ],
      benefits: [
        'Remote-first work environment',
        'Competitive compensation package',
        'Learning and certification opportunities',
        'Flexible PTO policy',
        'Home office setup allowance'
      ]
    },
    {
      id: 3,
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      salary: '$45,000 - $60,000',
      experience: '2+ years',
      description: 'Help us create beautiful and intuitive user interfaces for our hosting platform. You will work closely with our design team to implement responsive and accessible web applications.',
      requirements: [
        'Proficiency in React, TypeScript, and modern CSS',
        'Experience with state management (Redux, Zustand)',
        'Knowledge of responsive design principles',
        'Understanding of web accessibility standards',
        'Experience with testing frameworks (Jest, Cypress)'
      ],
      benefits: [
        'Collaborative team environment',
        'Professional growth opportunities',
        'Modern tech stack and tools',
        'Health and dental insurance',
        'Regular team events and activities'
      ]
    },
    {
      id: 4,
      title: 'Sales Representative',
      department: 'Sales',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      salary: '$35,000 - $50,000 + Commission',
      experience: '2+ years',
      description: 'Join our sales team to help businesses find the perfect hosting solutions. You will work with prospects to understand their needs and recommend appropriate hosting plans.',
      requirements: [
        'Proven track record in B2B sales',
        'Excellent communication and presentation skills',
        'Understanding of web hosting and technology',
        'Ability to build and maintain client relationships',
        'Self-motivated and goal-oriented'
      ],
      benefits: [
        'Uncapped commission structure',
        'Comprehensive sales training program',
        'Company car and expense account',
        'Performance-based bonuses',
        'Career advancement opportunities'
      ]
    },
    {
      id: 5,
      title: 'Enterprise Sales Manager',
      department: 'Sales',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      salary: '$80,000 - $120,000 + Commission',
      experience: '5+ years',
      description: 'Lead our enterprise sales efforts by developing relationships with large organizations. You will manage complex sales cycles and negotiate high-value contracts.',
      requirements: [
        'Experience in enterprise software or hosting sales',
        'Track record of closing large deals ($100k+)',
        'Strong negotiation and relationship-building skills',
        'Understanding of enterprise IT infrastructure',
        'Experience managing sales teams'
      ],
      benefits: [
        'High commission potential',
        'Executive-level compensation package',
        'Premium benefits and perks',
        'Leadership development opportunities',
        'International travel opportunities'
      ]
    },
    {
      id: 6,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      salary: '$40,000 - $55,000',
      experience: '3+ years',
      description: 'Help us grow our brand and reach more customers through digital marketing channels. You will manage campaigns, create content, and analyze performance metrics.',
      requirements: [
        'Experience with Google Ads, Facebook Ads, and LinkedIn Ads',
        'Knowledge of SEO and content marketing',
        'Proficiency in marketing analytics tools',
        'Experience with email marketing platforms',
        'Creative thinking and copywriting skills'
      ],
      benefits: [
        'Remote work flexibility',
        'Marketing budget for campaigns',
        'Professional development opportunities',
        'Performance-based bonuses',
        'Creative and collaborative environment'
      ]
    },
    {
      id: 7,
      title: 'Content Marketing Manager',
      department: 'Marketing',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      salary: '$50,000 - $65,000',
      experience: '4+ years',
      description: 'Lead our content marketing strategy to educate and engage our audience. You will create blog posts, whitepapers, case studies, and other content assets.',
      requirements: [
        'Strong writing and editing skills',
        'Experience in B2B content marketing',
        'Knowledge of SEO and content optimization',
        'Experience managing content calendars',
        'Understanding of web hosting and technology'
      ],
      benefits: [
        'Creative freedom and ownership',
        'Professional writing tools and resources',
        'Conference and event attendance',
        'Health and wellness benefits',
        'Collaborative team environment'
      ]
    },
    {
      id: 8,
      title: 'Technical Support Specialist',
      department: 'Support',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      salary: '$30,000 - $40,000',
      experience: '2+ years',
      description: 'Provide exceptional technical support to our customers. You will help resolve hosting issues, answer questions, and ensure customer satisfaction.',
      requirements: [
        'Strong technical troubleshooting skills',
        'Experience with Linux and web technologies',
        'Excellent customer service skills',
        'Knowledge of cPanel, WordPress, and common CMS',
        'Ability to work in shifts (24/7 support)'
      ],
      benefits: [
        'Comprehensive technical training',
        'Shift differential pay',
        'Career advancement opportunities',
        'Health insurance coverage',
        'Supportive team environment'
      ]
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

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
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Build the future of web hosting with us. We&apos;re looking for passionate individuals to help us grow and innovate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We believe in creating an environment where great ideas thrive and people grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Great Culture', description: 'Collaborative, inclusive, and fun work environment' },
              { icon: Zap, title: 'Innovation', description: 'Work with cutting-edge technology and solve real problems' },
              { icon: Shield, title: 'Security', description: 'Help protect thousands of websites and businesses' },
              { icon: Globe, title: 'Global Impact', description: 'Serve customers worldwide and make the web better' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept.name}
                    onClick={() => setSelectedDepartment(dept.name)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      selectedDepartment === dept.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {dept.name} ({dept.count})
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:ml-6">
                    <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-200">
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-600 dark:text-gray-300">
                No jobs found matching your criteria. Please try different search terms or check back later.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Benefits & Perks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Competitive salary and equity packages',
                'Flexible working hours and remote options',
                'Health, dental, and vision insurance',
                'Professional development and training',
                'Modern office with latest technology',
                'Regular team events and activities',
                'Unlimited PTO and sick days',
                '401(k) matching and financial planning',
                'Home office setup allowance'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage; 