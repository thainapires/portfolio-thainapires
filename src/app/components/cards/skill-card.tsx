'use client';

import Image from "next/image";

interface SkillCardProps {
  name: string;
  type: string;
  logo_url: string;
}

export function SkillCard({name, type, logo_url }: SkillCardProps) {
  return (
    <div className="flex flex-col justify-between items-center bg-card rounded-2xl h-42 w-42 border border-gray-700 hover:bg-muted-background/80">
       <span className="mt-4 text-center font-semibold text-xl w-full">{name}</span>
        <Image 
            src={logo_url} 
            width={100} 
            height={100} 
            alt="" 
            className="w-12 h-12"
        />
        <span className="text-sm mb-4 text-center border border-gray-600 rounded-xl px-3 py-[3px]">{type}</span>
    </div>
  );
}