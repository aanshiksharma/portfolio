import { Icon } from "./ui/Button";

function Footer() {
  return (
    <>
      <footer className="bg-bg-base-alt text-text-muted">
        <div className="container max-w-5xl mx-auto px-4 py-12 flex flex-col items-center gap-2 h-full">
          <p>Made from scratch with React, TailwindCSS and GSAP.</p>
          <p className="flex self-center items-center gap-2">
            <Icon icon="copyright" />
            <span>2025 Aanshik Sharma</span>
          </p>

          <ul className="flex items-center gap-2">
            <li>
              <a
                href="mailto:aanshik16@gmail.com"
                className="hover:text-text-base transition ease-out duration-300"
              >
                <Icon icon="mail" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aanshiksharma"
                className="hover:text-text-base transition ease-out duration-300"
              >
                <Icon icon="github" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/aanshik-sharma"
                className="hover:text-text-base transition ease-out duration-300"
              >
                <Icon icon="linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
