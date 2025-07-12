export interface HostingPlan {
  id: string;
  name: string;
  type: 'shared' | 'vps' | 'dedicated' | 'wordpress' | 'reseller';
  price: number;
  currency: string;
  period: string;
  features: string[];
  highlights: string[];
  popular?: boolean;
  cta: string;
}

export const hostingPlans: HostingPlan[] = [
  {
    id: 'dotlite',
    name: 'DotLite',
    type: 'shared',
    price: 1500,
    currency: '₦',
    period: 'month',
    features: [
      '1 Website',
      '5GB SSD Storage',
      'Unlimited Bandwidth',
      '5 Email Accounts',
      'Free SSL Certificate',
      'cPanel Control Panel',
      '99.9% Uptime Guarantee',
      '24/7 Support'
    ],
    highlights: ['Perfect for small websites', 'Fast SSD storage', 'Free SSL included'],
    cta: 'Get Started'
  },
  {
    id: 'dotpower',
    name: 'DotPower',
    type: 'shared',
    price: 3000,
    currency: '₦',
    period: 'month',
    features: [
      'Unlimited Websites',
      '20GB SSD Storage',
      'Unlimited Bandwidth',
      'Unlimited Email Accounts',
      'Free SSL Certificate',
      'cPanel Control Panel',
      '99.9% Uptime Guarantee',
      '24/7 Priority Support',
      'Free Domain (1st year)',
      'Daily Backups'
    ],
    highlights: ['Unlimited websites', 'Priority support', 'Free domain included'],
    popular: true,
    cta: 'Most Popular'
  },
  {
    id: 'dotpro',
    name: 'DotPro',
    type: 'vps',
    price: 6000,
    currency: '₦',
    period: 'month',
    features: [
      '2 CPU Cores',
      '4GB RAM',
      '80GB SSD Storage',
      'Unlimited Bandwidth',
      'Root Access',
      'Free SSL Certificate',
      '99.9% Uptime Guarantee',
      '24/7 Premium Support',
      'Daily Backups',
      'DDoS Protection'
    ],
    highlights: ['Full root access', 'Dedicated resources', 'Premium support'],
    cta: 'Get Started'
  },
  {
    id: 'dotcloud',
    name: 'DotCloud',
    type: 'dedicated',
    price: 15000,
    currency: '₦',
    period: 'month',
    features: [
      '4 CPU Cores',
      '8GB RAM',
      '500GB SSD Storage',
      'Unlimited Bandwidth',
      'Full Root Access',
      'Free SSL Certificate',
      '99.9% Uptime Guarantee',
      '24/7 Dedicated Support',
      'Daily Backups',
      'DDoS Protection',
      'Free IP Address'
    ],
    highlights: ['Dedicated server', 'Maximum performance', 'Full control'],
    cta: 'Get Started'
  },
  {
    id: 'dotresell',
    name: 'DotResell',
    type: 'reseller',
    price: 10000,
    currency: '₦',
    period: 'month',
    features: [
      '50GB SSD Storage',
      'Unlimited Bandwidth',
      'Unlimited Domains',
      'WHMCS License',
      'Free SSL Certificates',
      '24/7 Support',
      '99.9% Uptime Guarantee',
      'Daily Backups',
      'White Label Support'
    ],
    highlights: ['Start your hosting business', 'WHMCS included', 'White label options'],
    cta: 'Start Reselling'
  }
];

export const domainExtensions = [
  { extension: '.com', price: 2500, popular: true },
  { extension: '.net', price: 3000 },
  { extension: '.org', price: 2800 },
  { extension: '.ng', price: 2000 },
  { extension: '.co', price: 3500 },
  { extension: '.io', price: 8000 },
  { extension: '.tech', price: 4000 },
  { extension: '.app', price: 5000 }
]; 