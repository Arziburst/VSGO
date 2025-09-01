"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface SidebarSearchContextValue {
  query: string;
  setQuery: (next: string) => void;
  clear: () => void;
}

const SidebarSearchContext = createContext<
  SidebarSearchContextValue | undefined
>(undefined);

export function SidebarSearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [query, setQueryState] = useState("");

  const setQuery = useCallback((next: string) => {
    setQueryState(next);
  }, []);

  const clear = useCallback(() => setQueryState(""), []);

  const value = useMemo(
    () => ({ query, setQuery, clear }),
    [query, setQuery, clear]
  );

  return (
    <SidebarSearchContext.Provider value={value}>
      {children}
    </SidebarSearchContext.Provider>
  );
}

export function useSidebarSearch() {
  const ctx = useContext(SidebarSearchContext);
  if (!ctx)
    throw new Error(
      "useSidebarSearch must be used within SidebarSearchProvider"
    );
  return ctx;
}
