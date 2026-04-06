import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function useLoader(animationConfig, duration, scaleX, scaleY) {
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
}
