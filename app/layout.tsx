import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "IsoTimes | Breaking News, World News & Analysis",
    template: "%s | IsoTimes",
  },
  description: "Independent journalism for an informed world. Breaking news, investigative reporting, and expert analysis from IsoTimes.",
  keywords: ["news", "breaking news", "world news", "politics", "business", "technology", "sports"],
  authors: [{ name: "IsoTimes Editorial" }],
  openGraph: {
    title: "IsoTimes",
    description: "Independent journalism for an informed world",
    url: "https://isotimes.com",
    siteName: "IsoTimes",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IsoTimes",
    description: "Independent journalism for an informed world",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
