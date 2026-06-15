"use client";

import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import AboutImage from "./AboutSection/AboutImage";
import ToolTip from "./common/ToolTip";

function AboutSection({ profile }) {
  const styles = {
    paragraphContainer:
      "min-h-[35vh] py-[10vw] flex items-center md:text-2xl xl:text-[2vw] leading-relaxed",
  };
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
      className="relative z-1 grid overflow-hidden leading-relaxed px-4 lg:px-12"
    >
      <div className={`${styles.paragraphContainer} max-w-4/5 md:max-w-3/5`}>
        {/* <p className="description">
          I am a B.Tech student at{" "}
          <ToolTip
            text={"JSS Academy of Technical Education, Noida"}
            className={"inline"}
          >
            <span className="hover:underline">JSSATEN</span>
          </ToolTip>{" "}
          with strong focus and consistency on Full Stack Web Development.
        </p> */}

        <p className="description">{profile.about[0]}</p>
      </div>

      <AboutImage />

      <div
        className={`${styles.paragraphContainer} place-self-end w-full md:max-w-4/5 text-right text-balance`}
      >
        <p className="description">{profile.about[1]}</p>
      </div>
    </section>
  );
}

export default AboutSection;
