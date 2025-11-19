"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import AboutImage from "./AboutSection/AboutImage";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

function AboutSection() {
  const aboutSectionRef = useRef();

  useGSAP(
    () => {
      const context = gsap.context(() => {
        gsap.utils.toArray(".description").forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            yPercent: 100,
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              end: "+=18%",
              scrub: 2,
            },
          });
        });
      }, aboutSectionRef);

      return () => context.revert();
    },
    { scope: aboutSectionRef }
  );

  return (
    <section
      ref={aboutSectionRef}
      id="about"
      className="relative min-h-screen px-12 py-50 flex flex-col gap-50"
    >
      <div className="absolute inset-0 w-full h-full bg-transparent">
        <Scene />
      </div>

      <h2 className="description text-4xl text-balance max-w-4xl relative">
        I am a B.Tech student at JSS Academy of Technical Education, Noida, with
        a strong focus on Full Stack Web Development.
      </h2>

      <AboutImage />

      <h2 className="description text-4xl text-balance max-w-3xl self-end relative">
        I specialize in building scalable, feature-rich applications and enjoy
        crafting smooth, engaging web experiences that blend performance with
        creativity.
      </h2>
    </section>
  );
}

export default AboutSection;
