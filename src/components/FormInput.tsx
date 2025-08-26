"use client";

import React from 'react';
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FormInputProps extends React.ComponentPropsWithoutRef<typeof Input> {
  icon?: React.ReactNode;
}

export function FormInput({
  className,
  icon,
  ...props
}: FormInputProps) {
  if (icon) {
    return (
      <div className="relative">
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
          {icon}
        </div>
        <Input
          className={cn(
            "px-6 h-14 bg-card dark:bg-secondary rounded-2xl border focus:border-primary dark:focus:border-primary focus:outline-none shadow-sm font-[family-name:var(--font-hanken-grotesk)]",
            className
          )}
          {...props}
        />
      </div>
    );
  }

  return (
    <Input
      className={cn(
        "px-6 h-16 bg-card dark:bg-secondary rounded-2xl border focus:border-primary dark:focus:border-primary focus:outline-none shadow-sm font-[family-name:var(--font-hanken-grotesk)]",
        className
      )}
      {...props}
    />
  );
} 