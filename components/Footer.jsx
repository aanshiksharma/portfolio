"use client";

import Image from "next/image";
import Link from "next/link";

import { HiArrowUp } from "react-icons/hi";
import { IconMap } from "./IconMap";

import { useFooterAnimation } from "@/app/hooks/useFooterAnimation";

function Footer({ profile }) {
  useFooterAnimation();

  return (
    <footer className="flex flex-col gap-20 md:gap-30 lg:gap-40 bg-background overflow-hidden pb-2 pt-16 md:pt-20 px-4 md:px-12">
      <section className="footer-top flex justify-between gap-6">
        <div className="flex flex-col gap-8">
          <h2 className="text-xl text-muted flex items-center gap-2">
            <span>Socials</span> <HiArrowUp className="rotate-45" />
          </h2>

          <ul className="links grid md:flex items-center gap-3 md:gap-6 text-lg">
            {profile.socialMediaLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.link}
                  target="_blank"
                  className={`
                    flex items-center gap-2
                    px-4 md:px-6 py-2 w-fit
                    hover:bg-dark-background hover:text-dark-foreground
                    ring rounded-full ring-foreground
                    transition ease-out duration-300
                  `}
                >
                  <span>{link.platform}</span>
                  {
                    IconMap.find(
                      (item) => item.name === link.platform.toLowerCase(),
                    ).icon
                  }
                </a>
              </li>
            ))}

            <li>
              <a
                href={profile.email}
                target="_blank"
                className={`
                    flex items-center gap-2
                    px-4 md:px-6 py-2 w-fit
                    hover:bg-dark-background hover:text-dark-foreground
                    ring rounded-full ring-foreground
                    transition ease-out duration-300
                  `}
              >
                <span>Email</span>
                {IconMap.find((item) => item.name === "email").icon}
              </a>
            </li>
          </ul>
        </div>

        <div className="top-button flex flex-col gap-4 items-center group">
          <Link
            href={"/"}
            className="rounded-xl bg-dark-background text-dark-foreground p-4 cursor-pointer group-hover:-translate-y-1 transiton ease-out duration-300"
            title="Back to top"
          >
            <HiArrowUp />
          </Link>

          <span className="text-balance text-center">Back to top</span>
        </div>
      </section>

      <section className="footer-logo flex flex-col items-center justify-end gap-6 max-md:text-xs">
        <p className="self-start">Designed and developed by —</p>

        <Image
          src="/logo-light.png"
          alt="logo"
          height={221}
          width={1440}
          className="w-full h-auto"
        />
      </section>
    </footer>
  );
}

export default Footer;
