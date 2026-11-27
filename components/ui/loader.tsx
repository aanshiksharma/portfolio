"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const animationConfig = {
  repeat: -1,
  ease: "power1.inOut",
  repeatDelay: 0.2,
};
const duration = 1;
const scaleX = { max: 1, min: 0.05 };
const scaleY = { max: 1, min: 0.05 };

export function Loader() {
  useGSAP(() => {
    const timeline = gsap.timeline({
      ...animationConfig,
    });

    const horizontal = {
      max: { scaleX: scaleX.max, duration: duration },
      min: { scaleX: scaleX.min, duration: duration },
    };
    const vertical = {
      max: { scaleY: scaleY.max, duration: duration },
      min: { scaleY: scaleY.min, duration: duration },
    };

    timeline
      .to(".loader .horizontal", {
        transformOrigin: "right",
        ...horizontal.min,
      })
      .to(".loader .horizontal", {
        transformOrigin: "right",
        ...horizontal.max,
      })
      .to(".loader .horizontal", {
        transformOrigin: "left",
        ...horizontal.min,
      })
      .to(".loader .horizontal", {
        transformOrigin: "left",
        ...horizontal.max,
      });

    timeline
      .to(
        ".loader .vertical",
        {
          transformOrigin: "bottom",
          ...vertical.min,
        },
        `${duration * 0}`,
      )
      .to(
        ".loader .vertical",
        {
          transformOrigin: "bottom",
          ...vertical.max,
        },
        `${duration * 1}`,
      )
      .to(
        ".loader .vertical",
        {
          transformOrigin: "top",
          ...vertical.min,
        },
        `${duration * 2}`,
      )
      .to(
        ".loader .vertical",
        {
          transformOrigin: "top",
          ...vertical.max,
        },
        `${duration * 3}`,
      );
  });

  return (
    <div className="loader relative">
      <div className="bg-dark-foreground w-30 h-1 rounded-full absolute bottom-8 right-0 horizontal"></div>
      <div className="bg-dark-foreground w-1 h-30 rounded-full absolute bottom-0 right-8 vertical"></div>
    </div>
  );
}
