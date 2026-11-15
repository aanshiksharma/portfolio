import { SkillsData } from "@/features/home";
import { Skill, Category } from "@/types";

type Props = { skills: Skill[]; categories: Category[] };

export function SkillsSection({ skills, categories }: Props) {
  return (
    <section
      id="skills"
      className="relative bg-dark-background px-4 py-10 flex items-center justify-center min-h-screen"
    >
      <div className="absolute inset-0 grid items-center justify-center">
        <h2 className="uppercase bg-linear-to-b from-dark-foreground/45 to-dark-foreground/5 bg-clip-text text-transparent text-center font-display text-[25vw] md:text-[15vw] font-semibold">
          My tech stack
        </h2>
      </div>

      <SkillsData skills={skills} categories={categories} />
    </section>
  );
}
