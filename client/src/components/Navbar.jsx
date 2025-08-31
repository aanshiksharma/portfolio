import { useRef } from "react";
import { NavLink } from "react-router";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Button from "./ui/Button";

function Navbar() {
  const navbarRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".navbar-animation", {
        autoAlpha: 0,
        y: 10,
        duration: 0.3,
        stagger: 0.2,
        delay: 0.2,
      });
    },
    { scope: navbarRef }
  );

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/terminal", label: "Terminal" },
    { path: "/blog", label: "Blog" },
  ];

  return (
    <>
      <header className="bg-bg-base/20 backdrop-blur-lg border-b-1 border-white/10 fixed z-40 top-0 left-0 right-0">
        <div
          ref={navbarRef}
          className="container max-w-5xl mx-auto px-4 py-2 flex items-center justify-between text-text-muted"
        >
          <div className="navbar-animation title text-text-base">
            <div className="border-div h-0.5 bg-accent w-0"></div>
            <NavLink to="/">{"<Aanshik />"}</NavLink>
          </div>

          <nav className="flex items-center gap-4 text-sm navbar-animation">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  [
                    "transition duration-300 ease-out hover:text-text-base",
                    isActive && "text-text-base",
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Download Resume button */}
          <div className="navbar-animation">
            <Button
              label="Resume"
              href="/resume.pdf"
              icon="download"
              iconSize={12}
              download="AanshikSharmaResume.pdf"
              className="border-1 text-sm 
            border-text-muted text-text-muted 
            hover:text-text-base hover:bg-bg-base-alt hover:border-bg-base-alt"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
