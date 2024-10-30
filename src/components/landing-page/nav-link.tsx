'use client'

import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

import { useSectionObserver } from '@/hooks/use-section-observer'
import { cn } from '@/lib/utils'

interface NavLinkProps extends LinkProps {
  children: ReactNode
  disabled?: boolean
}

export default function NavLink(props: NavLinkProps) {
  const sectionIds = ['start', 'platform', 'download']
  const activeSection = useSectionObserver(sectionIds)

  const isActive = activeSection && `#${activeSection}` === props.href

  return (
    <Link
      {...props}
      data-current={isActive}
      className={cn(
        'flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-all ease-out hover:text-zinc-200 data-[current=true]:text-zinc-200',
        props.disabled && 'pointer-events-none opacity-50',
      )}
    >
      {props.children}
    </Link>
  )
}
