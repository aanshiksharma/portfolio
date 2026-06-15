"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiMenu } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

import { useSidebarNavigation } from "@/app/hooks/useSidebarNavigation";
import navs from "./navlinks.data.json";

function Navbar({ profile }) {
  const headerRef = useRef(null);
  const { openSidebar } = useSidebarNavigation();

  useGSAP(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      yPercent: -100,
      transformOrigin: "top",
      duration: 1.2,
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="border-b border-foreground/20 fixed inset-0 bottom-auto z-10 bg-background/30 backdrop-blur-md px-6 py-3 "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="aanshik"
              width={100}
              height={5}
              className="h-full w-auto"
            />
          </Link>
        </div>

        <div className="hidden [@media(hover:hover)]:flex items-center gap-6">
          <nav>
            <ul className="flex items-center gap-4">
              {navs.map((nav, index) => (
                <li key={index}>
                  <Link href={nav.url}>{nav.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href={profile.resumeLink}
            target="_blank"
            className={`
              px-3 py-1 rounded-xl
              font-medium text-secondary
              bg-linear-to-tr from-surface/10 to-surface/40
              shadow-xs hover:shadow-md shadow-primary/25
              transition-shadow ease-out duration-300
            `}
          >
            Resume
          </Link>
        </div>

        <button
          className="inline [@media(hover:hover)]:hidden"
          onClick={openSidebar}
        >
          <HiMenu size={24} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
