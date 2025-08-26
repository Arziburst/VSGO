"use client";

import React from 'react';
import { cn } from "@/lib/utils";

interface FormErrorProps {
  message?: string;
  className?: string;
}

export function FormError({ message, className }: FormErrorProps) {
  if (!message) return null;
  
  return (
    <div 
      className={cn(
        "text-sm font-medium text-red-500 dark:text-red-400 mt-1", 
        className
      )}
    >
      {message}
    </div>
  );
}
