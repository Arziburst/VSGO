"use client"

import React from "react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"
import { DEFAULT_THEME } from "@/constants"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = DEFAULT_THEME } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
