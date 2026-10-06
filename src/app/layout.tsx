import type {Metadata} from "next";
import {Inter, JetBrains_Mono} from "next/font/google";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/next";
import "./globals.css";
import {ClientThemeProvider} from "@/src/components/ClientThemeProvider";
import LoadingScreen from "@/src/components/LoadingScreen";

const readableSans = Inter({
  variable: "--font-geist-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const readableMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dipongkor000.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dipongkor | Developer",
    template: "%s | Dipongkor ",
  },
  description: "Portfolio of Dipongkor  — full-stack web development with React, Next.js, Node.js, and TypeScript. Projects, stack, and contact.",
  keywords: ["Dipongkor ", "portfolio", "Developer", "React", "Next.js", "TypeScript", "Node.js", "Bangladesh"],
  authors: [{name: "Dipongkor "}],
  creator: "Dipongkor ",
  icons: {
    icon: "/brand-d.svg",
    apple: "/brand-d.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Dipongkor ",
    title: "Dipongkor | Developer",
    description: "Full-stack web development with React, Next.js, Node.js, and TypeScript — portfolio, projects, and contact.",
    images: [
      {
        url: "/brand-d.svg",
        width: 512,
        height: 512,
        alt: "Dipongkor ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipongkor | Developer",
    description: "Full-stack web development with React, Next.js, Node.js, and TypeScript — portfolio, projects, and contact.",
    images: ["/brand-d.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${readableSans.variable} ${readableMono.variable} font-sans text-[15px] md:text-[17px] leading-relaxed tracking-[0.01em] antialiased`}>
        <ClientThemeProvider>
          <LoadingScreen>{children}</LoadingScreen>
        </ClientThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
