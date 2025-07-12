import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Users, Target, Award, Globe, Heart, Shield, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do, ensuring their success is our priority.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We provide rock-solid hosting infrastructure with 99.9% uptime guarantee.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously innovate to provide cutting-edge hosting solutions and technology.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We build strong relationships with our customers and the broader tech community.'
    }
  ];

  const achievements = [
    {
      number: '10K+',
      label: 'Happy Customers',
      description: 'Serving businesses and individuals across Nigeria and beyond'
    },
    {
      number: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Consistent reliability that our customers can depend on'
    },
    {
      number: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock technical support and customer service'
    },
    {
      number: '5+',
      label: 'Years Experience',
      description: 'Deep expertise in web hosting and domain services'
    }
  ];

  const team = [
    {
      name: 'David Okafor',
      role: 'CEO & Founder',
      description: 'Visionary leader with 10+ years in web hosting and technology.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Sarah Johnson',
      role: 'Technical Director',
      description: 'Expert in server infrastructure and cloud technologies.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Support',
      description: 'Dedicated to providing exceptional customer support experience.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Aisha Bello',
      role: 'Marketing Manager',
      description: 'Building strong relationships with our community and partners.',
      image: '/api/placeholder/200/200'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Dot Web Hosting
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your trusted partner in web hosting and domain services. 
            We're committed to helping businesses succeed online.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Since 2019
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Nigerian Owned
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Customer Focused
            </span>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Dot Web Hosting was founded in 2019 with a simple mission: to provide reliable, 
                affordable web hosting solutions to businesses and individuals in Nigeria and beyond.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small team of passionate tech enthusiasts has grown into a 
                trusted hosting provider serving thousands of customers. We understand the 
                challenges of building an online presence and are committed to making it easier 
                for everyone to succeed on the web.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to innovate and expand our services while maintaining the 
                same dedication to customer satisfaction that has been our foundation from day one.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8">
              <div className="text-center">
                <Globe className="w-24 h-24 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Domain. Our Priority.
                </h3>
                <p className="text-gray-600">
                  This isn't just our tagline—it's our promise to every customer who trusts us 
                  with their online presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600">
                To empower businesses and individuals with reliable, affordable, and 
                user-friendly web hosting solutions that enable them to build and grow 
                their online presence successfully.
              </p>
            </div>
            <div className="text-center">
              <Award className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600">
                To become the leading web hosting provider in Nigeria and West Africa, 
                known for exceptional service, innovative solutions, and unwavering 
                commitment to customer success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that tell our story of growth and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.label}
                </div>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate people behind Dot Web Hosting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-600 font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm">
                  {member.description}
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
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Dot Web Hosting 
            with their online presence. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plans"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>View Hosting Plans</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage; 