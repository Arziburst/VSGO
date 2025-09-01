import type { Metadata } from "next";
import OfficesClient from "./OfficesClient";

export const metadata: Metadata = {
  title: "Regional Offices",
  description: "Regional offices of the Confederation",
  alternates: { canonical: "/offices" },
  openGraph: { url: "/offices", title: "Regional Offices | VSGO" },
};

export default function Page() {
  return <OfficesClient />;
}
