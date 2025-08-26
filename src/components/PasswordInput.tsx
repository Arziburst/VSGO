"use client";
import { useState } from "react";
import { Eye, EyeSlash } from "iconsax-react";
import { Input } from "@/components/ui/input";
import type { ComponentProps } from "react";

export function PasswordInput(props: ComponentProps<'input'>) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <Input
        {...props}
        type={show ? "text" : "password"}
        className="px-6 h-14 bg-card dark:bg-secondary rounded-2xl border focus:border-primary dark:focus:border-primary focus:outline-none shadow-sm font-[family-name:var(--font-hanken-grotesk)]"
      />
      <div
        className="absolute right-6 top-1/2 transform -translate-y-1/2 p-0 h-auto w-auto hover:bg-transparent cursor-pointer"
        aria-label={show ? "Hide password" : "Show password"}
        onClick={() => setShow((v) => !v)}
      >
        {show ? <div className="icon-theme"><Eye size={20} /></div> : <div className="icon-theme"><EyeSlash size={20} /></div>}
        <span className="sr-only">{show ? "Hide password" : "Show password"}</span>
      </div>
    </div>
  );
} 