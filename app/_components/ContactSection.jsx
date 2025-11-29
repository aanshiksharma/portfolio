"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import Image from "next/image";
import { HiArrowUp } from "react-icons/hi";

function ContactSection() {
  const contactSectionRef = useRef();

  useGSAP(() => {
    const timeline = gsap.timeline();

    gsap.fromTo(
      "body",
      { backgroundColor: "#171717" },
      {
        backgroundColor: "#f5f5f5",
        scrollTrigger: {
          trigger: contactSectionRef.current,
          scroller: "body",
          start: "top center",
          end: "+=15%",
          scrub: 3,
        },
      }
    );

    timeline
      .from(
        ".text-bg-animation",
        {
          opacity: 0,
          scale: 0.75,
          duration: 0.5,
          ease: "power2.out",
        },
        "0"
      )
      .from(
        ".text-animation",
        {
          xPercent: -25,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out",
        },
        "0.5"
      )
      .from(
        ".image-bg-animation",
        {
          opacity: 0,
          scale: 0.75,
          duration: 0.5,
          ease: "power2.out",
        },
        "0"
      )
      .from(
        ".image-animation",
        {
          xPercent: 25,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "0.5"
      );

    ScrollTrigger.create({
      trigger: contactSectionRef.current,
      scroller: "body",
      start: "top 50%",
      onEnter: () => timeline.play(),
      onLeaveBack: () => timeline.reverse(),
    });
  }, []);

  return (
    <section
      ref={contactSectionRef}
      className="relative h-screen overflow-hidden"
    >
      <div className="p-12 flex items-center gap-6 h-screen">
        <div className="relative text-bg-animation rounded-2xl flex flex-col justify-between flex-1 basis-1/2 h-full bg-[url('/contact-image-2.jpg')] bg-no-repeat bg-center p-8 overflow-hidden">
          <h4 className="text-animation text-7xl">Let's Connect</h4>

          <a
            href="mailto:aanshik16@gmail.com"
            target="_blank"
            className="text-animation text-5xl flex gap-2 items-center leading-none group"
          >
            <span>aanshik16@gmail.com</span>
            <HiArrowUp className="rotate-45 group-hover:translate-x-2 group-hover:-translate-y-2 transition ease-out duration-300" />
          </a>
        </div>

        <div className="image-bg-animation rounded-2xl overflow-hidden bg-dark-foreground flex-1 basis-1/2 h-full">
          <Image
            src={"/about-image.jpg"}
            width={300}
            height={20}
            alt="aanshik's image"
            className="image-animation object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
