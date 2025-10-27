import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import FloatingButton from "../components/shared/FloatingButton";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'googlebot': 'noindex, nofollow, noimageindex, noarchive, nosnippet',
    'robots': 'noindex, nofollow, noarchive, nosnippet',
    'google': 'noindex, nofollow',
    'bingbot': 'noindex, nofollow, noarchive, nosnippet',
    'slurp': 'noindex, nofollow, noarchive, nosnippet',
    'duckduckbot': 'noindex, nofollow, noarchive, nosnippet',
    'baiduspider': 'noindex, nofollow, noarchive, nosnippet',
    'yandexbot': 'noindex, nofollow, noarchive, nosnippet',
    'facebookexternalhit': 'noindex, nofollow, noarchive, nosnippet',
    'twitterbot': 'noindex, nofollow, noarchive, nosnippet',
    'linkedinbot': 'noindex, nofollow, noarchive, nosnippet',
    'whatsapp': 'noindex, nofollow, noarchive, nosnippet',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="">
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} font-montserrat antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
};

export default RootLayout;