import React, { ComponentProps, ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { tv } from 'tailwind-variants'
import { FiAward, FiGithub } from 'react-icons/fi'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

export function Footer() {
  const Info = ({ children, className, ...props }: ComponentProps<'a'>) => {
    const style = tv({
      base: /*tw:*/ 'flex items-center gap-2 text-xl sm:text-lg underline-offset-4 hover:underline w-full'
    })
    return (
      <a className={style(className)} target="_blank" {...props}>
        {children}
      </a>
    )
  }

  const Section = ({ children }: { children: ReactNode }) => (
    <section className="flex flex-col gap-2 sm:gap-0">{children}</section>
  )

  return (
    <footer className="flex flex-wrap flex-col sm:flex-row items-center justify-center mt-28 p-14 gap-10 md:gap-14 bg-white/5 backdrop-blur-sm">
      <div className="w-14 rounded-2xl overflow-hidden shadow-lg">
        <Link href="/">
          <Image
            src="/icons/icon-192x192.png"
            width={192}
            height={192}
            alt="Noisekun"
            className="cursor-pointer"
          />
        </Link>
      </div>
      <Section>
        <Info
          href="https://github.com/mateusfg7/Noisekun/blob/master/LICENSE"
          className="cursor-pointer"
        >
          <AiOutlineCopyrightCircle /> MIT License
        </Info>
        <Info href="https://github.com/mateusfg7">
          by <span className="font-bold">mateusfg7</span>
        </Info>
      </Section>
      <Section>
        <Info href="https://github.com/mateusfg7/Noisekun">
          <FiGithub /> Source
        </Info>

        <Info href="https://github.com/mateusfg7/Noisekun/#credits">
          <FiAward /> Credits
        </Info>
      </Section>
    </footer>
  )
}
