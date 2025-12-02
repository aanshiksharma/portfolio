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
    <footer className="flex flex-col gap-30 bg-background overflow-hidden pt-20 px-12">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h6 className="text-xl text-muted flex items-center gap-2">
            <span>Socials</span> <HiArrowUp className="rotate-45" />
          </h6>

          <ul className="flex items-center gap-6 text-lg text-primary">
            {socials.map(({ id, label, icon, url }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  className={`flex items-center gap-2 hover:bg-primary hover:text-dark-primary transition ease-out duration-300 ring rounded-full ring-primary px-6 py-2`}
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
            className="rounded-xl bg-dark-background text-dark-primary text-lg p-4 cursor-pointer group-hover:-translate-y-1 transiton ease-out duration-300"
            title="Back to top"
          >
            <HiArrowUp />
          </Link>
          <span>Back to top</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-end">
        <span className="self-start">Designed and developed by —</span>
        <h1 className="text-[18rem] text-primary/90 leading-none tracking-tighter font-light -mb-6">
          aanshik
          <span className="text-9xl text-primary/35 bg-clip-text font-medium tracking-tight">
            {""}
            sharma
          </span>
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
