import { ArrowRight } from 'lucide-react'

import { FirstCard } from '@/components/landing-page/cards/first-card'
import { SecondCard } from '@/components/landing-page/cards/second-card'
import { ThirdCard } from '@/components/landing-page/cards/third-card'
import { Header } from '@/components/landing-page/header'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <div className="pointer-events-none absolute -top-14 bottom-0 left-0 right-0 z-0 transform bg-landing-bg bg-top bg-no-repeat invert dark:filter-none lg:bg-contain" />

      <Header />

      <div
        id="start"
        className="z-10 flex flex-col items-center justify-between gap-16 px-8 pb-6 pt-8 lg:pt-16"
      >
        <div className="flex flex-col items-center gap-8">
          <div className="space-y-3 text-center">
            <h1 className="bg-radial-gradient from-foreground to-foreground/80 bg-clip-text text-5xl font-bold leading-none tracking-tight text-transparent lg:text-6xl">
              Conectando propósitos
            </h1>

            <p className="text-foreground/50">
              Aumente o seu foco em Deus através de reflexões, testemunhos e
              orações
            </p>
          </div>

          <Button className="flex items-center gap-1.5">
            Ver últimas atualizações
            <ArrowRight />
          </Button>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
          <FirstCard />

          <SecondCard />

          <ThirdCard />
        </div>
      </div>
    </div>
  )
}
