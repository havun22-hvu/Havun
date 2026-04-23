import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Havun | SaaS Platforms, Android Apps & Weboplossingen",
  description: "Havun bouwt SaaS platforms, Android apps en biedt professionele webhosting en SEO-optimalisatie.",
  keywords: ["SaaS", "Android apps", "webhosting", "SEO", "React Native", "Laravel", "Nederland"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x32x16" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
};

// Inline script to prevent flash of wrong theme
const themeScript = `
  (function() {
    var t = localStorage.getItem('theme');
    var d = t === 'dark' || (!t || t === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (d) document.documentElement.classList.add('dark');
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {process.env.NODE_ENV === "production" && (
          <script
            defer
            src="https://umami.havun.nl/script.js"
            data-website-id="0007503a-1988-4295-9eb3-ee0e898349f1"
            integrity="sha384-gW+82edTiLqRoEvPbT3xKDCYZ5M02YXbW4tA3gbojZWiiMYNJZb4YneJrS4ri3Rn"
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
