"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import ProjectCard from "./ProjectsSection/ProjectCard";
import projects from "@/data/projects.json";

function ProjectsSection() {
  useGSAP(() => {
    gsap.fromTo(
      "body",
      { backgroundColor: "#f5f5f5" },
      {
        backgroundColor: "#171717",
        scrollTrigger: {
          trigger: "#projects",
          scroller: "body",
          start: "top top",
          end: "+=15%",
          scrub: 3,
        },
      },
      ">"
    );

    gsap.fromTo(
      "#projects h2",
      { color: "#0a0a0a" },
      {
        color: "#fafafa",
        scrollTrigger: {
          trigger: "#projects",
          scroller: "body",
          start: "top top",
          end: "+=15%",
          scrub: 3,
        },
      }
    );

    const headingTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects h2",
        scroller: "body",
        start: "top 80%",
        end: "bottom 80%",
        scrub: 2,
      },
    });

    headingTimeline.from("#projects h2 .fromLeft", {
      xPercent: -50,
      opacity: 0,
    });
    headingTimeline.from(
      "#projects h2 .fromRight",
      {
        xPercent: 50,
        opacity: 0,
      },
      "<"
    );
  }, []);

  return (
    <section id="projects" className="">
      <div className="py-55 flex items-center justify-center">
        <h2 className="text-9xl text-center font-semibold tracking-tight uppercase flex items-center gap-6">
          <span className="fromLeft relative">Featured</span>
          <span className="fromRight relative">Projects</span>
        </h2>
      </div>

      <div className="flex flex-col gap-15">
        {projects.map((project) => (
          <ProjectCard key={project._id.$oid} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
