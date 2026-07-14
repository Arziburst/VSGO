import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("space-y-4", className)}>{children}</div>;
}

export function PageHeading({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon?: LucideIcon;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <div className="flex flex-wrap items-center gap-2 flex-1 min-w-0">
        <h2
          className="flex items-center gap-2 text-xl font-black tracking-wide text-[var(--brand-primary)] uppercase md:text-2xl dark:text-white"
          style={{
            WebkitTextStroke: "0.5px currentColor",
            paintOrder: "stroke fill",
          }}
        >
          {Icon ? (
            <Icon className="h-6 w-6 shrink-0 md:h-7 md:w-7" strokeWidth={2.5} />
          ) : null}
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}

export function PageCard({
  children,
  className,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "soft";
}) {
  return (
    <div
      className={cn(
        "rounded-xl border shadow-sm overflow-hidden text-base md:text-lg leading-relaxed font-medium",
        tone === "soft"
          ? "border-[var(--brand-secondary)]/40 bg-[var(--nav-submenu)] dark:bg-[var(--nav-submenu)]/15 dark:border-[var(--nav-active)]/30"
          : "border-border bg-white dark:bg-gray-900",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ContentTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "text-lg font-black uppercase text-[var(--brand-primary)] md:text-xl",
        className,
      )}
      style={{
        WebkitTextStroke: "0.5px currentColor",
        paintOrder: "stroke fill",
      }}
    >
      {children}
    </h3>
  );
}

export function ContentSubtitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-base font-black text-[var(--brand-primary)] md:text-lg",
        className,
      )}
      style={{
        WebkitTextStroke: "0.35px currentColor",
        paintOrder: "stroke fill",
      }}
    >
      {children}
    </p>
  );
}

export function PageBadge({
  children,
  variant = "solid",
  className,
}: {
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium",
        variant === "solid"
          ? "bg-[var(--brand-surface)] text-white"
          : "border border-[var(--brand-primary)] text-[var(--brand-primary)] dark:border-gray-500 dark:text-gray-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
