import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function SignInFormSkeleton() {
  return (
    <div className="w-full space-y-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-14 w-full rounded-2xl" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-14 w-full rounded-2xl" />
        </div>

        <div className="flex justify-end">
          <Skeleton className="h-5 w-32" />
        </div>
      </div>

      <Skeleton className="h-14 w-full rounded-2xl mb-4" />
    </div>
  );
} 