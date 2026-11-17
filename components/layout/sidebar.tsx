"use client";

import { useSidebarNavigation } from "@/hooks/useSidebarNavigation";
import { navigationLinks } from "@/features/navigation";
import Link from "next/link";
import { HiX } from "react-icons/hi";
import { PublicProfile } from "@/types";

type Props = { profile: PublicProfile };

export function Sidebar({ profile }: Props) {
  const { closeSidebar } = useSidebarNavigation();

  return (
    <div
      id="sidebar-container"
      className="fixed bg-background/30 backdrop-blur-md z-20 inset-0 flex justify-end [@media(hover:hover)]: translate-x-full opacity-0"
    >
      <div
        id="sidebar"
        className="w-4/5 pl-4 pr-6 py-4 flex flex-col gap-1 bg-background/30 backdrop-blur-md shadow-2xl shadow-dark-background/20"
      >
        <button onClick={closeSidebar} className="self-end">
          <HiX size={24} />
        </button>

        <nav>
          <ul className="text-xl font-medium text-secondary grid gap-1">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.url} className="block p-3">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <hr className="my-2 border-muted/50" />

        <a
          href={profile.resumeLink}
          target="_blank"
          className={`
            resumeLink p-3 rounded-xl
            text-xl font-medium text-secondary
          `}
        >
          Resume
        </a>
      </div>
    </div>
  );
}
