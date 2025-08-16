import { NavLink } from "react-router";

import Button from "../ui/Button";

function Navbar() {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/blog", label: "Blog" },
    { path: "/terminal", label: "Terminal" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="bg-bg-base/50 backdrop-blur-lg fixed top-0 left-0 right-0">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between text-text-muted">
          <div className="title text-text-base">
            <NavLink to="/">{"<Aanshik />"}</NavLink>
          </div>

          <nav className="flex items-center gap-4">
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

            {/* Download Resume button */}
            <Button
              label="Resume"
              href="/resume.pdf"
              download="AanshikSharmaResume.pdf"
              className="border-1 border-primary text-primary hover:text-text-inverse hover:bg-primary hover:border-primary"
            />
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
