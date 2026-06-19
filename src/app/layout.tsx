import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PERSONAL } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://adalbertosilveiranapoles.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${PERSONAL.name} — Senior Software Engineer`,
    template: `%s | ${PERSONAL.name}`,
  },
  description:
    "Senior Software Engineer with 18+ years building enterprise Java, Spring Boot, cloud-native AWS microservices, and AI-powered systems. Expert in Spring WebFlux, event-driven architecture, and Amazon Bedrock.",
  keywords: [
    "Senior Software Engineer",
    "Java Developer",
    "Spring Boot",
    "Spring WebFlux",
    "AWS",
    "Microservices",
    "Amazon Bedrock",
    "AI Engineer",
    "Full Stack Developer",
    "Cloud Native",
    "Event-Driven Architecture",
    "Next.js",
    "React",
    "TypeScript",
    "Docker",
    "Kubernetes",
    "Adalberto Silveira Napoles",
    "Hialeah FL",
    "Remote Engineer",
  ],
  authors: [{ name: PERSONAL.name, url: baseUrl }],
  creator: PERSONAL.name,
  publisher: PERSONAL.name,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: `${PERSONAL.name} — Portfolio`,
    title: `${PERSONAL.name} — Senior Software Engineer`,
    description:
      "18+ years building enterprise cloud-native systems. Java, Spring Boot, AWS, AI Agents, and React.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${PERSONAL.name} — Senior Software Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL.name} — Senior Software Engineer`,
    description:
      "18+ years building enterprise cloud-native systems. Java, Spring Boot, AWS, AI Agents.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: baseUrl,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#080811" }],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adalberto Silveira Napoles",
  jobTitle: "Senior Software Engineer",
  description:
    "Senior Software Engineer with 18+ years building enterprise Java, Spring Boot, cloud-native AWS microservices, and AI-powered systems.",
  url: baseUrl,
  email: "mailto:adalbertosn1982@gmail.com",
  telephone: "+1-812-901-8687",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hialeah",
    addressRegion: "FL",
    addressCountry: "US",
  },
  sameAs: [
    "https://linkedin.com/in/adalbertosilveiranapoles",
    "https://github.com/silveiraSoft",
  ],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Spring WebFlux",
    "AWS",
    "Amazon Bedrock",
    "Microservices",
    "Event-Driven Architecture",
    "AI Agents",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "Docker",
    "Kubernetes",
  ],
  worksFor: {
    "@type": "Organization",
    name: "3HTP Cloud Services",
    url: "https://www.3htp.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-text-primary`}
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
