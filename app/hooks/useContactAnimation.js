import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useContactAnimation = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({ paused: true });

    timeline
      .from(".contact-background", {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power2.out",
      })
      .from(
        ".image-background",
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          ease: "power2.out",
        },
        "<",
      )
      .from(".text-animation", {
        xPercent: -25,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
      })
      .from(
        ".image-animation",
        {
          xPercent: 25,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<",
      );

    ScrollTrigger.create({
      trigger: "#contact",
      scroller: "body",
      start: "top 30%",
      onEnter: () => timeline.play(),
      onLeaveBack: () => timeline.reverse(),
    });
  }, []);
};
