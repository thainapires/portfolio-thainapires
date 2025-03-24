'use client';

import { useQuery } from "@tanstack/react-query";
import { SkillCard } from "../../components/cards/skill-card";
import { PageContainer } from "../../components/layout/page-container";

const fetchSkills = async (): Promise<Skill[]> => {
  const res = await fetch("/api/skills");
  if (!res.ok) throw new Error("Failed to fetch skills");
  return res.json();
};

export default function Skills() {

  const { data: skills, error: skillsError, isLoading: isLoadingSkills } = useQuery<Skill[]>({
    queryKey: ["skills"],
    queryFn: fetchSkills,
    staleTime: 5 * 60 * 1000, 
    gcTime: 5 * 60 * 1000,  
  });

  if (skillsError) {
    return (
      <PageContainer
        title="Skills & more"
        subtitle="Technologies I Use and Explore, Tools and Devices I Rely On"
      >
        <div className="text-red-500 text-center">Failed to load skills: {skillsError.message}</div>
      </PageContainer>
    );
  }
  
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
            (skills ?? []).map((skill: Skill) => (
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
