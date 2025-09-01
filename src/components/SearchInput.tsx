import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, X } from "lucide-react";

interface SearchInputProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export function SearchInput({
  onSearch,
  placeholder = "Search the website...",
}: SearchInputProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [internal, setInternal] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch?.(query);
    }
  };

  const handleClear = () => {
    setQuery("");
    setInternal("");
    onSearch?.("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
    if (e.key === "Escape") {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setQuery(internal);
      onSearch?.(internal.trim());
    }, 200);
    return () => clearTimeout(id);
  }, [internal, onSearch]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`
    relative flex items-center transition-all duration-300 ease-in-out
    ${
      isFocused
        ? "transform scale-105 shadow-xl shadow-[color-mix(in_oklab,var(--brand-primary)_25%,transparent)]"
        : "shadow-lg shadow-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)] hover:shadow-xl hover:shadow-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]"
    }
  `}
      >
        {/* Search Icon */}
        <div className="absolute left-4 z-10">
          <Search
            className={`h-5 w-5 transition-colors duration-200 ${
              isFocused
                ? "text-[var(--brand-primary)]"
                : "text-gray-400 dark:text-gray-500"
            }`}
          />
        </div>

        {/* Input Field */}
        <Input
          value={internal}
          onChange={(e) => setInternal(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`
    w-full h-14 pl-12 pr-20 text-base
    bg-white dark:bg-gray-800/80
    border-2 border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] dark:border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)]
    backdrop-blur-sm
    rounded-2xl
    transition-all duration-300 ease-in-out
    placeholder:text-gray-400 dark:placeholder:text-gray-500
    focus:border-[color-mix(in_oklab,var(--brand-primary)_60%,transparent)] focus:ring-4 focus:ring-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)]
    hover:border-[color-mix(in_oklab,var(--brand-primary)_40%,transparent)]
    ${
      isFocused
        ? "bg-gradient-to-r from-white via-white to-[color-mix(in_oklab,var(--brand-primary)_5%,transparent)] dark:from-gray-800/90 dark:via-gray-800/90 dark:to-[color-mix(in_oklab,var(--brand-primary)_10%,transparent)]"
        : ""
    }
  `}
        />

        {/* Action Buttons */}
        <div className="absolute right-2 flex items-center gap-1">
          {query && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClear}
              className="h-8 w-8 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-full transition-all duration-200"
            >
              <X className="h-4 w-4" />
            </Button>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={handleSearch}
            disabled={!query.trim()}
            className={`
    h-10 w-10 rounded-xl transition-all duration-200
    ${
      query.trim()
        ? "bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] hover:from-[color-mix(in_oklab,var(--brand-primary)_90%,transparent)] hover:to-[color-mix(in_oklab,var(--brand-secondary)_90%,transparent)] text-white shadow-lg hover:shadow-xl transform hover:scale-105"
        : "text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700/50"
    }
  `}
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {/* Focus Ring Animation */}
        {isFocused && (
          <div className="absolute inset-0 rounded-2xl border-2 border-[color-mix(in_oklab,var(--brand-primary)_40%,transparent)] animate-pulse pointer-events-none" />
        )}
      </div>

      {/* Search Suggestions/Results Preview */}
      {isFocused && query.length > 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 animate-in fade-in-0 slide-in-from-top-2 duration-200">
          <div className="bg-white dark:bg-gray-800/95 backdrop-blur-md border border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] rounded-xl shadow-xl shadow-[color-mix(in_oklab,var(--brand-primary)_25%,transparent)] p-3 max-w-2xl mx-auto">
            <div className="space-y-2">
              {/* Quick Suggestions */}
              <div className="space-y-1">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--brand-primary-10)] dark:hover:bg-[var(--brand-primary-10)] cursor-pointer transition-all duration-200 hover:transform hover:translate-x-1">
                  <Search className="h-4 w-4 text-[var(--brand-primary)]" />
                  <div className="flex-1">
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Search: &quot;
                    </span>
                    <span className="text-sm text-[var(--brand-primary)] font-medium">
                      {query}
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      &quot; across the site
                    </span>
                  </div>
                </div>

                {/* Quick Action Suggestions */}
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer transition-all duration-200 hover:transform hover:translate-x-1">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)]" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Search in documents
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 cursor-pointer transition-all duration-200 hover:transform hover:translate-x-1">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Search members
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 cursor-pointer transition-all duration-200 hover:transform hover:translate-x-1">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Search contacts
                  </span>
                </div>
              </div>

              <div className="border-t border-[color-mix(in_oklab,var(--brand-primary)_20%,transparent)] pt-2">
                <p className="text-xs text-gray-500 dark:text-gray-400 px-2 flex items-center gap-2">
                  <span className="inline-block w-4 h-3 bg-gray-200 dark:bg-gray-600 rounded-sm text-xs flex items-center justify-center text-gray-600 dark:text-gray-400">
                    ↵
                  </span>
                  to search •
                  <span className="inline-block w-6 h-3 bg-gray-200 dark:bg-gray-600 rounded-sm text-xs flex items-center justify-center text-gray-600 dark:text-gray-400">
                    Esc
                  </span>
                  to close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
