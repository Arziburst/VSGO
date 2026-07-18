import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
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
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand-surface)] text-white">
            <Mail className="h-6 w-6" />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-[var(--brand-heading)]">Email</p>
            <a
              href="mailto:vsgo@ukr.net"
              className="break-all text-lg font-semibold text-[var(--brand-link)] underline underline-offset-4 hover:opacity-80 md:text-xl"
            >
              vsgo@ukr.net
            </a>
          </div>
        </div>
      </PageCard>
    </PageShell>
  );
}
