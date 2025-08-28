import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Contact information",
  alternates: { canonical: "/contacts" },
  openGraph: { url: "/contacts", title: "Contacts | VSGO" },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-xl text-[var(--brand-primary)]">Contacts</h1>
      <p className="text-gray-700">Content will be added soon.</p>
    </div>
  );
}
