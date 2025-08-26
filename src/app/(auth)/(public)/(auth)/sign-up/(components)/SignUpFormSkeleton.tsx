import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function SignUpFormSkeleton() {
  return (
    <div className="w-full space-y-4">
      <div>
        <Skeleton className="h-14 w-full rounded-2xl" />
      </div>
      <div>
        <Skeleton className="h-14 w-full rounded-2xl" />
      </div>
      <div>
        <Skeleton className="h-14 w-full rounded-2xl" />
      </div>
      <div>
        <Skeleton className="h-14 w-full rounded-2xl" />
      </div>
      <div>
        <Skeleton className="h-14 w-full rounded-2xl" />
      </div>
    </div>
  );
} 