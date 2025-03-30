import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/home/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../style/main.css';
import { Toaster } from "@/components/ui/sonner";
import { getSeoData } from '@/lib/getSeoData';
import logo from '../assets/images/home/logo.png';

// ✅ Fetch metadata dynamically from the API
export async function generateMetadata(): Promise<Metadata> {
  // const seoData = await getSeoData(); // Fetch data on the server

  return {
    title:
      // seoData?.seo_title || 
      'Orient',
    description:
      // seoData?.seo_description || 
      "orient",
    keywords:
      // seoData?.seo_keywords || 
      "orient",
    openGraph: {
      title:
        //  seoData?.seo_title ||
        'Orient',
      description:
        // seoData?.seo_description || 
        "orient",
      url: 'https://www.Orient.co/',
      siteName: "Orient",
      images: [
        {
           url:
          // seoData?.seo_image || 
          logo.src,
          width: 1200,
          height: 630,
          alt: 'Orient',
        },
      ],
      type: 'website',
      locale: 'ar_SA',
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir='rtl' id='root'>
      <body className="w-full" suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}