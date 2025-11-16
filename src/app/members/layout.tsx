import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Члени Конфедерації",
  description:
    "Повний список громадських об'єднань - членів ВСГО «Конфедерація ГОІУ» з назвами організацій та веб-сторінками.",
  openGraph: {
    title: "Члени Конфедерації - ВСГО Конфедерація ГОІУ",
    description:
      "Повний список громадських об'єднань - членів ВСГО «Конфедерація ГОІУ» з назвами організацій та веб-сторінками.",
  },
};

export default function MembersLayout({ children }: { children: ReactNode }) {
  return children;
}
