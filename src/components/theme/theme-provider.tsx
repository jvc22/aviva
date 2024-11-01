'use client'

import dynamic from 'next/dynamic'
import { ThemeProviderProps } from 'next-themes/dist/types'
import * as React from 'react'
const NextThemesProvider = dynamic(
  () => import('next-themes').then((e) => e.ThemeProvider),
  {
    ssr: false,
  },
)

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}