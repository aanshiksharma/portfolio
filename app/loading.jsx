"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Loading() {
  useGSAP(() => {
    const timeline = gsap.timeline({
      repeat: -1,
      ease: "power1.inOut",
      repeatDelay: 0.2,
    });

    const duration = 1;

    timeline
      .to(".loader .horizontal", {
        scaleX: 0.1,
        transformOrigin: "right",
        duration: duration,
      })
      .to(".loader .horizontal", {
        scaleX: 1,
        transformOrigin: "right",
        duration: duration,
      })
      .to(".loader .horizontal", {
        scaleX: 0.1,
        transformOrigin: "left",
        duration: duration,
      })
      .to(".loader .horizontal", {
        scaleX: 1,
        transformOrigin: "left",
        duration: duration,
      });

    timeline
      .to(
        ".loader .vertical",
        {
          scaleY: 0.1,
          transformOrigin: "bottom",
          duration: duration,
        },
        `${duration * 0}`
      )
      .to(
        ".loader .vertical",
        {
          scaleY: 1,
          transformOrigin: "bottom",
          duration: duration,
        },
        `${duration * 1}`
      )
      .to(
        ".loader .vertical",
        {
          scaleY: 0.1,
          transformOrigin: "top",
          duration: duration,
        },
        `${duration * 2}`
      )
      .to(
        ".loader .vertical",
        {
          scaleY: 1,
          transformOrigin: "top",
          duration: duration,
        },
        `${duration * 3}`
      );
  });

  return (
    <section className="fixed inset-0 z-100 h-screen flex items-end">
      <div className="grid grid-cols-5 h-full absolute inset-0">
        <span className="bg-animation bg-dark-background h-full w-full" />
        <span className="bg-animation bg-dark-background h-full w-full" />
        <span className="bg-animation bg-dark-background h-full w-full" />
        <span className="bg-animation bg-dark-background h-full w-full" />
        <span className="bg-animation bg-dark-background h-full w-full" />
      </div>

      <div className="relative w-full text-dark-secondary flex items-end justify-between px-4 sm:px-6 py-6">
        <div className="space-y-2">
          <h4 className="text-4xl capitalize">full stack web developer</h4>
          <h1 className="text-xl uppercase">aanshik sharma</h1>
        </div>

        <div className="loader relative">
          <div className="bg-dark-primary w-30 h-1 rounded-full absolute bottom-8 right-0 horizontal"></div>
          <div className="bg-dark-primary w-1 h-30 rounded-full absolute bottom-0 right-8 vertical"></div>
        </div>
      </div>
    </section>
  );
}

export default Loading;
