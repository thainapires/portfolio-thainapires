'use client';

import { aboutMeTopics } from "@/app/data/about-me-data";
import { AboutMeCard } from "./about-me-card";

{/* <div className="grid grid-cols-2 mx-6 lg:mx-0 mt-10 gap-5 md:gap-4">
 */}
export function AboutMeCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-10 mx-10 xl:mx-0 ">
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