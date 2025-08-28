import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[var(--brand-primary-10)] via-purple-100 to-[var(--brand-primary-10)] border-t border-border/50 p-6">
      <div className="max-w-7xl mx-auto">
        <Card className="shadow-lg border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-gradient-to-br from-[var(--brand-primary-10)] to-purple-50">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div>
                <h3 className="text-lg text-[var(--brand-primary)] mb-2">
                  All‑Ukrainian Union of Public Organizations
                </h3>
                <p className="text-purple-600">
                  "Confederation of Organizations of Persons with Disabilities
                  of Ukraine"
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-[var(--brand-primary)] mb-3">Call us:</h4>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[var(--brand-primary)]" />
                  <span className="text-gray-700">+380730420452</span>
                </div>

                <div>
                  <h4 className="text-[var(--brand-primary)] mb-2">
                    Email us:
                  </h4>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[var(--brand-primary)]" />
                    <span className="text-gray-700">vsgo@ukr.net</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex justify-center md:justify-end">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white hover:from-[color-mix(in_oklab,var(--brand-primary)_90%,transparent)] hover:to-[color-mix(in_oklab,var(--brand-secondary)_90%,transparent)] border-[var(--brand-primary)]"
                >
                  <Facebook className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  );
}
