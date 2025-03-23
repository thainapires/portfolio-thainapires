'use client';

import Image from "next/image";


interface AboutMeCardProps {
  name: string;
  description: string;
  image: string;
}

export function AboutMeCard({name, description, image}: AboutMeCardProps) {
  return (
/*     <div className="bg-card max-w-sm rounded-4xl content-end justify-between">
 */
    <div className="flex flex-col items-center justify-between overflow-hidden rounded-4xl bg-card max-w-sm">
        <div className="flex flex-col w-full h-full justify-center items-center py-6">
            <div className="text-xl md:text-4xl text-center font-bold">{name}</div>
            <p className="text-xs md:text-md lg:text-base mt-2 text-center text-[#808080] max-w-4/5">{description}</p>
        </div>
        <Image 
            src={image} 
            width="504" 
            height="365" 
            alt="" 
            className="rounded-b-4xl"
        />
    </div>
  );
}