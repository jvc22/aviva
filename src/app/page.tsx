import { ArrowRight } from 'lucide-react'

import { Header } from '@/components/landing-page/header'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100">
      <div className="bg-landing-bg pointer-events-none absolute -top-12 bottom-0 left-0 right-0 z-0 transform bg-contain bg-no-repeat" />

      <Header />

      <div id="start" className="z-10 pt-16">
        <div className="flex flex-col items-center gap-8">
          <div className="space-y-3 text-center">
            <h1 className="bg-radial-gradient from-zinc-300 to-zinc-500 bg-clip-text text-6xl font-bold leading-[64px] tracking-tighter text-transparent">
              Conectando propósitos
            </h1>

            <p className="leading-4 text-zinc-500">
              Aumente o seu foco em Deus através de reflexões e testemunhos
            </p>
          </div>

          <Button className="dark flex items-center gap-1.5">
            Ver últimas atualizações
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
