import SkillsData from "./SkillsSection/SkillsData";

function SkillsSection() {
  return (
    <section id="skills" className="relative h-screen">
      <div className="h-full flex items-center justify-center">
        <h2 className="uppercase bg-linear-to-b from-dark-primary/45 to-dark-primary/5 bg-clip-text text-transparent text-[10rem] font-semibold">
          My tech stack
        </h2>
      </div>

      <SkillsData />
    </section>
  );
}

export default SkillsSection;
