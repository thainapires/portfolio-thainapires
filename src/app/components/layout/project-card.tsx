'use client';

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  /* techStack: string[] */
  link: string;
  github_link: string;
}

export function ProjectCard({name, description, image, link, github_link}: ProjectCardProps) {
  return (
    <div className="bg-card max-w-sm rounded-4xl border border-gray-700">
      <div className="flex flex-col h-full p-8 justify-between">
        <div className="flex flex-col mb-16">
          <Image src={image} width="500" height="500" alt="" className="pb-4 rounded-md"/>
          <div className="text-xl font-bold mb-2">{name}</div>
          <p className="text-[#808080]">{description}</p>
        </div>
        <div className={`flex ${link ? 'justify-between' : 'justify-end'}`}>
          {link && (
            <a href={link} target="_blank" className="flex gap-1 items-center cursor-pointer">
              <span >Visit Site</span>
              <ArrowRight className="w-5 h-5"/>
            </a>
          )}
          <a href={github_link} target="_blank" className="flex gap-2 items-center cursor-pointer">
            <FaGithub className="w-4 h-4"/>
            <span>View Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}