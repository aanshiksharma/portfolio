import SkillsData from "./SkillsSection/SkillsData";

function SkillsSection() {
  return (
    <section id="skills" className="relative bg-dark-background">
      <div className="absolute inset-0 grid items-center justify-center">
        <h2 className="uppercase bg-linear-to-b from-dark-foreground/45 to-dark-foreground/5 bg-clip-text text-transparent text-center text-[10vw] font-semibold">
          My tech stack
        </h2>
      </div>

      <SkillsData />
    </section>
  );
}

export default SkillsSection;
