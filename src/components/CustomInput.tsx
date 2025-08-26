"use client";

import React from 'react';
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface CustomInputProps extends React.ComponentPropsWithoutRef<typeof Input> {
  icon?: React.ReactNode;
}

export function CustomInput({
  className,
  icon,
  ...props
}: CustomInputProps) {
  if (icon) {
    return (
      <div className="relative">
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          {icon}
        </div>
        <Input
          className={cn(
            "h-9 px-3 border border-border focus:border-ring focus:outline-none shadow-sm font-[family-name:var(--font-hanken-grotesk)] placeholder:text-muted-foreground bg-card",
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
        "h-9 px-3 border border-border focus:border-ring focus:outline-none shadow-sm font-[family-name:var(--font-hanken-grotesk)] placeholder:text-muted-foreground bg-card",
        className
      )}
      {...props}
    />
  );
} 