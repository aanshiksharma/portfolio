import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useHeadingAnimation = () => {
  useGSAP(() => {
    const headingTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects h2",
        scroller: "body",
        start: "top 80%",
        end: "bottom 80%",
        scrub: 2,
      },
    });

    headingTimeline.from("#projects h2 .fromLeft", {
      xPercent: -50,
      opacity: 0,
    });
    headingTimeline.from(
      "#projects h2 .fromRight",
      {
        xPercent: 50,
        opacity: 0,
      },
      "<",
    );
  }, []);
};
