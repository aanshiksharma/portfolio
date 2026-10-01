"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuArrowUpRight, LuMenu } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

import { useSidebarNavigation } from "@/app/hooks/useSidebarNavigation";
import navs from "./navlinks.data.json";

function Navbar({ profile }) {
  const headerRef = useRef(null);
  const prevScrollRef = useRef(0);
  const [top, setTop] = useState(true);
  const { openSidebar } = useSidebarNavigation();

  useGSAP(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      yPercent: -100,
      transformOrigin: "top",
      duration: 1.2,
    });
  }, []);

  useEffect(() => {
    const toggleHeader = (hide) => {
      if (hide) {
        gsap.to("header", {
          yPercent: -100,
          duration: 0.8,
        });
      } else {
        gsap.to("header", {
          yPercent: 0,
          duration: 0.8,
        });
      }
    };

    const handleScroll = () => {
      const SCROLL_TRIGGER_VALUE = 60;
      const currentScroll = window.scrollY;
      const isScrollingDown =
        currentScroll > 2 * SCROLL_TRIGGER_VALUE &&
        currentScroll > prevScrollRef.current;

      if (currentScroll > SCROLL_TRIGGER_VALUE) setTop(false);
      else setTop(true);

      toggleHeader(isScrollingDown);

      prevScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed inset-0 bottom-auto z-10 px-4 py-4"
    >
      <div
        className={`
          px-4 ${top ? "py-0" : "py-4"} max-w-350 mx-auto
          flex items-center justify-between
          ${top ? "bg-transparent" : "bg-background/30 backdrop-blur-md"}
          border rounded-3xl ${top ? "border-transparent" : "border-foreground/20"}
          transition-all ease-out duration-300
        `}
      >
        <div
          className={`
            ${top ? "p-0" : "px-4"}
            transition-all ease-out duration-300
          `}
        >
          <Link href="/">
            <Image
              src="/logo-light.png"
              alt="aanshik"
              loading="eager"
              width={140}
              height={5}
              className="h-full w-auto"
            />
          </Link>
        </div>

        <div className="hidden [@media(hover:hover)]:flex items-center gap-24">
          <nav>
            <ul className="flex items-center gap-12">
              {navs.map((nav, index) => (
                <li
                  key={index}
                  className="hover:text-foreground font-semibold uppercase transition ease-out duration-300"
                >
                  <Link href={nav.url}>{nav.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href={profile.resumeLink}
            target="_blank"
            className={`
              flex items-center gap-2
              px-6 py-3 group
              border border-foreground hover:border-surface
              bg-transparent hover:bg-surface rounded-full
              font-semibold text-foreground uppercase 
              transition-all ease-out duration-300
            `}
          >
            <span>Resume</span>
            <LuArrowUpRight
              size={24}
              className="group-hover:rotate-45 group-hover:translate-x-2 transition ease-out duration-300"
            />
          </Link>
        </div>

        <button
          className="inline [@media(hover:hover)]:hidden"
          onClick={openSidebar}
        >
          <LuMenu size={24} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
