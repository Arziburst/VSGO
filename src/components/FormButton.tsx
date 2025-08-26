"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FormButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  children: React.ReactNode;
}

export function FormButton({
  children,
  className,
  type = "submit",
  ...props
}: FormButtonProps) {
  return (
    <Button 
      type={type}
      className={cn(
        "w-full h-14 bg-primary dark:bg-primary text-primary-foreground dark:text-primary-foreground py-6 rounded-2xl hover:bg-primary/90 dark:hover:bg-primary/80 transition-colors font-[family-name:var(--font-hanken-grotesk)]",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
} 