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
      <header className="bg-transparent">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between text-muted">
          <div className="title text-base">
            <NavLink to="/">{"<Aanshik />"}</NavLink>
          </div>

          <nav className="flex items-center gap-4">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  [
                    "transition duration-300 ease-out hover-text-base",
                    isActive && "text-base",
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                {label}
              </NavLink>
            ))}

            <Button
              type="button"
              label="Dark Mode"
              onClick={() => {
                document.querySelector("#root").classList.toggle("dark");
              }}
            />

            {/* Download Resume button */}
            <Button
              label="Resume"
              href="/resume.pdf"
              download="AanshikSharmaResume.pdf"
              className="border-1 border-teal-500 text-teal-500 hover:text-gray-50 hover:bg-teal-600 hover:border-teal-600"
            />
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
