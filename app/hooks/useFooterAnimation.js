import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useFooterAnimation = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({ paused: true });

    timeline
      .from(".footer-top h2", {
        xPercent: -25,
        opacity: 0,
      })
      .from(".footer-top .top-button", {
        xPercent: 25,
        opacity: 0,
      });

    ScrollTrigger.create({
      trigger: ".footer-top",
      scroller: "body",
      start: "top 70%",
      onEnter: () => timeline.play(),
      onLeaveBack: () => timeline.reverse(),
    });
  }, []);

  useGSAP(() => {
    const timeline = gsap.timeline({ paused: true });

    timeline.from(".links > *", {
      opacity: 0,
      yPercent: 25,
      duration: 0.3,
      stagger: 0.15,
      ease: "power1.out",
    });

    ScrollTrigger.create({
      trigger: ".links",
      scroller: "body",
      start: "top 80%",
      onEnter: () => timeline.play(),
      onLeaveBack: () => timeline.reverse(),
    });
  }, []);

  useGSAP(() => {
    const timeline = gsap.timeline({ paused: true });

    timeline.from(".footer-logo > *", {
      opacity: 0,
      yPercent: 25,
      duration: 1,
      stagger: 0.5,
      ease: "power1.out",
    });

    ScrollTrigger.create({
      trigger: ".footer-logo",
      scroller: "body",
      start: "top 90%",
      onEnter: () => timeline.play(),
      onLeaveBack: () => timeline.reverse(),
    });
  }, []);
};
