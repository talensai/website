'use client'

import React from 'react'
import Symbol  from './brand/symbol' 
import Logotype  from './brand/logotype'
import Logo  from './brand/logo'

export default function Hero() {
  return (
    <section className="min-h-screen px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-[100rem] pt-4 md:pt-6 lg:pt-8 pb-11 mx-auto flex flex-col min-h-screen">
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
                <Logo />
              </div>
            </div>
            <div className="hidden md:block w-full max-w-2xl mt-auto">
              <Logotype />
            </div>
          </div>
          <div className="hidden md:block w-16 h-16 flex-shrink-0 md:ml-6 self-start">
            <Symbol />
          </div>
        </div>
      </div>
    </section>
  )
}