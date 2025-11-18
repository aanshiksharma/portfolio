"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const headerRef = useRef();

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        scroller: "body",
        scrub: 3,
        start: "top -60%",
        end: "+=15%",
      },
    });

    timeline.from(headerRef.current, {
      opacity: 0,
      yPercent: -100,
      transformOrigin: "top",
      duration: 1.2,
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="border-b border-foreground/20 fixed inset-0 bottom-auto z-10 backdrop-blur-lg px-4 py-3"
    >
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <div className="">
          <a href="/">Aanshik</a>
        </div>

        <nav className="flex items-center gap-6">
          <span>About</span>
          <span>Projects</span>
          <span>Skills</span>
          <span>Contact</span>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
