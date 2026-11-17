import { useHeadingAnimation, ProjectCard } from "@/features/projects";
import { ProjectSummary } from "@/types";
import Link from "next/link";

type Props = { projects: ProjectSummary[] };

export function ProjectsSection({ projects }: Props) {
  // useHeadingAnimation();

  return (
    <section
      id="projects"
      className="bg-dark-background text-dark-foreground flex flex-col gap-18 py-18 px-4 lg:px-6"
    >
      <h2 className="text-6xl font-display">Selected Work</h2>

      <div
        id="projectsList"
        className="relative z-1 grid lg:grid-cols-2 items-end content-end gap-x-6 gap-y-18 lg:gap-y-50 overflow-hidden"
      >
        {projects
          .filter((project) => project.featured)
          .map((project, index) => (
            <div
              className={`flex w-full ${(index + 1) % 3 === 0 ? "lg:col-span-2 lg:justify-center" : "lg:justify-end"}`}
            >
              <ProjectCard
                key={index}
                project={project}
                className={`flex-1 ${(index + 1) % 2 === 0 ? "lg:translate-y-10 lg:max-w-2/3" : ""} ${(index + 1) % 3 === 0 ? "lg:max-w-1/2" : ""}`}
              />
            </div>
          ))}
      </div>

      <Link
        href={"/work"}
        className="bg-background text-foreground px-9 py-3 w-fit self-center rounded-2xl"
      >
        Explore all works {"->"}
      </Link>
    </section>
  );
}
