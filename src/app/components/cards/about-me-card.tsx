'use client';

import Image from "next/image";



interface AboutMeCardProps {
  name: string;
  description: string;
  image: string;
}

export function AboutMeCard({name, description, image}: AboutMeCardProps) {
  return (
      <div className="group flex flex-col items-center justify-between overflow-hidden rounded-3xl border-[1px] pt-16 transition dark:border-transparent bg-card">
        <div>
          <div className="text-center text-xl md:text-4xl font-bold dark:text-white">{name}</div>
          <p className="text-xs md:text-md lg:text-base mt-2 text-center text-gray-400">{description}</p>
        </div>
        <Image
          src={image}
          alt={name}
          width="504"
          height="365"
          className="transition duration-500 ease-out origin-center scale-105 group-hover:scale-115" />
      </div>
  );
}