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
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* <HeroSectionNavbar /> */}
      <HeroSectionVideo />

      <div className="backdrop-blur-sm flex flex-col justify-end gap-8 px-8 h-full text-primary bg-accent/20">
        <div className="flex justify-end pr-20">
          <p
            ref={descriptionRef}
            className="relative text-3xl max-w-md text-balance font-light tracking-tighter"
          >
            Full Stack Web Developer crafting unforgettable experiences Lorem
            ipsum dolor sit amet.
          </p>
        </div>

        <h1
          ref={headingRef}
          className="text-[18rem] leading-none tracking-tighter font-light -mb-6"
        >
          aanshik
          <span className="text-9xl text-primary/35 bg-clip-text font-medium tracking-tight">
            {""}
            sharma
          </span>
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
