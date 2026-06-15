import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useBackgroundAnimation = () => {
  useGSAP(() => {
    gsap.fromTo(
      "body",
      { backgroundColor: "#f5f5f5" },
      {
        backgroundColor: "#171717",
        scrollTrigger: {
          trigger: "#projects",
          scroller: "body",
          start: "top top",
          end: "+=15%",
          scrub: 3,
        },
      },
      ">",
    );

    gsap.fromTo(
      "#projects h2",
      { color: "#0a0a0a" },
      {
        color: "#fafafa",
        scrollTrigger: {
          trigger: "#projects",
          scroller: "body",
          start: "top top",
          end: "+=15%",
          scrub: 3,
        },
      },
    );
  }, []);
};

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

export const useProjectCardAnimation = (projectCoverRef) => {
  useGSAP(() => {
    gsap.from(projectCoverRef.current, {
      width: window.innerWidth,
      height:
        window.innerHeight > 900 ? window.innerHeight / 2 : window.innerHeight,
      borderRadius: 0,
      scrollTrigger: {
        trigger: projectCoverRef.current,
        start: "top 55%",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });
  }, []);
};

export const useProjectDataAnimation = (descriptionRef) => {
  useGSAP(() => {
    gsap.from(descriptionRef.current, {
      y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: "top 85%",
        end: "bottom 85%",
        scrub: 2,
      },
    });
  });
};
