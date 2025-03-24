import { SkillCard } from "../components/cards/skill-card";
import { PageContainer } from "../components/layout/page-container";
import { skills } from "../data/skills.data";

export default function Skills() {
  return (
    <PageContainer
      title="Skills & more"
      subtitle="Technologies I Use and Explore, Tools and Devices I Rely On"
    >
      <h2 className="text-5xl font-semibold">Development</h2>
      <div className="flex justify-center bg-muted-background rounded-xl mt-10 p-2">
        <div className="grid grid-cols-6 gap-6">
          {skills.map((skill) => (
              <SkillCard 
                key={skill.id}
                name={skill.name}
                type={skill.type}
                src={skill.src}
              />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
