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

    timeline
      .from(".text-animation", {
        xPercent: -25,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
      })
      .from(
        ".image-animation",
        {
          xPercent: 25,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "0"
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
      className="relative h-screen bg-[url('/contact-image-2.jpg')] bg-no-repeat bg-center bg-fixed overflow-hidden"
    >
      <div className="px-12 py-20 flex items-center gap-6 h-screen">
        <div className="relative text-animation rounded-3xl flex-4 basis-4/5 h-full overflow-hidden p-8 bg-background/75 flex flex-col justify-between">
          <h4 className="text-animation text-6xl">Let's Connect</h4>

          <a
            href="mailto:aanshik16@gmail.com"
            target="_blank"
            className="text-animation text-6xl flex gap-2 items-center leading-none group underline"
          >
            <span>aanshik16@gmail.com</span>
            <HiArrowUp className="rotate-45 group-hover:translate-x-2 group-hover:-translate-y-2 transition ease-out duration-300" />
          </a>
        </div>

        <div className="image-animation rounded-3xl overflow-hidden flex-1 basis-1/2 h-full">
          <Image
            src={"/about-image.jpg"}
            width={300}
            height={20}
            alt="aanshik's image"
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
