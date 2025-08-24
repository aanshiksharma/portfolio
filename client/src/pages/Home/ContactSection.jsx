import { Icon } from "../../components/ui/Button";
import TerminalContact from "./TerminalContact";

function ContactSection() {
  const baseClass = `
    ${"flex items-center justify-center gap-4"} 
    ${"p-4 rounded-2xl border-1 border-text-base/10"}
    ${"bg-surface shadow-sm shadow-[color:var(--color-white)]/5"}
    ${"hover:text-text-base hover:border-text-base/30"}
    ${"transition-all ease-out duration-300"}`;

  return (
    <section id="contact-section" className="">
      <div className="container max-w-4xl py-12 px-8 space-y-8">
        <h2 className="font-semibold text-3xl leading-10 text-text-base">
          Reach Out!
        </h2>

        <div className="flex flex-col gap-4">
          <div className="flex items-center flex-wrap gap-4">
            <a
              href="https://github.com/aanshiksharma"
              target="_blank"
              className={`${baseClass} aspect-[392/282] flex-1 hover:bg-black`}
            >
              <Icon icon="github" iconSize={40} />
              <span className="text-2xl font-bold">Github</span>
            </a>

            <a
              href="https://linkedin.com/in/aanshik-sharma"
              target="_blank"
              className={`${baseClass} aspect-[392/282] flex-1 hover:bg-linkedin-blue/60`}
            >
              <Icon icon="linkedin" iconSize={40} />
              <span className="text-2xl font-bold">LinkedIn</span>
            </a>
          </div>

          <div className="flex items-stretch flex-wrap gap-4">
            <div className="grid grid-cols-1 gap-4 flex-1 basis-20">
              <a
                href="tel:+918533041415"
                target="_blank"
                title="+91 85330 41415"
                className={`${baseClass} aspect-square hover:bg-accent/60`}
              >
                <Icon icon="telephone" iconSize={40} />
              </a>

              <a
                href=""
                target="_blank"
                className={`${baseClass} aspect-square hover:bg-whatsapp-green/60`}
              >
                <Icon icon="whatsapp" iconSize={40} />
              </a>
            </div>

            {/* Styling to be checked for bad code */}
            <a
              href="mailto:aanshik16@gmail.com"
              target="_blank"
              className={`${baseClass} flex-80 hover:bg-google-blue/60`}
            >
              <Icon icon="mail" iconSize={40} />
              <span className="text-2xl font-bold">aanshik16@gmail.com</span>
            </a>
          </div>
        </div>

        <TerminalContact />
      </div>
    </section>
  );
}

export default ContactSection;
