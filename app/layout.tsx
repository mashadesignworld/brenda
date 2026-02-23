// app/layout.tsx
import './globals.css';
import { EB_Garamond, Great_Vibes, Dancing_Script } from 'next/font/google'; // Import new fonts
import '@fortawesome/fontawesome-svg-core/styles.css';
import Navbar from './components/Navbar'; // Ensure Navbar is imported correctly
import { Playfair_Display, Inter } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import ClientLayoutWrapper from "./components/ClientLayoutWrapper";
import Cursor from './components/Cursor';

// Configure EB Garamond
const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-eb-garamond',
});

// Configure Great Vibes for 'Wealth'
const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'], // Great Vibes typically only has one weight
  variable: '--font-great-vibes',
});

// Configure Dancing Script for 'Outlast'
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'], // Dancing Script has 400 and 700
  variable: '--font-dancing-script',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Apply all font variables to the <html> tag
    <html
      lang="en"
      className={`${ebGaramond.variable} ${greatVibes.variable} ${dancingScript.variable}`}
    >
      <body>
        <Navbar />
        <div className="grain-bg" />
        <Cursor />
  <ClientLayoutWrapper>
    {children}
  </ClientLayoutWrapper>
        <Toaster 
          position="top-center" 
          containerStyle={{
            zIndex: 99999, // This ensures it sits on top of your z-50 modal
          }}
          toastOptions={{
            // Extra safety: style individual toasts too
            style: {
              zIndex: 99999,
            },
          }}
        />
        
        {/* Ensure the FooterSection is included at the bottom of the layout */}
      </body>
    </html>
  );
}

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const inter = Inter({
  subsets: ["latin"],
});