'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Zap, Shield, Server } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const GetStartedHero = () => {
  const steps = [
    {
      icon: CheckCircle,
      title: 'Choose Your Plan',
      description: 'Select the perfect hosting plan for your needs',
      color: 'text-green-500',
    },
    {
      icon: Shield,
      title: 'Secure Setup',
      description: 'Get SSL certificates and security features',
      color: 'text-blue-500',
    },
    {
      icon: Server,
      title: 'Deploy Instantly',
      description: 'Your website goes live in minutes',
      color: 'text-purple-500',
    },
  ];

  const features = [
    '99.9% Uptime Guarantee',
    'Free SSL Certificates',
    '24/7 Expert Support',
    'One-Click Installers',
    'Daily Backups',
    'DDoS Protection',
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg dark:gradient-bg-dark"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container-modern relative z-10 py-20 lg:py-32">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full px-4 py-2 mb-6"
          >
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-foreground/80">
              Get Started in 3 Simple Steps
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
          >
            Start Your
            <span className="block gradient-text">Hosting Journey</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Choose your perfect hosting plan and get your website online in minutes. 
            Professional hosting with enterprise-grade security and support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button variant="gradient" size="lg" className="group">
              Choose a Plan
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Talk to Expert
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="relative">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm flex items-center justify-center ${step.color}`}>
                  <step.icon className="w-8 h-8" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 dark:border-white/5"
        >
          <h3 className="text-2xl font-semibold text-foreground text-center mb-6">
            Everything You Need to Succeed
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                className="flex items-center space-x-2 text-sm"
              >
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-foreground/80">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedHero; 