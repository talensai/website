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
  <section id="how-it-works" className=" px-1 sm:px-4 md:px-6 lg:px-8 bg-background">
    <div className="max-w-[100rem] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  h-full bg-foreground text-muted rounded-[20px] py-5">
        
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
                title="Sign Up and Referral" 
                description="Candidates join through our referral program, complete a brief pre-screening form, and get scheduled for an AI interview." 
            />  
        </div>
        <div className="h-full sm:order-2 lg:order-3 sm:row-span-2  lg:row-span-1 xl:row-span-2 px-5 sm:border-l border-background/[.2]  after:block after:my-4 after:border-b after:border-background/[.2]  xl:after:hidden flex flex-col justify-end">
            <CardNumber 
                number="2" 
                title="AI Interview Process" 
                description="Participate in a 30-minute AI-powered interview that evaluates key soft skills through scenario-based questions and simulations." 
            />         
        </div>
        <div className="h-full sm:order-4 xl:row-span-2 px-5 sm:border-l border-background/[.2]  after:block after:my-4 after:border-b after:border-background/[.2]  sm:after:hidden flex flex-col justify-end">
            <CardNumber 
                number="3" 
                title="Skills Assessment" 
                description="Receive detailed feedback on soft skills, including problem-solving, communication, adaptability, and areas for improvement." 
            />  
        </div>
        <div className="h-full sm:order-5 xl:row-span-2 px-5 sm:border-l border-background/[.2]  flex flex-col justify-end">
            <CardNumber 
                number="4" 
                title="Employer Connection" 
                description="Qualified candidates get connected with potential employers who can review their skill assessments and interview performance." 
            />  
        </div>

      </div>
    </div>
  </section>
)
}