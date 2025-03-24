'use client';

import { useQuery } from "@tanstack/react-query";
import { SkillCard } from "../components/cards/skill-card";
import { PageContainer } from "../components/layout/page-container";

const fetchSkills = async () => {
  const res = await fetch("/api/skills");
  if (!res.ok) throw new Error("Failed to fetch skills");
  return res.json();
};

export default function Skills() {

  const { data: skills, error: skillsError, isLoading: isLoadingSkills } = useQuery({
    queryKey: ["skills"],
    queryFn: fetchSkills,
    staleTime: 5 * 60 * 1000, 
    gcTime: 5 * 60 * 1000,  
  });
  
  return (
    <PageContainer
      title="Skills & more"
      subtitle="Technologies I Use and Explore, Tools and Devices I Rely On"
    >
      <h2 className="text-5xl font-semibold">Development</h2>
      <div className="flex justify-center bg-muted-background rounded-xl mt-10 p-2">
        <div className="grid grid-cols-6 gap-6">
          { isLoadingSkills ? (
            <div>Loading Skills</div>
          ) : (
            skills.map((skill: { id: string; logo_url: string; name: string, type: string }) => (
              <SkillCard 
                key={skill.id}
                name={skill.name}
                type={skill.type}
                logo_url={skill.logo_url}
              />
            ))
          )}
        </div>
      </div>
    </PageContainer>
  );
}
