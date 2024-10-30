import Image from 'next/image'

import bgImg from '@/assets/landing-page/bg.svg'
import { Header } from '@/components/landing-page/header'

export default function LandingPage() {
  return (
    <div className="relative">
      <Image
        src={bgImg}
        alt=""
        className="absolute -top-6 left-1/2 -translate-x-1/2 transform"
      />

      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <Header />
      </div>
    </div>
  )
}
