"use client";

import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";

function HeroSection() {
  const descriptionRef = useRef();
  const logoRef = useRef();

  useGSAP(() => {
    gsap.from(descriptionRef.current, {
      y: -140,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    });

    gsap.fromTo(
      descriptionRef.current,
      {
        y: -40,
        opacity: 1,
      },
      {
        y: -140,
        opacity: 0,
        scrollTrigger: {
          trigger: descriptionRef.current,
          scroller: "body",
          scrub: 2,
          start: "top 30%",
        },
      },
    );

    gsap.from(logoRef.current, {
      yPercent: 25,
      opacity: 0.1,
      duration: 1,
      ease: "power1.out",
    });

    gsap.fromTo(
      logoRef.current,
      {
        yPercent: 0,
        opacity: 0.5,
      },
      {
        yPercent: 25,
        opacity: 0.1,
        scrollTrigger: {
          trigger: logoRef.current,
          scroller: "body",
          scrub: 2,
          start: "top top",
        },
      },
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative h-dvh overflow-hidden flex items-center justify-center px-4 lg:px-12"
    >
      <div className="absolute top-0 right-0 -translate-y-1/2 -z-1 h-full aspect-square rounded-full blur-[15rem] bg-primary opacity-70" />

      <div className="absolute left-1/6 top-1/4 -z-1 w-100 aspect-square rounded-full blur-[10rem] bg-primary opacity-20" />

      <div
        ref={descriptionRef}
        className="text-center max-w-md w-full space-y-4 -translate-y-10"
      >
        <h1 className="text-3xl font-medium capitalize leading-tight text-pretty">
          building systems, crafting experiences
        </h1>
        <p className="leading-relaxed text-balance">
          Exploring ideas through code and carefully crafted interfaces.
        </p>
      </div>

      <Image
        ref={logoRef}
        src="/logo.png"
        alt="logo"
        height={450}
        width={3000}
        className="absolute bottom-0 left-0 right-0 opacity-50 w-full h-auto"
      />
    </section>
  );
}

export default HeroSection;
