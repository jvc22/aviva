import Image from 'next/image'

import leftHillImg from '../../../public/assets/landing-page/left-hill.svg'

export function FirstCard() {
  return (
    <div className="mx-auto flex h-[480px] w-full max-w-[440px] flex-col justify-start overflow-hidden rounded-md border border-zinc-400/25 backdrop-blur-md">
      <header className="space-y-2 px-6 pt-6">
        <span className="text-sm font-light leading-3 text-zinc-500">
          João 1:1
        </span>

        <p className="text-lg font-medium leading-4 text-white">
          &ldquo;No princípio era o Verbo,
        </p>

        <p className="text-sm font-light text-zinc-400">
          e o Verbo estava com Deus, e o Verbo era Deus.&rdquo;
        </p>
      </header>

      <div className="mt-auto w-[440px]">
        <Image src={leftHillImg} width={600} height={137} alt="" />
      </div>
    </div>
  )
}
