import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { THEME_STORAGE_KEY } from "@/constants";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { TanstackQueryClientProvider } from "@/lib/TanstackQueryClientProvider";
import { MobileChrome } from "@/components/home/MobileChrome";
import { Sidebar } from "@/components/home/Sidebar";
import { Footer } from "@/components/home/Footer";
import { SidebarSearchProvider } from "@/context/SidebarSearchContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"
  ),
  applicationName: "VSGO",
  title: {
    default:
      "VSGO — Confederation of Organizations of Persons with Disabilities of Ukraine",
    template: "%s | VSGO",
  },
  description:
    'All‑Ukrainian Union of Public Organizations "Confederation of Organizations of Persons with Disabilities of Ukraine".',
  keywords: [
    "VSGO",
    "Confederation",
    "organizations",
    "disability",
    "Ukraine",
    "non‑profit",
  ],
  authors: [{ name: "VSGO" }],
  creator: "VSGO",
  category: "Non‑profit",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "/",
    siteName: "VSGO",
    title:
      "VSGO — Confederation of Organizations of Persons with Disabilities of Ukraine",
    description:
      'All‑Ukrainian Union of Public Organizations "Confederation of Organizations of Persons with Disabilities of Ukraine".',
    images: [
      {
        url: "/logo1.svg",
        width: 512,
        height: 512,
        alt: "VSGO logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "VSGO — Confederation of Organizations of Persons with Disabilities of Ukraine",
    description:
      'All‑Ukrainian Union of Public Organizations "Confederation of Organizations of Persons with Disabilities of Ukraine".',
    images: ["/logo1.svg"],
  },
  icons: {
    icon: "/logo1.svg",
    shortcut: "/logo1-light.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hankenGrotesk.variable} antialiased`}
      >
        <TanstackQueryClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
            enableColorScheme={true}
            storageKey={THEME_STORAGE_KEY}
          >
            <SidebarSearchProvider>
              <MobileChrome />
              <div className="mx-auto max-w-7xl px-4 py-6">
                <div className="grid grid-cols-12 gap-6">
                  <aside className="hidden lg:block lg:col-span-3">
                    <Sidebar />
                  </aside>
                  <div className="col-span-12 lg:col-span-9 space-y-6">
                    <TooltipProvider>{children}</TooltipProvider>
                  </div>
                </div>
              </div>
              <Footer />
              <Toaster />
            </SidebarSearchProvider>
          </ThemeProvider>
        </TanstackQueryClientProvider>
        <Analytics debug={false} />
        <SpeedInsights debug={false} />
      </body>
    </html>
  );
}
