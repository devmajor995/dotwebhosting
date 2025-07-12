import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SignInForm from '@/components/auth/SignInForm';

export const metadata: Metadata = {
  title: 'Sign In - Dot Web Hosting',
  description: 'Sign in to your Dot Web Hosting account to manage your hosting services, domains, and billing.',
};

export default function SignInPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16 lg:pt-20">
        <SignInForm />
      </div>
      <Footer />
    </main>
  );
} 