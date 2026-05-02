import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'SunCart – Summer Essentials Store',
  description: 'Your go-to destination for summer essentials.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-amber-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#1a1a2e',
              color: '#ffc107',
              border: '1px solid #ffc107',
              borderRadius: '12px',
              fontFamily: 'DM Sans, sans-serif',
            },
            success: {
              iconTheme: {
                primary: '#ffc107',
                secondary: '#1a1a2e',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
