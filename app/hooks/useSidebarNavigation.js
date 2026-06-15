import gsap from "gsap";

export const useSidebarNavigation = () => {
  const timeline = gsap.timeline();

  const openSidebar = () => {
    timeline.to("#sidebar-container", {
      transform: "translateX(0%)",
      duration: 0,
      ease: "none",
    });

    timeline.to("#sidebar-container", {
      opacity: 1,
      duration: 0.5,
    });

    timeline.fromTo(
      "#sidebar",
      { xPercent: 100, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.5,
        delay: -0.5,
        ease: "power2.out",
      },
    );

    timeline.fromTo(
      "#sidebar ul li, hr, .resumeLink",
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: -0.2,
        ease: "power2.out",
      },
    );
  };

  const closeSidebar = () => {
    timeline.fromTo(
      "#sidebar ul li, hr, .resumeLink",
      { opcaity: 1, x: 0 },
      {
        opacity: 0,
        x: 20,
        duration: 0.5,
        stagger: -0.1,
        delay: -0.2,
        ease: "power2.in",
      },
    );

    timeline.fromTo(
      "#sidebar",
      { xPercent: 0, opacity: 1 },
      {
        xPercent: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      },
    );

    timeline.to("#sidebar-container", {
      opacity: 0,
      duration: 0.5,
      delay: -0.5,
    });

    timeline.to("#sidebar-container", {
      transform: "translateX(100%)",
      duration: 0,
      ease: "none",
    });
  };

  return { openSidebar, closeSidebar };
};
