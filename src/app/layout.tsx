import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { TanstackQueryClientProvider } from "@/lib/TanstackQueryClientProvider";
import { Header } from "@/components/home/Header";
import { Sidebar } from "@/components/home/Sidebar";
import { Footer } from "@/components/home/Footer";

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
  title: "Phage - Personalized Phage Therapy",
  description: "Platform for personalized phage therapy",
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
            storageKey="vsgo-theme"
          >
            <Header />
            <div className="mx-auto max-w-7xl px-4 py-6">
              <div className="grid grid-cols-12 gap-6">
                <aside className="col-span-12 md:col-span-3">
                  <Sidebar />
                </aside>
                <div className="col-span-12 md:col-span-9 space-y-6">
                  <TooltipProvider>{children}</TooltipProvider>
                </div>
              </div>
            </div>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </TanstackQueryClientProvider>
        <Analytics debug={false} />
        <SpeedInsights debug={false} />
      </body>
    </html>
  );
}
