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
    icon: <Chat />,
    title: "Focus on the skills of the future",
    description: "Traditional developer roles are becoming obsolete. To spot the talent with the skills to excel in the post-ai world, we are focusing on comprehensive soft skill assessments."
  },
  {
    icon: <Globe />,
    title: `Uncovering "Dark Talent"`,
    description: "With remote work now an established practice, exceptional talent is now accessible globally. We identify outstanding undervalued individuals from emerging markets and around the globe."
  },
  {
    icon: <Users />,
    title: "AI-Powered Scale",
    description: "Through AI-driven automation, we can now assess candidates at unprecedented scale, enabling consistent mass talent evaluation across all corners of the globe."
  },
  {
    icon: <Check />,
    title: "Meaningful Matches",
    description: "Create lasting connections between global employers and exceptional talent through deep skill insights and data-driven matching, ensuring both parties find their ideal fit."
  }
]

return (
  <section id="mission" className="pb-1 px-1 sm:px-4 md:px-6 lg:px-8 bg-background">
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