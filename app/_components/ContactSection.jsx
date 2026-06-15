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
        "0",
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
      className={`
        relative overflow-hidden
        min-h-dvh px-4 py-10 md:px-12 md:py-20
        bg-[url('/contact-image-2.jpg')] bg-no-repeat bg-center bg-fixed bg-cover
        grid [@media(hover:hover)]:lg:grid-cols-5 xl:grid-cols-6 gap-6
      `}
    >
      <div
        className={`
          relative
          p-4 sm:p-8 min-h-[35dvh] bg-background/75 rounded-3xl
          flex flex-col justify-between
          [@media(hover:hover)]:lg:col-span-3 xl:col-span-4
          text-xl min-[28rem]:text-3xl lg:text-4xl xl:text-6xl
      `}
      >
        <h2 className="text-animation text-[1.3em]">Let's Connect</h2>

        <a
          href="mailto:aanshik16@gmail.com"
          target="_blank"
          className="text-animation flex items-center gap-2 leading-none group underline"
        >
          <span>aanshik16@gmail.com</span>
          <HiArrowUp className="rotate-45 group-hover:translate-x-2 group-hover:-translate-y-2 transition ease-out duration-300" />
        </a>
      </div>

      <div className="image-animation rounded-3xl overflow-hidden [@media(hover:hover)]:lg:col-span-2 xl:col-span-2">
        <Image
          src={"/about-image.jpg"}
          width={300}
          height={20}
          alt="aanshik's image"
          className="object-cover object-center w-full h-full"
        />
      </div>
    </section>
  );
}

export default ContactSection;
