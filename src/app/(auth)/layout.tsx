import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { ThemeToggle } from "@/app/(auth)/(components)/theme-toggle";
import { Logo } from "@/components/Logo";
import { ROUTE_ROOT } from "@/constants";

export const metadata: Metadata = {
  title: {
    template: "%s | VSGO Platform",
    default: "Authentication | VSGO Platform",
  },
  description: "Access your VSGO account. Secure authentication for users.",
  keywords: [
    "authentication",
    "login",
    "sign up",
    "vsgo platform",
    "phage therapy",
    "healthcare access",
    "medical platform",
    "secure login",
    "healthcare professionals",
  ],
  authors: [{ name: "VSGO Team" }],
  creator: "VSGO",
  publisher: "VSGO",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Authentication | VSGO Platform",
    description: "Secure access to the VSGO platform.",
    type: "website",
    locale: "en_US",
    siteName: "VSGO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Authentication | VSGO Platform",
    description: "Secure access to the VSGO platform.",
    creator: "@vsgo_platform",
  },
  category: "Healthcare Technology",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[58%_42%] bg-background">
      <div className="grid grid-rows-[auto_1fr] relative p-6">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <Logo href={ROUTE_ROOT} />
        <div className="flex flex-col w-full max-w-[600px] mx-auto pt-8">
          {children}
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center relative p-6 ">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:from-[var(--secondary)] dark:to-[var(--primary)] from-[var(--chart-1)] to-primary "></div>
        <div className="relative max-w-[500px] w-full h-full">
          <Image
            src="/image1.png"
            alt="DNA Helix"
            fill
            priority
            sizes="(min-width: 768px) 500px, 100vw"
            className="relative right-10 object-contain z-10"
          />
        </div>
      </div>
    </div>
  );
}
