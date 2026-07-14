import type { Metadata } from "next";
import { Phone } from "lucide-react";
import {
  PageShell,
  PageHeading,
  PageCard,
} from "@/components/home/PageChrome";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Contact information",
  alternates: { canonical: "/contacts" },
  openGraph: { url: "/contacts", title: "Contacts | VSGO" },
};

export default function Page() {
  return (
    <PageShell>
      <PageHeading title="Контакти" icon={Phone} />
      <PageCard tone="soft" className="p-5 md:p-6">
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Content will be added soon.
        </p>
      </PageCard>
    </PageShell>
  );
}
