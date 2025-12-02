"use client";

import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import HeroSectionVideo from "@/app/_components/HeroSection/HeroSectionVideo";
import HeroSectionNavbar from "./HeroSection/HeroSectionNavbar";

function HeroSection() {
  const descriptionRef = useRef();
  const headingRef = useRef();

  useGSAP(() => {
    gsap.from(descriptionRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    });

    gsap.fromTo(
      descriptionRef.current,
      {
        y: 0,
        opacity: 1,
      },
      {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: descriptionRef.current,
          scroller: "body",
          scrub: 2,
          start: "top 30%",
        },
      }
    );

    gsap.from(headingRef.current, {
      yPercent: 25,
      opacity: 0.1,
      duration: 1,
      ease: "power1.out",
    });

    gsap.fromTo(
      headingRef.current,
      {
        yPercent: 0,
        opacity: 1,
      },
      {
        yPercent: 25,
        opacity: 0.1,
        scrollTrigger: {
          trigger: headingRef.current,
          scroller: "body",
          scrub: 2,
          start: "top top",
        },
      }
    );
  }, []);

  return (
    <section id="hero" className="relative h-dvh overflow-hidden">
      {/* <HeroSectionNavbar /> */}
      <HeroSectionVideo />

      <div className="backdrop-blur-sm flex flex-col justify-end gap-20 lg:gap-8 px-4 lg:px-8 h-full bg-accent/20">
        <div className="flex justify-end lg:pr-20">
          <p
            ref={descriptionRef}
            className="relative lg:text-3xl max-w-3xs lg:max-w-md text-balance font-light tracking-tighter text-dark-primary/90"
          >
            Full Stack Web Developer building practical applications and
            continuously learning.
          </p>
        </div>

        <h1
          ref={headingRef}
          className="text-7xl lg:text-[18rem] lg:-mb-6 text-dark-primary/90 leading-none tracking-tighter font-light self-center"
        >
          aanshik
          <span className="text-xl lg:text-9xl text-dark-primary/35 bg-clip-text font-medium tracking-tight">
            sharma
          </span>
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
