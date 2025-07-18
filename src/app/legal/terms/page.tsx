import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Shield, Users, CreditCard, Clock, AlertTriangle, Scale, Phone, Mail, MapPin } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Dot Web Hosting</span>
            </Link>
            <Link 
              href="/" 
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-lg text-gray-600">
                By accessing and using Dot Web Hosting services, you accept and agree to be bound by these terms and conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                        <Shield className="w-6 h-6 text-blue-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">1. Acceptance of Terms</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      By accessing and using Dot Web Hosting services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">2. Description of Service</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Dot Web Hosting provides web hosting services including but not limited to shared hosting, VPS hosting, dedicated servers, domain registration, and related services. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                    </p>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                        <AlertTriangle className="w-6 h-6 text-purple-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">3. User Responsibilities</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">You are responsible for:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Maintaining the confidentiality of your account information</li>
                        <li>All activities that occur under your account</li>
                        <li>Ensuring your use of our services complies with applicable laws</li>
                        <li>Backing up your data regularly</li>
                        <li>Maintaining appropriate security measures for your website</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                        <CreditCard className="w-6 h-6 text-orange-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">4. Payment Terms</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">Payment terms and conditions:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>All fees are billed in advance on a monthly, quarterly, or annual basis</li>
                        <li>Payments are non-refundable except as specified in our refund policy</li>
                        <li>Late payments may result in service suspension or termination</li>
                        <li>Prices are subject to change with 30 days notice</li>
                        <li>All fees are exclusive of applicable taxes</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">5. Service Level Agreement</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">We strive to maintain 99.9% uptime for all hosting services. However, we do not guarantee uninterrupted service and are not liable for any damages resulting from service interruptions.</p>
                      <p className="text-lg">Scheduled maintenance will be performed during off-peak hours with advance notice when possible.</p>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">6. Prohibited Uses</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">You may not use our services to:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Violate any applicable laws or regulations</li>
                        <li>Infringe upon intellectual property rights</li>
                        <li>Distribute malware, viruses, or other harmful code</li>
                        <li>Send spam or unsolicited commercial email</li>
                        <li>Engage in activities that may harm our infrastructure</li>
                        <li>Host content that is illegal, defamatory, or violates others&apos; rights</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                        <Shield className="w-6 h-6 text-teal-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">7. Data and Privacy</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices regarding the collection and use of your information.
                    </p>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                        <Scale className="w-6 h-6 text-yellow-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">8. Intellectual Property</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      All content, features, and functionality of our services are owned by Dot Web Hosting and are protected by international copyright, trademark, and other intellectual property laws.
                    </p>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mr-4">
                        <AlertTriangle className="w-6 h-6 text-pink-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">9. Limitation of Liability</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      In no event shall Dot Web Hosting be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                    </p>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                        <AlertTriangle className="w-6 h-6 text-gray-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">10. Termination</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.</p>
                      <p className="text-lg">Upon termination, your right to use the services will cease immediately, and we may delete your account and data.</p>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                        <Scale className="w-6 h-6 text-blue-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">11. Governing Law</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Dot Web Hosting operates, without regard to its conflict of law provisions.
                    </p>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                        <FileText className="w-6 h-6 text-green-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">12. Changes to Terms</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website. Your continued use of our services after such modifications constitutes acceptance of the updated terms.
                    </p>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                        <Phone className="w-6 h-6 text-purple-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">13. Contact Information</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      If you have any questions about these Terms of Service, please contact us at:
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Mail className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Email</p>
                            <p className="text-gray-600">legal@dotwebhosting.com</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <Phone className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Phone</p>
                            <p className="text-gray-600">+1 (555) 123-4567</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 md:col-span-2">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Address</p>
                            <p className="text-gray-600">123 Hosting Street, Tech City, TC 12345</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                {/* Navigation Links */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link 
                      href="/legal/privacy" 
                      className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    <Link 
                      href="/legal/refund" 
                      className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-green-600 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      Refund Policy
                    </Link>
                    <Link 
                      href="/legal/acceptable-use" 
                      className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-purple-600 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      Acceptable Use Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold">Dot Web Hosting</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your Domain. Our Priority. Professional web hosting solutions with 99.9% uptime guarantee.
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dot Web Hosting. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 