import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Members",
  description: "Members of the Confederation",
  alternates: { canonical: "/members" },
  openGraph: { url: "/members", title: "Members | VSGO" },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-xl text-[#7a97e3]">Members</h1>
      <p className="text-gray-700">Content will be added soon.</p>
    </div>
  );
}
