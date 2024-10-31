import { GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

import { Button } from '../ui/button'
import NavLink from './nav-link'

export function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-8 px-8 py-4 backdrop-blur-sm">
      <Image src="/logo.svg" width={92.75} height={16} alt="Logo da Aviva" />

      <nav className="flex items-center gap-6 max-sm:hidden">
        <NavLink href="#start">Início</NavLink>

        <NavLink href="#platform">Plataforma</NavLink>

        <NavLink href="#download">Download</NavLink>
      </nav>

      <div className="ml-auto flex items-center gap-2 text-sm">
        <Button size="sm" variant="outline" className="dark max-md:hidden">
          Registrar
        </Button>

        <Button size="sm" variant="secondary" className="dark">
          Acessar
        </Button>

        <div>
          <Button size="sm" variant="ghost" className="dark">
            <GitHubLogoIcon />
          </Button>

          <Button size="sm" variant="ghost" className="dark">
            <InstagramLogoIcon />
          </Button>
        </div>
      </div>
    </header>
  )
}
