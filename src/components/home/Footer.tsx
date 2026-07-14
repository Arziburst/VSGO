import Link from "next/link";
import { Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full" style={{ background: "var(--footer-bg)" }}>
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-4 py-5 text-base sm:flex-row sm:gap-3">
        <p className="text-center text-base leading-relaxed text-white/85 sm:text-left">
          © 2026 Конфедерація громадських організацій осіб з інвалідністю України.
          Усі права захищені.
        </p>

        <div className="flex items-center gap-5 text-base text-white/85">
          <Link
            href="#"
            className="whitespace-nowrap transition-colors hover:text-white"
          >
            Карта сайту
          </Link>
          <Link
            href="#"
            className="whitespace-nowrap transition-colors hover:text-white"
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
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877f2] text-white transition-opacity hover:opacity-80"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="mailto:vsgo@ukr.net"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
