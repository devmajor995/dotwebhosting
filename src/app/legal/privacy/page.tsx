import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Database, Eye, Lock, Users, Globe, Baby, FileText, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function PrivacyPolicy() {
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
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-lg text-gray-600">
                We are committed to protecting your privacy and ensuring the security of your personal information.
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
                      <h2 className="text-3xl font-bold text-gray-900">1. Information We Collect</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">We collect the following types of information:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li><strong>Personal Information:</strong> Name, email address, phone number, billing address</li>
                        <li><strong>Account Information:</strong> Username, password, account preferences</li>
                        <li><strong>Payment Information:</strong> Credit card details, billing history</li>
                        <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
                        <li><strong>Usage Data:</strong> Website usage patterns, service interactions</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                        <Database className="w-6 h-6 text-green-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">2. How We Use Your Information</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">We use your information for the following purposes:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Providing and maintaining our hosting services</li>
                        <li>Processing payments and managing billing</li>
                        <li>Communicating with you about your account and services</li>
                        <li>Providing customer support and technical assistance</li>
                        <li>Improving our services and user experience</li>
                        <li>Complying with legal obligations</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                        <Eye className="w-6 h-6 text-purple-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">3. Information Sharing</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business</li>
                        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                        <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                        <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                        <Lock className="w-6 h-6 text-orange-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">4. Data Security</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">We implement appropriate security measures to protect your personal information:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Encryption of sensitive data in transit and at rest</li>
                        <li>Regular security audits and vulnerability assessments</li>
                        <li>Access controls and authentication measures</li>
                        <li>Employee training on data protection practices</li>
                        <li>Incident response procedures</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">5. Your Rights</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">You have the following rights regarding your personal information:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li><strong>Access:</strong> Request access to your personal information</li>
                        <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                        <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                        <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                        <li><strong>Objection:</strong> Object to certain processing activities</li>
                        <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                        <Globe className="w-6 h-6 text-teal-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">6. Cookies and Tracking</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">We use cookies and similar tracking technologies to:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Remember your preferences and settings</li>
                        <li>Analyze website traffic and usage patterns</li>
                        <li>Provide personalized content and advertisements</li>
                        <li>Improve website functionality and performance</li>
                      </ul>
                      <p className="text-lg">You can control cookie settings through your browser preferences.</p>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mr-4">
                        <Baby className="w-6 h-6 text-pink-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">7. Children&apos;s Privacy</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                    </p>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                        <FileText className="w-6 h-6 text-yellow-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">8. Changes to This Policy</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the &quot;Last updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                    </p>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-red-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">9. Data Retention</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">We retain your personal information for as long as necessary to:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Provide our services to you</li>
                        <li>Comply with legal obligations</li>
                        <li>Resolve disputes and enforce agreements</li>
                        <li>Maintain business records</li>
                      </ul>
                      <p className="text-lg">When we no longer need your information, we will securely delete or anonymize it.</p>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                        <Phone className="w-6 h-6 text-purple-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">10. Contact Us</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      If you have any questions about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Mail className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Email</p>
                            <p className="text-gray-600">privacy@dotwebhosting.com</p>
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
                      href="/legal/terms" 
                      className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      Terms of Service
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