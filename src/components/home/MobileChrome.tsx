"use client";

import { useState } from "react";
import { Header } from "@/components/home/Header";
import { MobileMenu } from "@/components/home/MobileMenu";

export function MobileChrome() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header onMenuToggle={() => setIsOpen((v) => !v)} />
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
