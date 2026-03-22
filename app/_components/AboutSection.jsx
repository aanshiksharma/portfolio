"use client";

import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import AboutImage from "./AboutSection/AboutImage";
import ToolTip from "./common/ToolTip";

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
    { scope: aboutSectionRef },
  );

  return (
    <section
      ref={aboutSectionRef}
      id="about"
      className="px-12 py-50 flex flex-col gap-50"
    >
      <h2 className="description text-4xl text-balance max-w-5xl relative">
        I am a B.Tech student at{" "}
        <ToolTip
          text={"JSS Academy of Technical Education, Noida"}
          className={"inline"}
        >
          <span className="hover:underline">JSSATEN</span>
        </ToolTip>{" "}
        with strong focus and consistency on Full Stack Web Development.
      </h2>

      <AboutImage />

      <h2 className="description text-4xl text-balance max-w-3xl self-end relative">
        I build full-stack applications with a focus on performance,
        functionality, and smooth user experience.
      </h2>
    </section>
  );
}

export default AboutSection;
