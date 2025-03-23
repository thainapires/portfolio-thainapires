'use client';

import { aboutMeTopics } from "@/app/database/about-me-data";
import { AboutMeCard } from "./about-me-card";

export function AboutMeCards() {
  return (
    <div className="grid grid-cols-2 mx-6 lg:mx-0 mt-10 gap-5 md:gap-4">
        {aboutMeTopics.map((topic) => (
          <AboutMeCard
            key={topic.id}
            name={topic.name}
            description={topic.description}
            image={topic.image} 
          />
        ))}
    </div>
  );
}