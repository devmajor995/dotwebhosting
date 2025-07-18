import React from 'react';
import Link from 'next/link';
import { ArrowLeft, DollarSign, Clock, CheckCircle, XCircle, AlertTriangle, Phone, Mail, MapPin, FileText, Users } from 'lucide-react';

export default function RefundPolicy() {
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
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Refund Policy
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-lg text-gray-600">
                We strive to provide excellent service, but if you&apos;re not satisfied, we have a fair refund policy.
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
                        <DollarSign className="w-6 h-6 text-blue-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">1. General Refund Policy</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">At Dot Web Hosting, we are committed to customer satisfaction. Our refund policy is designed to be fair and transparent:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>30-day money-back guarantee for new hosting accounts</li>
                        <li>Pro-rated refunds for annual plans cancelled mid-term</li>
                        <li>No refunds for domain registrations (as per industry standard)</li>
                        <li>Refunds processed within 5-10 business days</li>
                        <li>Refunds issued to the original payment method</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">2. Eligible for Refunds</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">The following services are eligible for refunds:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li><strong>Shared Hosting:</strong> 30-day money-back guarantee</li>
                        <li><strong>VPS Hosting:</strong> 30-day money-back guarantee</li>
                        <li><strong>Dedicated Servers:</strong> 30-day money-back guarantee</li>
                        <li><strong>SSL Certificates:</strong> 30-day money-back guarantee</li>
                        <li><strong>Website Builders:</strong> 30-day money-back guarantee</li>
                        <li><strong>Email Services:</strong> 30-day money-back guarantee</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                        <XCircle className="w-6 h-6 text-red-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">3. Non-Refundable Services</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">The following services are non-refundable:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li><strong>Domain Registrations:</strong> Once registered, domains cannot be refunded</li>
                        <li><strong>Domain Transfers:</strong> Transfer fees are non-refundable</li>
                        <li><strong>Add-on Services:</strong> Site migration, SEO services, etc.</li>
                        <li><strong>Setup Fees:</strong> One-time setup charges</li>
                        <li><strong>Overages:</strong> Bandwidth, storage, or other usage overages</li>
                        <li><strong>Third-party Services:</strong> Services provided by external vendors</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-orange-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">4. Refund Processing Time</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">Refund processing times vary by payment method:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li><strong>Credit/Debit Cards:</strong> 5-10 business days</li>
                        <li><strong>PayPal:</strong> 3-5 business days</li>
                        <li><strong>Bank Transfers:</strong> 7-14 business days</li>
                        <li><strong>Cryptocurrency:</strong> 1-3 business days</li>
                      </ul>
                      <p className="text-lg">Note: Processing times may vary depending on your bank or payment processor.</p>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                        <AlertTriangle className="w-6 h-6 text-purple-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">5. Refund Conditions</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">To be eligible for a refund, the following conditions must be met:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Refund request must be made within the applicable refund period</li>
                        <li>Account must be in good standing (no violations of Terms of Service)</li>
                        <li>Service must not have been used excessively or abused</li>
                        <li>All outstanding invoices must be paid</li>
                        <li>Refund request must be submitted through proper channels</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                        <FileText className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">6. How to Request a Refund</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">To request a refund, please follow these steps:</p>
                      <ol className="list-decimal pl-6 space-y-2 text-lg">
                        <li>Log into your Dot Web Hosting account</li>
                        <li>Navigate to the billing section</li>
                        <li>Select the service you wish to cancel</li>
                        <li>Choose the refund option</li>
                        <li>Provide a reason for the refund request</li>
                        <li>Submit the request</li>
                      </ol>
                      <p className="text-lg">Alternatively, you can contact our support team directly for assistance.</p>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-teal-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">7. Account Cancellation</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">When you request a refund, your account will be cancelled:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>All services will be suspended immediately</li>
                        <li>Your website and data will be inaccessible</li>
                        <li>Email services will be discontinued</li>
                        <li>Domain services will be affected (if applicable)</li>
                        <li>Backup data will be retained for 30 days</li>
                      </ul>
                      <p className="text-lg">Please ensure you have backed up all important data before requesting a refund.</p>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">8. Exceptions and Special Cases</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                      <p className="text-lg">In certain circumstances, we may consider refunds outside our standard policy:</p>
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li><strong>Service Outages:</strong> Extended downtime affecting your business</li>
                        <li><strong>Technical Issues:</strong> Persistent problems we cannot resolve</li>
                        <li><strong>Billing Errors:</strong> Incorrect charges or double billing</li>
                        <li><strong>Special Circumstances:</strong> Case-by-case evaluation</li>
                      </ul>
                      <p className="text-lg">All exceptions are reviewed on a case-by-case basis by our management team.</p>
                    </div>
                  </section>

                  <section className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mr-4">
                        <Phone className="w-6 h-6 text-pink-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">9. Contact Information</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      If you have questions about our refund policy or need assistance, please contact us:
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Mail className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Email</p>
                            <p className="text-gray-600">billing@dotwebhosting.com</p>
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
                      href="/legal/privacy" 
                      className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-green-600 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      Privacy Policy
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