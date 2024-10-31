import { ArrowRight } from 'lucide-react'

import { FirstCard } from '@/components/landing-page/first-card'
import { Header } from '@/components/landing-page/header'
import { SecondCard } from '@/components/landing-page/second-card'
import { ThirdCard } from '@/components/landing-page/third-card'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none absolute -top-12 bottom-0 left-0 right-0 z-0 transform bg-landing-bg bg-no-repeat lg:bg-contain" />

      <Header />

      <div
        id="start"
        className="z-10 flex flex-1 flex-col items-center justify-between gap-16 pb-6 pt-8 lg:pt-16"
      >
        <div className="flex flex-col items-center gap-8 px-8">
          <div className="space-y-3 text-center">
            <h1 className="bg-radial-gradient from-zinc-300 to-zinc-500 bg-clip-text text-5xl font-bold leading-none tracking-tighter text-transparent md:text-6xl">
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

        <div className="grid w-full grid-cols-1 gap-8 px-8 lg:grid-cols-3">
          <FirstCard />

          <SecondCard />

          <ThirdCard />
        </div>
      </div>
    </div>
  )
}
