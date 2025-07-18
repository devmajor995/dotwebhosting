import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, AlertTriangle, Mail, Lock, Database, Eye, Scale, Phone, MapPin, FileText } from 'lucide-react';

export default function AcceptableUsePolicy() {
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
                Acceptable Use Policy
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-lg text-gray-600">
                This policy outlines the acceptable use of our hosting services and helps maintain a secure environment for all users.
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
                      <h2 className="text-3xl font-bold text-gray-900">1. Introduction</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">This Acceptable Use Policy (&quot;AUP&quot;) governs the use of Dot Web Hosting services. By using our services, you agree to comply with this policy. Violation of this policy may result in suspension or termination of your account.</p>
                      <p className="text-lg">We reserve the right to modify this policy at any time. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">2. Prohibited Activities</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">The following activities are strictly prohibited:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li><strong>Illegal Content:</strong> Hosting or distributing illegal content, including but not limited to copyrighted material without permission, child pornography, or content that violates laws</li>
                        <li><strong>Malware and Viruses:</strong> Distributing malware, viruses, trojans, or other malicious code</li>
                        <li><strong>Spam and Phishing:</strong> Sending unsolicited bulk emails, phishing attempts, or other forms of spam</li>
                        <li><strong>DDoS Attacks:</strong> Participating in or facilitating distributed denial-of-service attacks</li>
                        <li><strong>Hacking:</strong> Attempting to gain unauthorized access to systems or networks</li>
                        <li><strong>Resource Abuse:</strong> Excessive use of server resources that impacts other users</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-green-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">3. Email Policy</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">When using our email services, you must comply with the following:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Send emails only to recipients who have opted in or have a legitimate business relationship</li>
                        <li>Include proper unsubscribe mechanisms in marketing emails</li>
                        <li>Respect rate limits and sending quotas</li>
                        <li>Use accurate sender information and subject lines</li>
                        <li>Comply with CAN-SPAM Act and other applicable email regulations</li>
                        <li>Do not use our services to send spam, phishing emails, or malicious content</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                        <Lock className="w-6 h-6 text-purple-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">4. Security Requirements</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">You are responsible for maintaining the security of your account and services:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Use strong, unique passwords for all accounts</li>
                        <li>Keep software and applications updated with security patches</li>
                        <li>Implement proper access controls and user management</li>
                        <li>Monitor your services for suspicious activity</li>
                        <li>Report security incidents to our support team immediately</li>
                        <li>Do not share account credentials with unauthorized users</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                        <Database className="w-6 h-6 text-orange-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">5. Resource Usage</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">Fair use of our resources is expected:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li><strong>CPU Usage:</strong> Avoid processes that consume excessive CPU resources</li>
                        <li><strong>Memory Usage:</strong> Stay within allocated memory limits</li>
                        <li><strong>Bandwidth:</strong> Use bandwidth reasonably and avoid excessive data transfer</li>
                        <li><strong>Storage:</strong> Use storage space efficiently and avoid storing unnecessary files</li>
                        <li><strong>Database Connections:</strong> Maintain reasonable database connection limits</li>
                        <li><strong>Background Processes:</strong> Limit the number of background processes</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                        <Eye className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">6. Content Standards</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">All content hosted on our services must comply with the following standards:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Be legal and not violate any applicable laws or regulations</li>
                        <li>Not infringe on intellectual property rights</li>
                        <li>Not contain defamatory, libelous, or slanderous material</li>
                        <li>Not promote violence, hate speech, or discrimination</li>
                        <li>Not contain sexually explicit content without proper age verification</li>
                        <li>Not be used for harassment, stalking, or intimidation</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                        <Scale className="w-6 h-6 text-teal-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">7. Compliance and Monitoring</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">We actively monitor our services for policy violations:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Automated systems monitor for spam, malware, and resource abuse</li>
                        <li>Manual reviews are conducted when violations are suspected</li>
                        <li>We may investigate complaints from other users or third parties</li>
                        <li>Violations may result in immediate suspension or termination</li>
                        <li>We cooperate with law enforcement when required by law</li>
                        <li>Appeals can be submitted through our support system</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                        <FileText className="w-6 h-6 text-yellow-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">8. Consequences of Violations</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">Violations of this policy may result in the following actions:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li><strong>Warning:</strong> First-time minor violations may result in a warning</li>
                        <li><strong>Suspension:</strong> Temporary suspension of services for repeated violations</li>
                        <li><strong>Termination:</strong> Permanent termination of account for serious violations</li>
                        <li><strong>Data Loss:</strong> Violations may result in permanent deletion of data</li>
                        <li><strong>Legal Action:</strong> Serious violations may be reported to authorities</li>
                        <li><strong>No Refunds:</strong> Account termination due to policy violations is non-refundable</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mr-4">
                        <Phone className="w-6 h-6 text-pink-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">9. Reporting Violations</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">To report violations of this policy, please contact us:</p>
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Mail className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">Email</p>
                              <p className="text-gray-600">abuse@dotwebhosting.com</p>
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
                      <p className="text-lg mt-4">Please include as much detail as possible when reporting violations, including URLs, email addresses, and specific examples of the violation.</p>
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
                      href="/legal/privacy" 
                      className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-green-600 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    <Link 
                      href="/legal/refund" 
                      className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-purple-600 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      Refund Policy
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