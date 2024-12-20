'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center p-0 min-[375px]:p-6">
      <div 
        className="bg-white/70 backdrop-blur-md w-full min-[375px]:w-auto min-[375px]:rounded-full px-1.5 py-1.5 min-[375px]:pl-6 min-[375px]:pr-1.5 flex flex-row items-center justify-center space-x-4 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.10)]"
      >
        <Link href="#brief" className="text-foreground hover:text-foreground/[.85] text-sm font-medium">
          Brief
        </Link>
        <Link href="#mission" className="text-foreground hover:text-foreground/[.85] text-sm font-medium">
          Mission
        </Link>
        <Link href="#how-it-works" className="text-foreground hover:text-foreground/[.85] text-sm font-medium whitespace-nowrap">
          How it works
        </Link>
        <a 
          href="https://forms.gle/rukk59uuqNAC6bzJ6" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-foreground hover:bg-primary/[.85] text-sm font-semibold whitespace-nowrap px-4 py-2.5 rounded-full transition-colors duration-300"
        >
          Join waitlist
        </a>
      </div>
    </nav>
  )
}