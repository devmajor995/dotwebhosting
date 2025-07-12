import { Server, Shield, Zap, Users, Clock, Globe, Headphones, Database } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Server,
      title: '99.9% Uptime Guarantee',
      description: 'Your website stays online with our industry-leading uptime guarantee and redundant infrastructure.',
      color: 'text-blue-600'
    },
    {
      icon: Shield,
      title: 'Free SSL Certificates',
      description: 'Secure your website with free SSL certificates and advanced security features to protect your data.',
      color: 'text-green-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast SSD Storage',
      description: 'Experience blazing-fast loading times with our high-performance SSD storage and optimized servers.',
      color: 'text-yellow-600'
    },
    {
      icon: Users,
      title: '24/7 Expert Support',
      description: 'Get help anytime with our dedicated support team available 24/7 via live chat, phone, and tickets.',
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Instant Setup',
      description: 'Your hosting account is activated instantly, so you can start building your website right away.',
      color: 'text-red-600'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Deliver content faster worldwide with our global content delivery network and edge locations.',
      color: 'text-indigo-600'
    },
    {
      icon: Headphones,
      title: 'One-Click Installs',
      description: 'Install WordPress, Joomla, and 100+ other applications with just one click from cPanel.',
      color: 'text-pink-600'
    },
    {
      icon: Database,
      title: 'Daily Backups',
      description: 'Your data is automatically backed up daily, ensuring you never lose your important files.',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Dot Web Hosting?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide the perfect combination of performance, security, and support 
            to help your website succeed online.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 group-hover:bg-blue-50 mb-6 transition-colors duration-300">
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 