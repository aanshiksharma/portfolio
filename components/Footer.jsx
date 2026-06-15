import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsEnvelope, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { HiArrowUp } from "react-icons/hi";

const socials = [
  {
    id: 0,
    label: "Linkedin",
    icon: <BsLinkedin />,
    url: "https://linkedin.com/in/aanshik-sharma",
  },
  {
    id: 1,
    label: "GitHub",
    icon: <BsGithub />,
    url: "https://github.com/aanshiksharma",
  },
  {
    id: 2,
    label: "Instagram",
    icon: <BsInstagram />,
    url: "https://instagram.com/aanshik_sharma",
  },
  {
    id: 3,
    label: "Email",
    icon: <BsEnvelope />,
    url: "mailto:aanshik16@gmail.com",
  },
];

function Footer() {
  return (
    <footer className="flex flex-col gap-20 md:gap-30 lg:gap-40 bg-background overflow-hidden pb-2 pt-16 md:pt-20 px-4 md:px-12">
      <div className="flex justify-between gap-6">
        <div className="flex flex-col gap-8">
          <h6 className="text-xl text-muted flex items-center gap-2">
            <span>Socials</span> <HiArrowUp className="rotate-45" />
          </h6>

          <ul className="grid md:flex items-center gap-3 md:gap-6 text-lg">
            {socials.map(({ id, label, icon, url }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  className={`
                    flex items-center gap-2
                    px-4 md:px-6 py-2 w-fit
                    hover:bg-dark-background hover:text-dark-foreground
                    ring rounded-full ring-foreground
                    transition ease-out duration-300
                  `}
                >
                  <span>{label}</span>
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 items-center group">
          <Link
            href={"/"}
            className="rounded-xl bg-dark-background text-dark-foreground p-4 cursor-pointer group-hover:-translate-y-1 transiton ease-out duration-300"
            title="Back to top"
          >
            <HiArrowUp />
          </Link>

          <span className="text-balance text-center">Back to top</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-end gap-6 max-md:text-xs">
        <span className="self-start">Designed and developed by —</span>

        <Image
          src="/logo.png"
          alt="logo"
          height={221}
          width={1440}
          className="w-full h-auto"
        />
      </div>
    </footer>
  );
}

export default Footer;
