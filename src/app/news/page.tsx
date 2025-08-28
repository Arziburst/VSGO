import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news and updates",
  alternates: { canonical: "/news" },
  openGraph: { url: "/news", title: "News | VSGO" },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-xl text-[#7a97e3]">News</h1>
      <p className="text-gray-700">Content will be added soon.</p>
    </div>
  );
}
