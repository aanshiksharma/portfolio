"use client";

import { useSidebarNavigation } from "@/app/hooks/useSidebarNavigation";
import navs from "./navlinks.data.json";
import Link from "next/link";
import { HiX } from "react-icons/hi";

function SidebarNav() {
  const { closeSidebar } = useSidebarNavigation();

  return (
    <div
      id="sidebar-container"
      className="fixed bg-background/30 backdrop-blur-md z-20 inset-0 flex justify-end [@media(hover:hover)]: translate-x-full opacity-0"
    >
      <div
        id="sidebar"
        className="w-4/5 pl-4 pr-6 py-4 flex flex-col bg-background/30 backdrop-blur-md shadow-2xl shadow-dark-background/20"
      >
        <button onClick={closeSidebar} className="self-end">
          <HiX size={24} />
        </button>

        <ul className="text-xl font-medium text-secondary grid gap-1">
          {navs.map((nav, index) => (
            <li key={index}>
              <Link href={nav.url} className="block p-3">
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SidebarNav;
