import Link from "next/link";
import { Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full" style={{ background: "var(--footer-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <p className="text-white/70 text-xs text-center sm:text-left leading-relaxed">
          © 2026 Конфедерація громадських організацій осіб з інвалідністю України.
          Усі права захищені.
        </p>

        <div className="flex items-center gap-4 text-white/70">
          <Link
            href="#"
            className="hover:text-white transition-colors whitespace-nowrap text-xs"
          >
            Карта сайту
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-colors whitespace-nowrap text-xs"
          >
            Політика конфіденційності
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://www.facebook.com/KonfederaciaVSGO/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-8 h-8 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="mailto:vsgo@ukr.net"
            aria-label="Email"
            className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
