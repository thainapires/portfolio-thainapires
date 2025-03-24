import { PageContainer } from "../../components/layout/page-container";

export default function AboutMe() {
  return (
    <PageContainer
      title="A little bit more about me"
      subtitle="Lorem ipsum lorem impsum lorem"
    >
      <div className="pb-12">
        <div className="font-bold text-xl pb-5">Who I am</div>
        <div className="text-foreground/80">
          I'm Thainá (Pronounced ‘Tie-nah’, like ‘tie’ + ‘nah’ from banana), a Full Stack Web Developer who believes in the perfect blend of code and creativity. I'm based in Rio de Janeiro, Brazil 🇧🇷
        </div>
      </div>

      <div className="pb-12">
        <div className="font-bold text-xl pb-5">What I do</div>
        <div className="text-foreground/80">
          Currently I'm working as a Full Stack Developer at @Rede Parcerias, a company that makes advantages clubs for corporate clients.
        </div>
      </div>
    </PageContainer>
  );
}
