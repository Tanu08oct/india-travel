// import 'bootstrap/dist/css/bootstrap.min.css';
// import './globals.css';
// import type { Metadata } from 'next';
// // Add Playfair_Display alongside Inter
// import { Inter, Playfair_Display } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
// // Configure the new Serif font
// const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

// export const metadata: Metadata = {
//   title: 'Adventure Aura',
//   description: 'Explore the world like never before',
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       {/* Apply both font variables to the body */}
//       <body className={`${inter.variable} ${playfair.variable} font-sans`}>
//         {children}
//       </body>
//     </html>
//   );
// }
import '../globals.css'
import { Metadata } from 'next'
import Navbar from '@/components/nav'
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Incredible India | Handpicked Local Wonders',
  description: 'Explore the beauty of India. Book your spiritual journeys, wildlife adventures, and bespoke itineraries.',
}

export default async function RootLayout({ 
  children,
  params
}: { 
  children: React.ReactNode;
  // 1. Type params as a Promise
  params: Promise<{ locale: string }>; 
}) {
  
  // 2. Await the params to unwrap the locale
  const { locale } = await params; 
  
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased text-gray-900 bg-gray-50">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="relative h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}