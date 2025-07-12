import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BookOpen, Server, Settings, CreditCard, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const WHMCSIntegrationGuide = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Header />
    <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <BookOpen className="w-16 h-16 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">WHMCS Integration Guide</h1>
        <p className="text-xl mb-6">How to manage your hosting clients with WHMCS and automate your reseller business.</p>
      </div>
    </section>
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-4 space-y-10">
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><HelpCircle className="w-6 h-6" /> What is WHMCS?</h2>
          <p className="text-gray-700 dark:text-gray-300">WHMCS (Web Host Manager Complete Solution) is the industry-leading platform for automating web hosting business operations. It handles client signups, billing, support, and service provisioning, all in one place.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Server className="w-6 h-6" /> Why Use WHMCS?</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Automate account creation, suspension, and termination</li>
            <li>Manage client billing and invoicing</li>
            <li>Accept multiple payment gateways</li>
            <li>Provide a client portal for support and service management</li>
            <li>Integrate with cPanel/WHM and other control panels</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Settings className="w-6 h-6" /> Step-by-Step Integration</h2>
          <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Log in to your WHMCS admin area using the license provided with your DotResell plan.</li>
            <li>Go to <b>Setup &gt; Products/Services &gt; Servers</b> and click <b>Add New Server</b>.</li>
            <li>Enter your cPanel/WHM server details (hostname, IP, API username, and API token/password).</li>
            <li>Test the connection to ensure WHMCS can communicate with your server.</li>
            <li>Go to <b>Setup &gt; Products/Services &gt; Products/Services</b> and create hosting products linked to your server.</li>
            <li>Configure welcome emails, automation settings, and resource limits as needed.</li>
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><CreditCard className="w-6 h-6" /> Payment Gateway Setup</h2>
          <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>In WHMCS, go to <b>Setup &gt; Payments &gt; Payment Gateways</b>.</li>
            <li>Activate your preferred payment gateways (e.g., PayPal, Stripe, local options).</li>
            <li>Enter your payment processor credentials and test transactions.</li>
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><HelpCircle className="w-6 h-6" /> Troubleshooting & Support</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Check WHMCS documentation for detailed setup guides and troubleshooting tips.</li>
            <li>Contact Dot Web Hosting support for help with your license or server connection issues.</li>
            <li>Review server logs and WHMCS activity logs for error messages.</li>
          </ul>
        </div>
        <div className="text-center mt-8">
          <Link href="/support" className="inline-block bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-200">Back to Support Center</Link>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default WHMCSIntegrationGuide; 