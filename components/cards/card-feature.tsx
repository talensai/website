import React from 'react';

const CardFeature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-secondary p-5 rounded-[20px] flex flex-col justify-between h-full">
    <div>
      <h3 className="text-md font-semibold">{title}</h3>
      <p className="text-foreground">{description}</p>
    </div>
    <div className="w-[72px] h-[72px] text-foreground self-end">
      {icon}
    </div>
  </div>
);

export default CardFeature;