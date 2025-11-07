import { Montserrat, Playfair_Display } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Header from "../components/shared/Header"
import Footer from "../components/shared/Footer"
import FloatingButton from "../components/shared/FloatingButton"
import ConditionalLayout from "../components/shared/ConditionalLayout"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
})

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const metadata = {
  // robots: {
  //   index: false,
  //   follow: false,
  //   nocache: true,
  //   googleBot: {
  //     index: false,
  //     follow: false,
  //     noimageindex: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
  // other: {
  //   googlebot: "noindex, nofollow, noimageindex, noarchive, nosnippet",
  //   robots: "noindex, nofollow, noarchive, nosnippet",
  //   google: "noindex, nofollow",
  //   bingbot: "noindex, nofollow, noarchive, nosnippet",
  //   slurp: "noindex, nofollow, noarchive, nosnippet",
  //   duckduckbot: "noindex, nofollow, noarchive, nosnippet",
  //   baiduspider: "noindex, nofollow, noarchive, nosnippet",
  //   yandexbot: "noindex, nofollow, noarchive, nosnippet",
  //   facebookexternalhit: "noindex, nofollow, noarchive, nosnippet",
  //   twitterbot: "noindex, nofollow, noarchive, nosnippet",
  //   linkedinbot: "noindex, nofollow, noarchive, nosnippet",
  //   whatsapp: "noindex, nofollow, noarchive, nosnippet",
  // },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="">
      <head>
        <meta name="msvalidate.01" content="A827D56A91561DA21E2E94273F4D52D5" />
      </head>
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} font-montserrat antialiased`}
        suppressHydrationWarning={true}
      >
        {/* Google Tag Manager - Only load on production domain */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
          if (window.location.hostname === 'www.theaims.ac.in') {
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MC5D9RZ8');
          }
        `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google Tag Manager (noscript) - Only load on production domain */}
        <Script id="gtm-noscript-check" strategy="afterInteractive">
          {`
          if (window.location.hostname === 'www.theaims.ac.in') {
            const noscriptIframe = document.createElement('noscript');
            const iframe = document.createElement('iframe');
            iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-MC5D9RZ8';
            iframe.height = '0';
            iframe.width = '0';
            iframe.style.display = 'none';
            iframe.style.visibility = 'hidden';
            noscriptIframe.appendChild(iframe);
            document.body.appendChild(noscriptIframe);
          }
          `}
        </Script>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Analytics (GA4) - Only load on production domain */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          if (window.location.hostname === 'www.theaims.ac.in') {
            // Load GA4 script dynamically
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3LMQCDEQJH';
            document.head.appendChild(script);
            
            // Initialize GA4
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('set', 'developer_id.dZjQwMz', true);
            gtag('config', 'G-3LMQCDEQJH');
          }
        `}
        </Script>
        {/* End Google Analytics */}

        {/* Defer any external CSS from staging.theaims.ac.in to avoid render-blocking */}
        <Script id="defer-external-styles" strategy="afterInteractive">
          {`
            (function() {
              function deferLink(link) {
                try {
                  if (!link || link.dataset.deferApplied) return;
                  const href = link.getAttribute('href') || '';
                  var isTargetHost =
                    (href.indexOf('staging.theaims.ac.in') !== -1) ||
                    (href.indexOf('www.theaims.ac.in') !== -1);
                  if (!isTargetHost || href.indexOf('/css/') === -1) return;
                  link.dataset.deferApplied = '1';
                  link.media = 'print';
                  link.onload = function() { this.media = 'all'; };
                } catch (_) {}
              }

              // Defer existing links
              document.querySelectorAll('link[rel="stylesheet"]').forEach(deferLink);

              // Observe future insertions
              const observer = new MutationObserver((mutations) => {
                for (const m of mutations) {
                  m.addedNodes && m.addedNodes.forEach((node) => {
                    if (node.tagName === 'LINK' && node.rel === 'stylesheet') {
                      deferLink(node);
                    }
                  });
                }
              });
              observer.observe(document.documentElement || document.body, { childList: true, subtree: true });
            })();
          `}
        </Script>

        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}

export default RootLayout
