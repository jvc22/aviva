import { GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

import { Button } from '../ui/button'
import NavLink from './nav-link'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-8 px-8 py-4 backdrop-blur-sm">
      <Image
        src="/logo.svg"
        width={92.75}
        height={16}
        alt="Logo da Aviva"
        className="invert dark:filter-none"
      />

      <nav className="flex items-center gap-6 max-sm:hidden">
        <NavLink href="#start">Início</NavLink>

        <NavLink href="#platform">Plataforma</NavLink>

        <NavLink href="#download">Download</NavLink>
      </nav>

      <div className="ml-auto flex items-center gap-2 text-sm text-foreground">
        <Button size="sm" variant="outline" className="max-md:hidden">
          Registrar
        </Button>

        <Button size="sm" variant="secondary">
          Acessar
        </Button>

        <div>
          <Button size="sm" variant="ghost">
            <GitHubLogoIcon />
          </Button>

          <Button size="sm" variant="ghost">
            <InstagramLogoIcon />
          </Button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
