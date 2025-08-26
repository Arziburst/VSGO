"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FormLinkProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function FormLink({
  children,
  onClick,
  className,
}: FormLinkProps) {
  return (
    <Button 
      type="button" 
      variant="link" 
      onClick={onClick}
      className={cn(
        "text-primary hover:text-primary/80 p-0 h-auto font-[family-name:var(--font-hanken-grotesk)]",
        className
      )}
    >
      {children}
    </Button>
  );
} 