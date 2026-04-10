import Image from "next/image";
import { useRef } from "react";

import { useProjectCardAnimation } from "@/app/hooks/projectAnimations";

function ProjectCardCover({ project }) {
  const projectCoverRef = useRef();

  useProjectCardAnimation(projectCoverRef);

  return (
    <div
      ref={projectCoverRef}
      className="relative lg:w-[calc(100vw-6rem)] w-[calc(100vw-3rem)] aspect-video lg:h-[calc(100vh-5rem)] mx-auto rounded-3xl overflow-hidden shadow-lg shadow-dark-foreground/3"
    >
      <Image
        src={project.coverImage.url}
        alt="project-image-1"
        width={500}
        height={40}
        className="object-cover object-top w-full h-full"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-dark-background/30">
        <h4 className="text-9xl text-dark-primary font-bold font-serif">
          {project.title}
        </h4>
      </div>
    </div>
  );
}

export default ProjectCardCover;
