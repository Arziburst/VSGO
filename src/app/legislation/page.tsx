import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legislation",
  description: "Relevant legislation and documents",
  alternates: { canonical: "/legislation" },
  openGraph: { url: "/legislation", title: "Legislation | VSGO" },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-xl text-[var(--brand-primary)]">Legislation</h1>
      <p className="text-gray-700">Content will be added soon.</p>
    </div>
  );
}
