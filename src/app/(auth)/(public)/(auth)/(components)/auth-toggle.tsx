"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ROUTE_SIGN_IN, ROUTE_SIGN_UP } from "@/constants";

export function AuthToggle() {
  const pathname = usePathname();
  const isSignIn = pathname === ROUTE_SIGN_IN;

  const tabs = [
    { id: "sign-in", label: "Sign in", href: ROUTE_SIGN_IN },
    { id: "sign-up", label: "Sign up", href: ROUTE_SIGN_UP },
  ];

  const activeTabId = isSignIn ? "sign-in" : "sign-up";

  return (
    <Card className="relative flex flex-row w-full p-1 bg-muted dark:bg-secondary border-none mb-4 gap-1 rounded-2xl">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          href={tab.href}
          className={cn(
            "relative flex-1 py-3.5 text-center transition-colors duration-150 ease-in-out rounded-xl",
            activeTabId === tab.id
              ? "text-primary-foreground dark:text-primary-foreground"
              : "text-muted-foreground hover:text-primary dark:hover:text-primary"
          )}
          aria-current={activeTabId === tab.id ? "page" : undefined}
        >
          <span className="relative z-10">{tab.label}</span>
          {activeTabId === tab.id && (
            <motion.div
              layoutId="active-auth-pill"
              className="absolute inset-0 bg-primary dark:bg-primary rounded-xl"
              style={{ zIndex: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
            />
          )}
        </Link>
      ))}
    </Card>
  );
}
