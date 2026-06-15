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
      scale: 0.7,
      duration: 0.25,
      ease: "power2.out",
    });

    timeline
      .from(
        fromLeft,
        {
          xPercent: -25,
          opacity: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out",
        },
        "0.25",
      )
      .from(
        fromRight,
        {
          xPercent: 25,
          opacity: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out",
        },
        "0.25",
      );

    ScrollTrigger.create({
      trigger: blurBackgroundRef.current,
      start: "top 40%",
      onEnter: () => timeline.play(),
      onLeaveBack: () => timeline.reverse(),
    });
  }, []);

  return (
    <section
      ref={blurBackgroundRef}
      className={`
        grid sm:grid-cols-2 gap-10 md:gap-8
        max-w-4xl px-8 py-12
        bg-dark-surface/10 backdrop-blur-md
        rounded-3xl ring ring-dark-foreground/10
        overflow-hidden
      `}
    >
      {categories.map((category, index) => (
        <div
          key={category._id.$oid}
          className={`basis-sm max-w-md flex-1 flex flex-col gap-4 max-md:text-xs
                ${index % 2 === 0 ? "from-left" : "from-right"}
            `}
        >
          <h4 className="text-[1.5em] text-dark-foreground">{category.name}</h4>

          <ul className="flex flex-wrap items-center gap-2 md:gap-3">
            {skills
              .filter((skill) => skill.category.$oid === category._id.$oid)
              .map((skill) => (
                <li
                  key={skill._id.$oid}
                  className="bg-accent/30 hover:bg-accent/60 backdrop-blur-2xl px-2 md:px-3 py-0.5 rounded-[0.55em] text-dark-secondary hover:text-dark-foreground transition duration-300 ease-out cursor-default"
                >
                  {skill.name}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default SkillsData;
