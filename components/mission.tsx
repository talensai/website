'use client'

import React from 'react'
import CardFeature from './cards/card-feature';
import CardImage from './cards/card-image';
import Globe from './icons/globe';
import Users from './icons/users';
import Chat from './icons/chat';
import Check from './icons/check';



export default function Mission() {
const features = [
  {
    icon: <Globe />,
    title: "Maiores qui rerum",
    description: "Fugiat ullam dolorum consectetur dignissimos quaerat optio. Sapiente inventore dignissimos quod nihil ad molestiae corporis sint."
  },
  {
    icon: <Users />,
    title: "Autem totam quisquam",
    description: "Itaque cumque qui numquam unde eveniet alias explicabo ipsam. Ea sit nobis dolorem. Rem perspiciatis velit."
  },
  {
    icon: <Chat />,
    title: "Dolore est alias",
    description: "Accusantium rerum quia omnis dolorum ab odio eius dignissimos. Quae consequatur animi iusto. Rem culpa voluptas et."
  },
  {
    icon: <Check />,
    title: "Est vitae qui",
    description: "Quibusdam ducimus consequatur iusto aliquid eum repellendus dolorem."
  }
]

return (
  <section className="pb-12 px-1 sm:px-4 md:px-6 lg:px-8 bg-background">
    <div className="max-w-[100rem] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 gap-1 h-full">
        <div className="lg:col-span-2 xl:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-1">
          {features.map((feature, index) => (
            <div key={index} className="h-full">
              <CardFeature 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            </div>
          ))}
        </div>
        <div className="order-first lg:order-last h-full">
          <CardImage 
            src="/images/office.jpg"
            alt="People working together in an office" 
          />
        </div>
      </div>
    </div>
  </section>
)
}