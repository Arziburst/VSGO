import { Metadata } from "next";
import { Suspense } from "react";
import SignInForm from "./(components)/SignInForm";
import { SignInFormSkeleton } from "./(components)/SignInFormSkeleton";
import { ROUTE_SIGN_IN } from "@/constants";

export const metadata: Metadata = {
  title: "Sign In | VSGO Platform",
  description: "Sign in to your VSGO account.",
  keywords: [
    "sign in",
    "login",
    "vsgo",
    "phage therapy",
    "biobank management",
    "medical platform",
    "authentication",
    "healthcare",
    "therapeutic management",
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
    title: "Sign In | VSGO Platform",
    description: "Access your VSGO account.",
    type: "website",
    locale: "en_US",
    siteName: "VSGO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign In | VSGO Platform",
    description: "Access your VSGO account.",
    creator: "@vsgo_platform",
  },
  alternates: {
    canonical: ROUTE_SIGN_IN,
  },
  category: "Healthcare Technology",
};

export default function SignIn() {
  return (
    <Suspense fallback={<SignInFormSkeleton />}>
      <SignInForm />
    </Suspense>
  );
}
