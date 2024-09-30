'use client'

import React from 'react'
import TalensSymbol  from './talens-symbol' 
import TalensLogotype  from './talens-logotype'
import TalensLogo  from './talens-logo'

export default function Hero() {
  return (
    <section className="min-h-screen bg-background">
      <div className="max-w-[100rem] mx-auto p-4 md:p-6 lg:p-8 flex flex-col min-h-screen">
        <div className="flex flex-col md:flex-row justify-between flex-grow">
          <div className="flex flex-col justify-between flex-grow">
            <div className="max-w-2xl">
              <p className="text-lg md:text-xl text-foreground">
                Rerum molestiae beatae quasi. Minima voluptatem maiores natus occaecati. Omnis accusamus non. Veniam
                necessitatibus est exercitationem distinctio minus est. Et quo vel qui voluptates molestiae sint quidem
                voluptatum sit.
              </p>
            </div>
            <div className="md:hidden flex items-center justify-center flex-grow">
              <div className="w-full max-w-md">
                <TalensLogo />
              </div>
            </div>
            <div className="hidden md:block w-full max-w-2xl mt-auto">
              <TalensLogotype />
            </div>
          </div>
          <div className="hidden md:block w-16 h-16 flex-shrink-0 md:ml-6 self-start">
            <TalensSymbol />
          </div>
        </div>
      </div>
    </section>
  )
}