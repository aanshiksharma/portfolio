"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import skills from "@/data/skills.json";
import categories from "@/data/categories.json";

function SkillsData() {
  const containerRef = useRef();
  const blurBackgroundRef = useRef();

  useGSAP(() => {
    const fromLeft = gsap.utils.toArray(".from-left");
    const fromRight = gsap.utils.toArray(".from-right");

    const timeline = gsap.timeline({
      paused: true,
    });

    timeline.from(blurBackgroundRef.current, {
      opacity: 0,
      yPercent: 10,
      duration: 0.5,
      ease: "power1.out",
    });

    timeline
      .from(
        fromLeft,
        {
          xPercent: -50,
          opacity: 0,
          duration: 0.75,
          stagger: 0.3,
        },
        "0.5"
      )
      .from(
        fromRight,
        {
          xPercent: 50,
          opacity: 0,
          duration: 0.75,
          stagger: 0.3,
        },
        "0.5"
      );

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 30%",
      onEnter: () => timeline.play(),
      onLeaveBack: () => timeline.reverse(),
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="wrapper absolute inset-0 flex items-center justify-center"
    >
      <div
        ref={blurBackgroundRef}
        className="flex flex-wrap justify-center gap-y-12 gap-x-2 px-10 py-12 rounded-2xl ring ring-dark-foreground/10 bg-background/5 backdrop-blur-md max-w-4xl"
      >
        {categories.map((category, index) => (
          <div
            key={category._id.$oid}
            className={`basis-sm max-w-md flex-1 flex flex-col gap-3
                ${index % 2 === 0 ? "from-left" : "from-right"}
            `}
          >
            <h4 className="text-xl text-dark-primary">{category.name}</h4>

            <ul className="flex flex-wrap items-center gap-1.5">
              {skills
                .filter((skill) => skill.category.$oid === category._id.$oid)
                .map((skill) => (
                  <li
                    key={skill._id.$oid}
                    className="bg-foreground/30 hover:bg-foreground/60 backdrop-blur-2xl px-3 py-1 rounded-sm text-dark-secondary hover:text-dark-primary transition duration-300 ease-out cursor-default"
                  >
                    {skill.name}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsData;
