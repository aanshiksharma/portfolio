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

export const useProjectCardAnimation = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(hover: hover)", () => {
      createAnimations("top 30%");
    });

    mm.add("(hover: none)", () => {
      createAnimations("top 60%");
    });

    function createAnimations(start) {
      const projectCards = gsap.utils.toArray(".projectCard");

      projectCards.map((project) => {
        const timeline = gsap.timeline({
          paused: true,
        });

        timeline
          .fromTo(
            project.querySelector(".fromLeft"),
            {
              xPercent: -25,
              opacity: 0,
            },
            {
              xPercent: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            },
          )
          .fromTo(
            project.querySelector(".fromRight"),
            { xPercent: 25, opacity: 0 },
            {
              xPercent: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            },
            "<",
          );

        ScrollTrigger.create({
          trigger: project,
          start,
          onEnter: () => timeline.play(),
          onLeaveBack: () => timeline.reverse(),
        });
      });
    }

    return () => mm.revert();
  }, []);
};
