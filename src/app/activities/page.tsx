import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Activities",
  description: "Activities and initiatives of the Confederation",
  alternates: { canonical: "/activities" },
  openGraph: { url: "/activities", title: "Our Activities | VSGO" },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-xl text-[#7a97e3]">Our Activities</h1>
      <p className="text-gray-700">Content will be added soon.</p>
    </div>
  );
}
