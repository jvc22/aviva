import Image from 'next/image'

import crossImg from '../../../public/assets/landing-page/cross.svg'

export function SecondCard() {
  return (
    <div className="mx-auto flex h-[480px] w-full max-w-[440px] flex-col items-center overflow-hidden rounded-md border border-zinc-400/25 backdrop-blur-md">
      <div className="mt-24 w-[440px]">
        <Image src={crossImg} width={600} height={137} alt="" />
      </div>

      <footer className="mt-auto space-y-2 px-6 pb-6 text-center">
        <span className="text-sm font-light leading-3 text-zinc-500">
          Salmos 119:105
        </span>

        <p className="text-lg font-medium leading-4 text-white">
          &ldquo;Lâmpada para os meus pés
        </p>

        <p className="text-sm font-light text-zinc-400">
          é a tua palavra, e luz para o meu caminho.&rdquo;
        </p>
      </footer>
    </div>
  )
}
