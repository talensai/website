'use client'

import React from 'react'

const CardNumber = ({ number, title, description }: { number:  string; title: string; description: string }) => (
    <div className='lg:aspect-square relative'>
      <div className='lg:absolute lg:inset-0 flex flex-col' >
        <p className='font-serif text-8xl xl:text-9xl'>{number}.</p>
        <h3 className="text-md font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </div> 
  );




export default function HowItWorks() {

return (
  <section className="pb-12 px-1 sm:px-4 md:px-6 lg:px-8 bg-background">
    <div className="max-w-[100rem] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  h-full bg-foreground text-background rounded-[20px] py-5">
        
        <div className="h-full lg:row-span-2 xl:row-span-1 px-5">
            <div className='aspect-video lg:aspect-square relative'>
                <div className='absolute top-0 ' >
                    <h2 className="text-4xl sm:text-5xl  font-serif">How it works</h2>
                </div>
            </div>
        </div>
        <div className="h-full sm:order-3 lg:order-2 xl:order-last px-5 sm:border-l  border-background/[.2]  xl:border-l-0 after:block after:my-4 after:border-b after:border-background/[.2]  xl:after:hidden">
            <CardNumber 
                number="1" 
                title="Nihil sit dolores" 
                description="Et voluptas eum sunt soluta unde. Totam eaque ut nostrum voluptatem ea vitae. Quod excepturi est voluptas odio nemo eum occaecati." 
            />  
        </div>
        <div className="h-full sm:order-2 lg:order-3 sm:row-span-2  lg:row-span-1 xl:row-span-2 px-5 sm:border-l border-background/[.2]  after:block after:my-4 after:border-b after:border-background/[.2]  xl:after:hidden flex flex-col justify-end">
            <CardNumber 
                number="2" 
                title="Provident quisquam cupiditate" 
                description="Fugit repellat odio in consequuntur commodi labore assumenda tenetur. Quo commodi aliquam quia." 
            />         
        </div>
        <div className="h-full sm:order-4 xl:row-span-2 px-5 sm:border-l border-background/[.2]  after:block after:my-4 after:border-b after:border-background/[.2]  sm:after:hidden flex flex-col justify-end">
            <CardNumber 
                number="3" 
                title="Eum reiciendis dolores" 
                description="Sit optio est. A molestiae sapiente et. Veniam libero quae non aut ea quibusdam molestiae fugiat. Ab reprehenderit inventore quia dolor consectetur eaque. " 
            />  
        </div>
        <div className="h-full sm:order-5 xl:row-span-2 px-5 sm:border-l border-background/[.2]  flex flex-col justify-end">
            <CardNumber 
                number="4" 
                title="Porro est odio" 
                description="Beatae eos quidem numquam repellat porro nisi. Quis rem autem voluptatem quae odio molestiae. " 
            />  
        </div>

      </div>
    </div>
  </section>
)
}