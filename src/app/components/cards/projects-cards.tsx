'use client';

import { projects } from "@/app/data/project-data";
import { ProjectCard } from "./project-card";

export function ProjectsCards() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-4 w-screen items-center lg:items-stretch lg:w-fit p-0 lg:p-6 xl:p-0">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            image={project.image}
            link={project.link}
            github_link={project.github_link}  
          />
        ))}
    </div>
  );
}