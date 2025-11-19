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
        end: "bottom bottom",
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
      className="rounded-3xl h-110 relative overflow-hidden"
    >
      <Image
        ref={imageRef}
        src="/about-image.jpg"
        width={500}
        height={200}
        alt="aanshik's image"
        className="w-full object-cover object-top transition ease-out duration-1000"
      />

      <div
        ref={bannerRef}
        className="absolute top-1/2 right-0 -translate-y-1/2 text-primary bg-background px-6 py-1 border border-r-0 border-foreground/30 shadow-lg rounded-l-full"
      >
        <p>🧑🏽‍💻 Full Stack Web Developer</p>
      </div>

      <div
        ref={socialLinksRef}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-primary bg-background px-6 py-3 border border-foreground/30 shadow-lg rounded-full"
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
