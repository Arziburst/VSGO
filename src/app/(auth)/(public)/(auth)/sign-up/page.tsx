import { Metadata } from "next";
import { Suspense } from "react";
import SignUpForm from "./(components)/SignUpForm";
import { SignUpFormSkeleton } from "./(components)/SignUpFormSkeleton";
import { signUpAction } from "@/app/(actions)/auth";
import { ROUTE_SIGN_UP } from "@/constants";

export const metadata: Metadata = {
  title: "Sign Up | VSGO Platform",
  description: "Create your VSGO account.",
  keywords: [
    "sign up",
    "register",
    "create account",
    "vsgo",
    "phage therapy",
    "personalized medicine",
    "biobank access",
    "medical research",
    "therapeutic innovation",
    "healthcare platform",
    "join vsgo",
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
    title: "Sign Up | VSGO Platform",
    description: "Create your VSGO account.",
    type: "website",
    locale: "en_US",
    siteName: "VSGO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign Up | VSGO Platform",
    description: "Create your VSGO account.",
    creator: "@vsgo_platform",
  },
  alternates: {
    canonical: ROUTE_SIGN_UP,
  },
  category: "Healthcare Technology",
};

export default function SignUp() {
  return (
    <Suspense fallback={<SignUpFormSkeleton />}>
      <SignUpForm signUpAction={signUpAction} />
    </Suspense>
  );
}
