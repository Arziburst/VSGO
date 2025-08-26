"use client";

import React, { forwardRef } from 'react';
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectOption {
  value: string;
  label: string;
}

interface FormSelectProps extends Omit<React.ComponentPropsWithoutRef<typeof Select>, 'onValueChange'> {
  options: SelectOption[];
  placeholder?: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (...event: any[]) => void;
}

export const FormSelect = forwardRef<HTMLButtonElement, FormSelectProps>(
  ({ options, placeholder = "Select an option", className, onChange, ...props }, ref) => {
    const handleValueChange = (value: string) => {
      if (onChange) {
        onChange(value);
      }
    };

    return (
      <Select onValueChange={handleValueChange} {...props}>
        <SelectTrigger
          ref={ref}
          className={cn(
            "px-6 w-full h-16 bg-card dark:bg-secondary rounded-2xl border focus:border-primary dark:focus:border-primary focus:outline-none shadow-sm font-[family-name:var(--font-hanken-grotesk)]",
            className
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }
);

FormSelect.displayName = "FormSelect"; 