import React from 'react';
import Image from 'next/image';

const CardImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="rounded-[20px] overflow-hidden h-full relative">
    <div className="aspect-square lg:aspect-[2/3] xl:aspect-square w-full h-full bg-foreground">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
    </div>
  </div>
);

export default CardImage;