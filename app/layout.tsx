import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/constants";
import Script from "next/script";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "job board software",
    "next.js",
    "react",
    "typescript",
    "tailwindcss",
    "open source",
    "airtable",
  ],
  authors: [
    {
      name: "Tomas Laurinavicius",
      url: "https://github.com/tomaslau",
    },
  ],
  creator: "Tomas Laurinavicius",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteConfig.name + " - Open Source Job Board Software",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/bordful-job-board-software.png',
        width: 1200,
        height: 630,
        alt: 'Bordful - Open Source Job Board Software',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name + " - Open Source Job Board Software",
    description: siteConfig.description,
    creator: "@bordful",
    site: "@bordful",
    images: [
      {
        url: '/images/bordful-job-board-software.png',
        width: 1200,
        height: 630,
        alt: 'Bordful - Open Source Job Board Software',
      },
    ],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://bordful.com"),
  appleWebApp: {
    title: "Bordful",
  },
  alternates: {
    languages: {
      'en-US': 'https://bordful.com',
      'x-default': 'https://bordful.com',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          defer
          src="https://umami.craftled.com/script.js"
          data-website-id="206cabf2-10e7-489c-8766-2f4f875f678e"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${geist.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
