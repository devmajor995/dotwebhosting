'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { formatNairaCurrency } from '@/lib/currency';

const SignUpForm = () => {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get('plan');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    plan: selectedPlan || 'professional',
    acceptTerms: false,
    acceptMarketing: false,
  });

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 14999,
      description: 'Perfect for small websites',
      features: ['10 GB Storage', '5 Email Accounts', '1 Website'],
      popular: false,
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 29999,
      description: 'Ideal for growing businesses',
      features: ['50 GB Storage', 'Unlimited Emails', 'Unlimited Websites'],
      popular: true,
    },
    {
      id: 'business',
      name: 'Business',
      price: 59999,
      description: 'For high-traffic websites',
      features: ['100 GB Storage', 'Advanced Security', 'Priority Support'],
      popular: false,
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePlanSelect = (planId: string) => {
    setFormData(prev => ({ ...prev, plan: planId }));
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      return false;
    }
    if (!formData.acceptTerms) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // TODO: Implement actual registration
    console.log('Sign up attempt:', formData);
    
    setIsLoading(false);
    setCurrentStep(3); // Show success step
  };

  const steps = [
    { number: 1, title: 'Account Details', description: 'Basic information' },
    { number: 2, title: 'Choose Plan', description: 'Select hosting plan' },
    { number: 3, title: 'Complete', description: 'Account created' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container-modern">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Create Your Account
            </h1>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied customers
            </p>
          </motion.div>

          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-2 md:space-x-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 ${
                    currentStep >= step.number 
                      ? 'bg-blue-500 border-blue-500 text-white' 
                      : 'border-gray-300 text-gray-500'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                    ) : (
                      <span className="text-xs md:text-sm font-semibold">{step.number}</span>
                    )}
                  </div>
                  <div className="ml-2 md:ml-3">
                    <div className="text-xs md:text-sm font-medium text-foreground">{step.title}</div>
                    <div className="hidden sm:block text-xs text-muted-foreground">{step.description}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 md:w-16 h-0.5 mx-2 md:mx-4 ${
                      currentStep > step.number ? 'bg-blue-500' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sign Up Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-8">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {currentStep === 1 ? 'Account Information' : 
                     currentStep === 2 ? 'Choose Your Plan' : 
                     'Account Created Successfully!'}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  {currentStep === 1 && (
                    <form onSubmit={(e) => { e.preventDefault(); setCurrentStep(2); }} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                            First Name
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white dark:bg-gray-800"
                              placeholder="Enter first name"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                            Last Name
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white dark:bg-gray-800"
                              placeholder="Enter last name"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white dark:bg-gray-800"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white dark:bg-gray-800"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white dark:bg-gray-800"
                            placeholder="Create a password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-2">
                          Confirm Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white dark:bg-gray-800"
                            placeholder="Confirm your password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                          >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleInputChange}
                            required
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                          />
                          <span className="text-sm text-foreground/80">
                            I agree to the{' '}
                            <Link href="/terms" className="text-blue-600 hover:text-blue-700">
                              Terms of Service
                            </Link>
                            {' '}and{' '}
                            <Link href="/privacy" className="text-blue-600 hover:text-blue-700">
                              Privacy Policy
                            </Link>
                          </span>
                        </label>
                        <label className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            name="acceptMarketing"
                            checked={formData.acceptMarketing}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                          />
                          <span className="text-sm text-foreground/80">
                            I agree to receive marketing communications from Dot Web Hosting
                          </span>
                        </label>
                      </div>

                      <Button
                        type="submit"
                        variant="gradient"
                        size="lg"
                        className="w-full group"
                        disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.acceptTerms}
                      >
                        Continue to Plan Selection
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </form>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        {plans.map((plan) => (
                          <div
                            key={plan.id}
                            className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                              formData.plan === plan.id
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                            }`}
                            onClick={() => handlePlanSelect(plan.id)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div className={`w-4 h-4 rounded-full border-2 ${
                                  formData.plan === plan.id
                                    ? 'border-blue-500 bg-blue-500'
                                    : 'border-gray-300'
                                }`}>
                                  {formData.plan === plan.id && (
                                    <div className="w-full h-full rounded-full bg-white scale-50"></div>
                                  )}
                                </div>
                                <div>
                                  <div className="flex items-center space-x-2">
                                    <h3 className="font-semibold text-foreground">{plan.name}</h3>
                                    {plan.popular && (
                                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center">
                                        <Star className="w-3 h-3 mr-1" />
                                        Popular
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                                  <div className="flex items-center space-x-4 mt-2">
                                    <span className="text-lg font-bold text-foreground">{formatNairaCurrency(plan.price)}/month</span>
                                    <div className="flex space-x-2">
                                      {plan.features.map((feature) => (
                                        <span key={feature} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                                          {feature}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <Button
                          variant="outline"
                          size="lg"
                          className="flex-1"
                          onClick={() => setCurrentStep(1)}
                        >
                          Back
                        </Button>
                        <Button
                          variant="gradient"
                          size="lg"
                          className="flex-1 group"
                          onClick={handleSubmit}
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <div className="flex items-center space-x-2">
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Creating Account...</span>
                            </div>
                          ) : (
                            <>
                              Create Account
                              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="text-center space-y-6">
                      <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Account Created Successfully!
                        </h3>
                        <p className="text-muted-foreground">
                          Welcome to Dot Web Hosting! We&apos;ve sent a verification email to {formData.email}
                        </p>
                      </div>
                      <div className="space-y-3">
                        <Link href="/dashboard">
                          <Button variant="gradient" size="lg" className="w-full">
                            Go to Dashboard
                          </Button>
                        </Link>
                        <Link href="/signin">
                          <Button variant="outline" size="lg" className="w-full">
                            Sign In Instead
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col justify-center space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Why Choose Dot Web Hosting?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        99.9% Uptime Guarantee
                      </h3>
                      <p className="text-muted-foreground">
                        Your website stays online with our reliable hosting infrastructure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        24/7 Expert Support
                      </h3>
                      <p className="text-muted-foreground">
                        Get help whenever you need it from our experienced support team
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        Free SSL Certificates
                      </h3>
                      <p className="text-muted-foreground">
                        Secure your website with free SSL certificates included with every plan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Already have an account?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Sign in to access your hosting dashboard and manage your services.
                </p>
                <Link href="/signin">
                  <Button variant="outline" size="lg" className="w-full group">
                    Sign In
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm; 