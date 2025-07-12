import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SignUpForm from '@/components/auth/SignUpForm';

export const metadata: Metadata = {
  title: 'Sign Up - Dot Web Hosting',
  description: 'Create your Dot Web Hosting account and start your online journey. Choose from our range of hosting plans.',
};

export default function SignUpPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16 lg:pt-20">
        <SignUpForm />
      </div>
      <Footer />
    </main>
  );
} 