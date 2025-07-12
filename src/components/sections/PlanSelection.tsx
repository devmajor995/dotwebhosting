'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Server } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import Link from 'next/link';
import { formatNairaCurrency } from '@/lib/currency';

const PlanSelection = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 14999,
      period: 'month',
      description: 'Perfect for small websites and blogs',
      icon: Zap,
      color: 'from-blue-500 to-blue-600',
      features: [
        '10 GB SSD Storage',
        'Unlimited Bandwidth',
        '5 Email Accounts',
        'Free SSL Certificate',
        '1 Website',
        '24/7 Support',
      ],
      popular: false,
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 29999,
      period: 'month',
      description: 'Ideal for growing businesses',
      icon: Shield,
      color: 'from-green-500 to-green-600',
      features: [
        '50 GB SSD Storage',
        'Unlimited Bandwidth',
        'Unlimited Email Accounts',
        'Free SSL Certificate',
        'Unlimited Websites',
        '24/7 Priority Support',
        'Daily Backups',
        'Free Domain (1st year)',
      ],
      popular: true,
    },
    {
      id: 'business',
      name: 'Business',
      price: 59999,
      period: 'month',
      description: 'For high-traffic websites',
      icon: Server,
      color: 'from-purple-500 to-purple-600',
      features: [
        '100 GB SSD Storage',
        'Unlimited Bandwidth',
        'Unlimited Email Accounts',
        'Free SSL Certificate',
        'Unlimited Websites',
        '24/7 Priority Support',
        'Daily Backups',
        'Free Domain (1st year)',
        'DDoS Protection',
        'CDN Included',
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container-modern">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your
            <span className="block gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with the plan that fits your needs. You can always upgrade or downgrade later.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <Card 
                className={`relative h-full transition-all duration-300 hover:shadow-xl ${
                  selectedPlan === plan.id 
                    ? 'ring-2 ring-blue-500 shadow-lg' 
                    : 'hover:-translate-y-2'
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>

                <CardContent className="pb-6">
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-foreground">{formatNairaCurrency(plan.price)}</span>
                      <span className="text-muted-foreground ml-1">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                        className="flex items-center space-x-3"
                      >
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button
                    variant={selectedPlan === plan.id ? "gradient" : "outline"}
                    size="lg"
                    className="w-full"
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {selectedPlan && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <Link href={`/signup?plan=${selectedPlan}`}>
              <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
                Continue with {plans.find(p => p.id === selectedPlan)?.name} Plan
              </Button>
            </Link>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Contact our sales team
          </p>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PlanSelection; 