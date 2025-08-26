'use client'

import React, { useCallback } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { getQueryClient } from '@/lib/queryClient'
import { useRouter } from 'next/navigation'

export function TanstackQueryClientProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  
  const handleRedirect = useCallback((path: string) => {
    router.push(path)
  }, [router])

  const queryClient = getQueryClient(handleRedirect);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        {children}
      </ReactQueryStreamedHydration>
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  )
} 