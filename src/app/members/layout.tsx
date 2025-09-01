import { Metadata } from "next";

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

export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
