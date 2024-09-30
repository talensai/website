'use client'

import React from 'react'
import Image from 'next/image'

const GlobeIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" viewBox="0 0 256 256">
  <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,8a91.48,91.48,0,0,1,52,16.15V74a4,4,0,0,1-1,2.61l-22.17,25.76a4,4,0,0,1-2.49,1.35L122.9,108a3.94,3.94,0,0,1-2.88-.72l-.16-.11L100.13,94.22A12,12,0,0,0,83.2,97.33l-21,31.3a11.93,11.93,0,0,0-2,6.6L60,171.46a4,4,0,0,1-1.8,3.33l-6.65,4.36A92,92,0,0,1,128,36ZM56.32,185.6l6.29-4.13a12,12,0,0,0,5.41-10l.21-36.23a4,4,0,0,1,.67-2.2l20.95-31.3a4,4,0,0,1,5.67-1l.15.11,19.74,12.91a12,12,0,0,0,8.56,2.11l31.47-4.26a12,12,0,0,0,7.49-4.06L185.1,81.81A12,12,0,0,0,188,74V58.31A91.91,91.91,0,0,1,213.5,162l-20.57-18.82a12,12,0,0,0-12.7-2.22l-30.45,12.66a12.06,12.06,0,0,0-7.27,9.33l-2.38,16.19A12,12,0,0,0,149,192.46l21.45,5.63a4,4,0,0,1,1.82,1l5.94,6A91.85,91.85,0,0,1,56.32,185.6Zm128.43,14.76-6.86-6.88a12,12,0,0,0-5.45-3.13L151,184.72a4,4,0,0,1-3-4.45l2.39-16.2a4,4,0,0,1,2.42-3.11l30.45-12.65a4,4,0,0,1,4.24.74L210,169.62A92.43,92.43,0,0,1,184.75,200.36Z" />
</svg>
)

const UsersIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" viewBox="0 0 256 256">
  <path d="M107.19,159a56,56,0,1,0-46.38,0A91.83,91.83,0,0,0,6.88,197.81a4,4,0,1,0,6.7,4.37,84,84,0,0,1,140.84,0,4,4,0,1,0,6.7-4.37A91.83,91.83,0,0,0,107.19,159ZM36,108a48,48,0,1,1,48,48A48.05,48.05,0,0,1,36,108Zm212,95.35a4,4,0,0,1-5.53-1.17A83.81,83.81,0,0,0,172,164a4,4,0,0,1,0-8,48,48,0,1,0-17.82-92.58,4,4,0,1,1-3-7.43,56,56,0,0,1,44,103,91.83,91.83,0,0,1,53.93,38.86A4,4,0,0,1,248,203.35Z" />
</svg>
)

const ChatIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" viewBox="0 0 256 256">
  <path d="M227.79,186.39a76,76,0,0,0-61-110.07A76,76,0,1,0,28.21,138.39L20.5,164.6a12,12,0,0,0,14.9,14.9l26.21-7.71a75.93,75.93,0,0,0,27.6,7.9,76,76,0,0,0,105.18,40.1l26.21,7.71a12,12,0,0,0,14.9-14.9ZM60.9,163.66l-27.76,8.17a4,4,0,0,1-5-5l8.17-27.76a4.07,4.07,0,0,0-.31-3A68,68,0,1,1,63.92,164,4.06,4.06,0,0,0,60.9,163.66Zm165.92,55.16a4,4,0,0,1-4,1l-27.76-8.17a4.07,4.07,0,0,0-3,.31A68,68,0,0,1,98,180a76,76,0,0,0,71.5-95.28A68,68,0,0,1,220,184.08a4.07,4.07,0,0,0-.31,3l8.17,27.76A4,4,0,0,1,226.82,218.82Z" />
</svg>
)

const CheckIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" viewBox="0 0 256 256">
  <path d="M223,105.58c-4-4.2-8.2-8.54-10-12.8-1.65-4-1.73-9.53-1.82-15.41-.14-9-.29-19.19-6.83-25.74s-16.74-6.69-25.74-6.83c-5.88-.09-11.43-.17-15.41-1.82-4.26-1.76-8.6-5.93-12.8-9.95-6.68-6.41-13.59-13-22.42-13s-15.74,6.62-22.42,13c-4.2,4-8.54,8.2-12.8,10-4,1.65-9.53,1.73-15.41,1.82-9,.14-19.19.29-25.74,6.83S44.94,68.37,44.8,77.37c-.09,5.88-.17,11.43-1.82,15.41-1.76,4.26-5.93,8.6-9.95,12.8-6.41,6.68-13,13.59-13,22.42s6.62,15.74,13,22.42c4,4.2,8.2,8.54,10,12.8,1.65,4,1.73,9.53,1.82,15.41.14,9,.29,19.19,6.83,25.74s16.74,6.69,25.74,6.83c5.88.09,11.43.17,15.41,1.82,4.26,1.76,8.6,5.93,12.8,9.95,6.68,6.41,13.59,13,22.42,13s15.74-6.62,22.42-13c4.2-4,8.54-8.2,12.8-10,4-1.65,9.53-1.73,15.41-1.82,9-.14,19.19-.29,25.74-6.83s6.69-16.74,6.83-25.74c.09-5.88.17-11.43,1.82-15.41,1.76-4.26,5.93-8.6,9.95-12.8,6.41-6.68,13-13.59,13-22.42S229.38,112.26,223,105.58Zm-5.78,39.3c-4.54,4.73-9.24,9.63-11.57,15.28-2.23,5.39-2.33,12-2.43,18.35-.12,8.2-.24,16-4.49,20.2s-12,4.37-20.2,4.49c-6.37.1-13,.2-18.35,2.43-5.65,2.33-10.55,7-15.28,11.57C139.09,222.75,133.62,228,128,228s-11.09-5.25-16.88-10.8c-4.73-4.54-9.63-9.24-15.28-11.57-5.39-2.23-12-2.33-18.35-2.43-8.2-.12-15.95-.24-20.2-4.49s-4.37-12-4.49-20.2c-.1-6.37-.2-13-2.43-18.35-2.33-5.65-7-10.55-11.57-15.28C33.25,139.09,28,133.62,28,128s5.25-11.09,10.8-16.88c4.54-4.73,9.24-9.63,11.57-15.28,2.23-5.39,2.33-12,2.43-18.35.12-8.2.24-15.95,4.49-20.2s12-4.37,20.2-4.49c6.37-.1,13-.2,18.35-2.43,5.65-2.33,10.55-7,15.28-11.57C116.91,33.25,122.38,28,128,28s11.09,5.25,16.88,10.8c4.73,4.54,9.63,9.24,15.28,11.57,5.39,2.23,12,2.33,18.35,2.43,8.2.12,16,.24,20.2,4.49s4.37,12,4.49,20.2c.1,6.37.2,13,2.43,18.35,2.33,5.65,7,10.55,11.57,15.28,5.55,5.79,10.8,11.26,10.8,16.88S222.75,139.09,217.2,144.88Zm-46.37-43.71a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17Z" />
</svg>
)

const CardFeature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
<div className="bg-secondary p-5 rounded-[20px] flex flex-col justify-between h-full">
  <div>
    <h3 className="text-md font-semibold">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
  <div className="w-[72px] h-[72px] text-primary self-end">
    {icon}
  </div>
</div>
)

const CardImage = ({ src, alt }: { src: string; alt: string }) => (
<div className="rounded-[20px] overflow-hidden h-full relative">
  <div className="aspect-square lg:aspect-[2/3] xl:aspect-square w-full h-full">
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{ objectFit: 'cover', objectPosition: 'center' }}
    />
  </div>
</div>
)

export default function Mission() {
const features = [
  {
    icon: <GlobeIcon />,
    title: "Maiores qui rerum",
    description: "Fugiat ullam dolorum consectetur dignissimos quaerat optio. Sapiente inventore dignissimos quod nihil ad molestiae corporis sint."
  },
  {
    icon: <UsersIcon />,
    title: "Autem totam quisquam",
    description: "Itaque cumque qui numquam unde eveniet alias explicabo ipsam. Ea sit nobis dolorem. Rem perspiciatis velit."
  },
  {
    icon: <ChatIcon />,
    title: "Dolore est alias",
    description: "Accusantium rerum quia omnis dolorum ab odio eius dignissimos. Quae consequatur animi iusto. Rem culpa voluptas et."
  },
  {
    icon: <CheckIcon />,
    title: "Est vitae qui",
    description: "Quibusdam ducimus consequatur iusto aliquid eum repellendus dolorem."
  }
]

return (
  <section className="py-12 px-4 md:px-6 lg:px-8 bg-background">
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
            src="https://images.unsplash.com/photo-1511376979163-f804dff7ad7b"
            alt="People working together in an office" 
          />
        </div>
      </div>
    </div>
  </section>
)
}