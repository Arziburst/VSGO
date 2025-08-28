import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Photo gallery of events and activities",
  alternates: { canonical: "/gallery" },
  openGraph: { url: "/gallery", title: "Photo Gallery | VSGO" },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-xl text-[var(--brand-primary)]">Photo Gallery</h1>
      <p className="text-gray-700">Content will be added soon.</p>
    </div>
  );
}
