import Image from "next/image";
import { ProjectSummary } from "@/types";

type Props = {
  project: ProjectSummary;
  className?: string;
};

export function ProjectCard({ project, className }: Props) {
  return (
    <div
      className={`
        grid gap-4
        ${className}
      `}
    >
      <div
        className={`group
          bg-dark-secondary/5
          rounded-2xl overflow-hidden
          shadow hover:shadow-lg shadow-dark-surface/50
          transition-shadow ease-out duration-300`}
      >
        <Image
          src={project.coverImage.url}
          alt={`${project.title} image`}
          width={500}
          height={40}
          className="group-hover:scale-109 object-cover object-top w-full h-auto rounded-2xl aspect-video transition ease-out duration-300"
        />
      </div>

      <div className="flex items-center justify-between">
        <h3>{project.title}</h3>
        <button>{"->"}</button>
      </div>
    </div>
  );
}
