import type { Metadata } from "next";
import { MainContent } from "@/components/home/MainContent";

export default function Home() {
  return <MainContent />;
}

export const metadata: Metadata = {
  title: "Home",
  description:
    'Welcome to the All‑Ukrainian Union of Public Organizations "Confederation of Organizations of Persons with Disabilities of Ukraine".',
  alternates: { canonical: "/" },
  openGraph: { url: "/", title: "Home | VSGO" },
};
