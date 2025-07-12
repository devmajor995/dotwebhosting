'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Server, Shield, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [domain, setDomain] = useState('');

  const handleDomainSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement domain search functionality
    console.log('Searching for domain:', domain);
  };

  const features = [
    { icon: Server, text: '99.9% Uptime Guarantee', color: 'text-blue-500' },
    { icon: Shield, text: 'Free SSL Certificates', color: 'text-green-500' },
    { icon: Zap, text: 'Lightning Fast SSD Storage', color: 'text-purple-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-bg dark:gradient-bg-dark"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 dark:bg-blue-400/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-green-200/30 dark:bg-green-400/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/2 left-5 w-16 h-16 bg-purple-200/30 dark:bg-purple-400/20 rounded-full blur-lg"
      />

      <div className="container-modern relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-foreground/80">
              Trusted by 10,000+ businesses worldwide
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
          >
            Your Domain.
            <span className="block gradient-text">
              Our Priority.
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Professional web hosting solutions with lightning-fast performance, 
            iron-clad security, and 24/7 expert support. Start your online journey today.
          </motion.p>

          {/* Domain Search */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto mb-12"
          >
            <form onSubmit={handleDomainSearch} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-blue-500 transition-colors duration-200" />
                <input
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="Enter your domain name..."
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-border rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white/50 dark:bg-black/50 backdrop-blur-sm"
                />
              </div>
              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="group"
              >
                Search Domain
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </form>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 text-foreground/80 hover:text-foreground transition-colors duration-200"
              >
                <div className={cn("p-2 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm", feature.color)}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <span className="font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/get-started">
              <Button variant="gradient" size="lg" className="group">
                Choose a Plan
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-border/50"
          >
            <p className="text-muted-foreground mb-6">Trusted by businesses worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Placeholder for client logos */}
              <div className="h-8 w-24 bg-muted rounded animate-pulse"></div>
              <div className="h-8 w-24 bg-muted rounded animate-pulse"></div>
              <div className="h-8 w-24 bg-muted rounded animate-pulse"></div>
              <div className="h-8 w-24 bg-muted rounded animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 