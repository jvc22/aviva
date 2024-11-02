import Image from 'next/image'

import rightHillImg from '../../../public/assets/landing-page/right-hill.svg'

export function ThirdCard() {
  return (
    <div className="mx-auto flex h-[480px] w-full max-w-[440px] flex-col overflow-hidden rounded-md border border-foreground/15 backdrop-blur-md">
      <header className="space-y-2 px-6 py-6">
        <span className="text-sm font-light leading-3 text-foreground/40">
          Tiago 1:22
        </span>

        <p className="text-lg font-medium leading-4 text-foreground">
          &ldquo;E sede cumpridores da palavra,
        </p>

        <p className="text-sm font-light text-foreground/50">
          e não somente ouvintes, enganando-vos a vós mesmos.&rdquo;
        </p>
      </header>

      <div className="mt-auto w-[440px]">
        <Image
          src={rightHillImg}
          width={1000}
          height={137}
          alt=""
          className="invert dark:filter-none"
        />
      </div>
    </div>
  )
}
