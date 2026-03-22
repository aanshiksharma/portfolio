"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ProjectCardCover({ project }) {
  const projectCoverRef = useRef();

  useGSAP(() => {
    gsap.from(projectCoverRef.current, {
      width: window.innerWidth,
      height:
        window.innerHeight > 900 ? window.innerHeight / 2 : window.innerHeight,
      borderRadius: 0,
      scrollTrigger: {
        trigger: projectCoverRef.current,
        start: "top 55%",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    console.log(window.innerWidth, window.innerHeight);
  }, []);

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
