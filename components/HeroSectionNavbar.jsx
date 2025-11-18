"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi";

const navs = [
  { url: "#projects", label: "Projects" },
  { url: "#skills", label: "Skills" },
];

function HeroSectionNavbar() {
  const leftItemRef = useRef();
  const middleItemRef = useRef();
  const rightItemRef = useRef();

  useGSAP(() => {
    const animations = {
      base: { opacity: 0, duration: 1, ease: "power1.out" },
      specific: [
        { target: leftItemRef.current, animation: { x: -50 } },
        { target: middleItemRef.current, animation: { y: -50 } },
        { target: rightItemRef.current, animation: { x: 50 } },
      ],
    };

    animations.specific.forEach(({ target, animation }) => {
      if (!target) return; // because refs love being null at the worst moments
      gsap.from(target, { ...animations.base, ...animation });
    });
  }, []);

  return (
    <header className="fixed inset-0 bottom-auto z-1 grid grid-cols-3 items-center px-12 py-6 text-sm">
      <div
        ref={leftItemRef}
        className="rounded-full px-5 py-1.5 bg-background/20 backdrop-blur-2xl text-primary place-self-start"
      >
        <Link href={"/"}>aanshik</Link> is available for work
      </div>

      <nav
        ref={middleItemRef}
        className="rounded-full px-6 py-1.5 flex items-center gap-3 bg-background/20 backdrop-blur-2xl text-primary place-self-center"
      >
        {navs.map(({ url, label }, index) => {
          return (
            <Link key={index} href={url} className="flex gap-3 items-center">
              <span>{label}</span>

              <span>{index < navs.length - 1 && <BsThreeDotsVertical />}</span>
            </Link>
          );
        })}
      </nav>

      <div
        ref={rightItemRef}
        className="rounded-full px-4 py-1.5 flex items-center gap-3 bg-primary text-dark-secondary place-self-end"
      >
        <Link href={"/"} className="flex items-center gap-2 group">
          <span>Download Resume</span>
          <HiOutlineArrowRight className="text-lg group-hover:translate-x-1/4 transition ease-out duration-500" />
        </Link>
      </div>
    </header>
  );
}

export default HeroSectionNavbar;
