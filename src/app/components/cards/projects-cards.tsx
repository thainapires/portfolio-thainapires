'use client';

import { useQuery } from "@tanstack/react-query";
import { ProjectCard } from "./project-card";

const fetchProjects = async () => {
  const res = await fetch("/api/projects?highlight=true");
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
};

export function ProjectsCards() {
  
  const { data: projects, error: projectsError, isLoading: isLoadingProjects } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000, 
    gcTime: 5 * 60 * 1000,  
  });

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-4 w-screen items-center lg:items-stretch lg:w-fit p-0 lg:p-6 xl:p-0">
      { isLoadingProjects ? (
        <div>Loading Projects</div>
      ) : (
        projects.map((project: { id: string; name: string; description: string, screenshot_url: string, link: string, github_link: string }) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            image={project.screenshot_url}
            link={project.link}
            github_link={project.github_link}  
          />
        ))
      )}
    </div>
  );
}