'use client'

import { ReactNode } from 'react'

import { ThemeProvider } from '@/components/theme/theme-provider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      storageKey="aviva-theme"
      enableSystem
    >
      {children}
    </ThemeProvider>
  )
}
