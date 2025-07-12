'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, FileText, Globe, Settings, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const SetupGuide = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Complete Registration',
      description: 'Fill out your account details and verify your email address',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      icon: Globe,
      title: 'Choose Your Domain',
      description: 'Register a new domain or transfer an existing one',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      icon: Settings,
      title: 'Configure Hosting',
      description: 'Set up your hosting environment and install applications',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      icon: Rocket,
      title: 'Launch Your Site',
      description: 'Upload your content and go live with your website',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    },
  ];

  const tips = [
    'Use a strong, unique password for your hosting account',
    'Enable two-factor authentication for added security',
    'Set up automatic backups to protect your data',
    'Configure your domain\'s DNS settings properly',
    'Install an SSL certificate for secure connections',
    'Optimize your website for better performance',
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container-modern">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Get Up and Running
            <span className="block gradient-text">in Minutes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these simple steps to get your website online quickly and securely.
          </p>
        </motion.div>

        {/* Setup Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className={`p-6 rounded-2xl ${step.bgColor} border border-gray-200 dark:border-gray-700 h-full`}>
                <div className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center mb-4`}>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <div className="flex items-center text-sm font-medium text-foreground/60">
                  <span>Step {index + 1}</span>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 ml-2" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Pro Tips for Success
              </h3>
              <p className="text-muted-foreground mb-6">
                Follow these best practices to ensure your hosting setup is secure, fast, and reliable.
              </p>
              <ul className="space-y-3">
                {tips.map((tip, index) => (
                  <motion.li
                    key={tip}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{tip}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-white/50 dark:bg-black/20 rounded-xl p-6 border border-white/20 dark:border-white/10">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Need Help?
              </h4>
              <p className="text-muted-foreground mb-6">
                Our expert support team is available 24/7 to help you with any questions or issues.
              </p>
              <div className="space-y-3">
                <Link href="/support">
                  <Button variant="outline" size="sm" className="w-full">
                    Knowledge Base
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="gradient" size="sm" className="w-full">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Dot Web Hosting for their online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button variant="gradient" size="lg" className="group">
                Create Account
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Talk to Expert
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SetupGuide; 