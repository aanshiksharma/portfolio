"use client";

import { useRef } from "react";
import Image from "next/image";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function AboutImage() {
  const mainContainerRef = useRef();
  const imageRef = useRef();
  const bannerRef = useRef();
  const socialLinksRef = useRef();

  useGSAP(() => {
    gsap.from(mainContainerRef.current, {
      opacity: 0,
      y: 70,
      scrollTrigger: {
        trigger: mainContainerRef.current,
        scroller: "body",
        start: "top 85%",
        end: "+=20%",
        scrub: 3,
      },
    });

    gsap.to(imageRef.current, {
      yPercent: -30,
      scrollTrigger: {
        trigger: imageRef.current,
        scroller: "body",
        start: "top 20%",
        end: "+=50%",
        scrub: 3,
      },
    });

    gsap.from(bannerRef.current, {
      xPercent: 100,
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top 75%",
        end: "+=5%",
        scrub: 2,
      },
    });

    gsap.from(socialLinksRef.current, {
      yPercent: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: socialLinksRef.current,
        start: "top bottom",
        end: "+=20%",
        scrub: 2,
      },
    });
  }, []);

  return (
    <div
      ref={mainContainerRef}
      className="rounded-3xl h-32 sm:h-64 md:h-96 min-[100rem]:h-160 relative overflow-hidden"
    >
      <Image
        ref={imageRef}
        src="/about-image.jpg"
        width={500}
        height={200}
        alt="aanshik's image"
        className="w-full h-auto md:h-[150%] object-cover object-top transition ease-out duration-1000"
      />

      <div
        ref={bannerRef}
        className={`
          absolute z-2 top-1/2 right-0 -translate-y-1/2
          bg-background md:px-4 py-1.5
          text-sm max-md:hidden
          border border-r-0 border-foreground/30
          shadow-lg rounded-l-full
        `}
      >
        <p>🧑🏽‍💻 Full Stack Web Developer</p>
      </div>

      <div
        ref={socialLinksRef}
        className={`
          absolute z-2 bottom-4 left-1/2 -translate-x-1/2
          flex items-center gap-2
          bg-background px-6 py-3
          max-md:hidden
          border border-foreground/30 rounded-full
          shadow-lg
        `}
      >
        <a
          href="https://github.com/aanshiksharma"
          target="_blank"
          className="hover:scale-120 transition ease-out duration-500 origin-bottom"
        >
          <BsGithub />
        </a>

        <a
          href="https://linkedin.com/in/aanshik-sharma"
          target="_blank"
          className="hover:scale-120 transition ease-out duration-500 origin-bottom"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://instagram.com/aanshik_sharma"
          target="_blank"
          className="hover:scale-120 transition ease-out duration-500 origin-bottom"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
}

export default AboutImage;
