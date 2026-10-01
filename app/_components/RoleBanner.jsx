import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

function RoleBanner() {
  useGSAP(() => {
    gsap.to(".move", {
      transform: "translateX(-200%)",
      repeat: -1,
      duration: 6,
      ease: "linear",
    });
  }, []);

  return (
    <div className="py-4 bg-surface text-secondary flex items-center shadow-xs shadow-dark-background/10 overflow-x-hidden pointer-events-none">
      {Array.from(new Array(5)).map((_, index) => (
        <p
          key={index}
          className="move -translate-x-full px-12 pt-2 border-y-2 text-[10vw] whitespace-nowrap leading-none tracking-wide uppercase font-display"
        >
          Full-stack developer
        </p>
      ))}
    </div>
  );
}

export default RoleBanner;
