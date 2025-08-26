import React from "react";
import { Metadata } from "next";
import { AuthToggle } from "./(components)/auth-toggle";

export const metadata: Metadata = {
  title: {
    template: "%s | VSGO Platform",
    default: "Authentication | VSGO Platform",
  },
  description: "Access your VSGO account.",
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

export default function PublicAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="space-y-2 mb-6 mt-14">
        <h1 className="text-4xl md:text-5xl font-semibold font-['Hanken_Grotesk'] text-foreground">
          Welcome to VSGO.
        </h1>
        <p className="text-base text-muted-foreground font-['Hanken_Grotesk']">
          Please enter your details below
        </p>
      </div>
      <AuthToggle />
      {children}
    </>
  );
}
