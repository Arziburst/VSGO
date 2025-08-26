"use client";

import * as React from "react";
import { Calendar as CalendarIcon, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = 1900; year <= currentYear + 10; year++) {
    years.push(year.toString());
  }
  return years.reverse();
};

const CustomMonthYearPickerContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    align?: "start" | "center" | "end";
    sideOffset?: number;
  }
>(({ className, align = "start", sideOffset = 4, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "absolute z-[9999] w-auto min-w-[320px] rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        align === "start" && "left-0",
        align === "center" && "left-1/2 -translate-x-1/2",
        align === "end" && "right-0",
        className
      )}
      style={{
        top: `calc(100% + ${sideOffset}px)`,
      }}
      {...props}
    />
  );
});
CustomMonthYearPickerContent.displayName = "CustomMonthYearPickerContent";

const parseMonthYear = (value: string) => {
  if (!value) return { month: "", year: "" };
  
  const parts = value.split(" ");
  if (parts.length !== 2) return { month: "", year: "" };
  
  const [monthName, year] = parts;
  const month = MONTHS.includes(monthName) ? monthName : "";
  
  return { month, year };
};

const formatMonthYear = (month: string, year: string) => {
  if (!month || !year) return "";
  return `${month} ${year}`;
};

type MonthYearPickerProps = {
  value?: string;
  onChange: (value: string | undefined) => void;
  disabled?: boolean;
  placeholder?: string;
  allowFutureDates?: boolean;
};

export const MonthYearPicker = ({ 
  value, 
  onChange, 
  disabled, 
  placeholder = "Pick month and year",
  allowFutureDates = false 
}: MonthYearPickerProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedMonth, setSelectedMonth] = React.useState("");
  const [selectedYear, setSelectedYear] = React.useState("");
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  const years = generateYears();
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  React.useEffect(() => {
    if (value) {
      const parsed = parseMonthYear(value);
      setSelectedMonth(parsed.month);
      setSelectedYear(parsed.year);
    } else {
      setSelectedMonth("");
      setSelectedYear("");
    }
  }, [value]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      
      if (containerRef.current && !containerRef.current.contains(target)) {
        const isSelectRelated = target.closest('[data-radix-popper-content-wrapper], [data-radix-select-content], [data-radix-select-viewport], [data-radix-select-item]');
        
        if (!isSelectRelated) {
          setIsOpen(false);
        }
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      const timeoutId = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscKey);
      }, 100);
      
      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscKey);
      };
    }
  }, [isOpen]);

  const isValidSelection = (month: string, year: string) => {
    if (!month || !year) return true;
    
    const monthIndex = MONTHS.indexOf(month);
    const yearNum = parseInt(year);
    
    if (!allowFutureDates) {
      if (yearNum > currentYear) return false;
      if (yearNum === currentYear && monthIndex > currentMonth) return false;
    }
    
    return true;
  };

  const handleMonthChange = (month: string) => {
    if (isValidSelection(month, selectedYear)) {
      setSelectedMonth(month);
      const newValue = formatMonthYear(month, selectedYear);
      onChange(newValue || undefined);
      if (month && selectedYear) {
        setIsOpen(false);
      }
    }
  };

  const handleYearChange = (year: string) => {
    if (isValidSelection(selectedMonth, year)) {
      setSelectedYear(year);
      const newValue = formatMonthYear(selectedMonth, year);
      onChange(newValue || undefined);
      if (selectedMonth && year) {
        setIsOpen(false);
      }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClear = () => {
    setSelectedMonth("");
    setSelectedYear("");
    onChange(undefined);
  };

  return (
    <div ref={containerRef} className="relative">
      <Button
        type="button"
        variant="outline"
        className={cn(
          "w-full justify-start text-left font-normal h-9 bg-card border border-border hover:bg-accent hover:text-accent-foreground focus:border-ring shadow-sm",
          !value && "text-muted-foreground"
        )}
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || (
          <span>{placeholder}</span>
        )}
        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
      </Button>
      
      {isOpen && (
        <CustomMonthYearPickerContent className="p-4 space-y-4">
          <div className="flex justify-end items-center mb-0">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="h-6 w-6 p-0 hover:bg-accent"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Month</label>
              <Select value={selectedMonth} onValueChange={handleMonthChange}>
                <SelectTrigger className="w-full max-h-9 min-w-[100px]">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  {MONTHS.map((month) => {
                    const isDisabled = !isValidSelection(month, selectedYear);
                    return (
                      <SelectItem 
                        key={month} 
                        value={month}
                        disabled={isDisabled}
                      >
                        {month}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Year</label>
              <Select value={selectedYear} onValueChange={handleYearChange}>
                <SelectTrigger className="w-full max-h-9">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => {
                    const isDisabled = !isValidSelection(selectedMonth, year);
                    return (
                      <SelectItem 
                        key={year} 
                        value={year}
                        disabled={isDisabled}
                      >
                        {year}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex justify-start">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleClear}
              disabled={!selectedMonth && !selectedYear}
            >
              Clear
            </Button>
          </div>
        </CustomMonthYearPickerContent>
      )}
    </div>
  );
}; 