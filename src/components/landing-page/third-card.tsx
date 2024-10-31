import Image from 'next/image'

import rightHillImg from '../../../public/assets/landing-page/right-hill.svg'

export function ThirdCard() {
  return (
    <div className="mx-auto flex h-[480px] w-full max-w-[440px] flex-col overflow-hidden rounded-md border border-zinc-400/25 backdrop-blur-md">
      <header className="space-y-2 px-6 py-6">
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
        <Image src={rightHillImg} width={1000} height={137} alt="" />
      </div>
    </div>
  )
}
