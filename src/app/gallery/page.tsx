import type { Metadata } from "next";
import { Camera } from "lucide-react";
import {
  PageShell,
  PageHeading,
  PageCard,
} from "@/components/home/PageChrome";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Photo gallery of events and activities",
  alternates: { canonical: "/gallery" },
  openGraph: { url: "/gallery", title: "Photo Gallery | VSGO" },
};

export default function Page() {
  return (
    <PageShell>
      <PageHeading title="Фотогалерея" icon={Camera} />
      <PageCard tone="soft" className="p-5 md:p-6">
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Content will be added soon.
        </p>
      </PageCard>
    </PageShell>
  );
}
