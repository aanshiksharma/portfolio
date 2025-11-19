"use client";

import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BsArrowUp, BsArrowUpRight } from "react-icons/bs";
import { HiArrowUp } from "react-icons/hi";
gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project }) {
  const projectCoverRef = useRef();

  useGSAP(() => {
    gsap.from(projectCoverRef.current, {
      scale: 1.075,
      borderRadius: 0,
      scrollTrigger: {
        trigger: projectCoverRef.current,
        start: "top 55%",
        end: "bottom bottom",
        scrub: 2,
      },
    });
  }, []);

  return (
    <article className="px-12 flex flex-col">
      <div
        ref={projectCoverRef}
        className="relative w-full h-[calc(100vh-80px)] rounded-3xl overflow-hidden"
      >
        <Image
          src={project.coverImage.url}
          alt="project-image-1"
          width={500}
          height={40}
          className="object-cover object-center w-full h-full"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-dark-background/20">
          <h4 className="text-9xl text-dark-primary font-bold font-serif">
            {project.title}
          </h4>
        </div>
      </div>

      <div className="py-30 flex flex-col gap-30">
        <p className="text-2xl max-w-3xl text-secondary">
          {project.description}
        </p>

        <div className="flex flex-col w-full max-w-3xl self-end">
          <div className="space-y-4 py-4 border-t border-foreground/35">
            <h4 className="text-2xl text-primary">Tech Stack</h4>

            <div className="flex items-center gap-10">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-secondary hover:text-primary transition duration-300 ease-out cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 py-4 border-t border-foreground/35">
            <h4 className="text-2xl text-primary">Live</h4>

            <a
              href={project.projectLink}
              target="_blank"
              className="flex items-center gap-2 text-secondary hover:text-primary duration-300 transition ease-out font-medium"
            >
              <span>{project.projectLink}</span>
              <HiArrowUp className="rotate-45" />
            </a>
          </div>

          <div className="space-y-4 py-4 border-y border-foreground/35">
            <h4 className="text-2xl text-primary">GitHub</h4>

            <a
              href={project.githubLink}
              target="_blank"
              className="flex items-center gap-2 text-secondary hover:text-primary duration-300 transition ease-out font-medium"
            >
              <span>{project.githubLink}</span>
              <HiArrowUp className="rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
