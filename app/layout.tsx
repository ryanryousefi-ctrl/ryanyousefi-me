import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ryanyousefi.me"),
  title: {
    default: "Ryan Yousefi - Journalist, Editor & Communications Executive",
    template: "%s | Ryan Yousefi",
  },
  description:
    "Ryan Yousefi is an award-winning journalist, editor, and communications executive whose work has appeared in Sports Illustrated, Miami New Times, Bleacher Report, USA Today, UPROXX, and multiple Talk Media publications.",
  keywords: [
    "Ryan Yousefi",
    "journalist",
    "editor",
    "sports writer",
    "communications executive",
    "Miami New Times",
    "Sports Illustrated",
    "Bleacher Report",
    "USA Today",
    "UPROXX",
    "Talk Media",
    "content strategy",
  ],
  authors: [{ name: "Ryan Yousefi", url: "https://ryanyousefi.me" }],
  creator: "Ryan Yousefi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ryanyousefi.me",
    siteName: "Ryan Yousefi",
    title: "Ryan Yousefi - Journalist, Editor & Communications Executive",
    description:
      "Award-winning journalist, editor, and communications executive. Work featured in Sports Illustrated, Miami New Times, Bleacher Report, USA Today, UPROXX, and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ryan Yousefi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Yousefi - Journalist, Editor & Communications Executive",
    description:
      "Award-winning journalist, editor, and communications executive.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ryan Yousefi",
    url: "https://ryanyousefi.me",
    jobTitle: "Journalist, Editor & Communications Executive",
    description:
      "Award-winning journalist, editor, and communications executive with work in Sports Illustrated, Miami New Times, Bleacher Report, USA Today, UPROXX, and multiple Talk Media publications.",
    sameAs: ["https://www.linkedin.com/in/ryan-yousefi/"],
    knowsAbout: [
      "Journalism",
      "Sports Writing",
      "Content Strategy",
      "Communications",
      "Marketing",
      "Web3",
      "Gaming",
    ],
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[--paper] text-[--ink] flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
