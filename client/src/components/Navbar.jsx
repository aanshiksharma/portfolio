import { NavLink } from "react-router";

import Button from "./ui/Button";

function Navbar() {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/terminal", label: "Terminal" },
    { path: "/blog", label: "Blog" },
  ];

  return (
    <>
      <header className="bg-bg-base/20 backdrop-blur-lg border-b-1 border-white/10 fixed z-40 top-0 left-0 right-0">
        <div className="container max-w-5xl mx-auto px-4 py-2 flex items-center justify-between text-text-muted">
          <div className="title text-text-base">
            <NavLink to="/">{"<Aanshik />"}</NavLink>
          </div>

          <nav className="flex items-center gap-4 text-sm">
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
          <Button
            label="Resume"
            href="/resume.pdf"
            icon="download"
            iconSize={12}
            download="AanshikSharmaResume.pdf"
            className="border-1 text-sm border-text-muted text-text-muted hover:text-text-base hover:bg-bg-base-alt hover:border-bg-base-alt"
          />
        </div>
      </header>
    </>
  );
}

export default Navbar;
