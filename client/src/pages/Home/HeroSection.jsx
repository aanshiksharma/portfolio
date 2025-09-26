import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Components
import Button from "../../components/ui/Button";
import { Icon } from "../../components/ui/Button";

function HeroSection() {
  useGSAP(() => {
    gsap.from(".hero-section-gsap-animation", {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.1,
    });
  }, []);

  return (
    <section id="hero-section" className="relative bg-gradient-custom">
      <div className="container max-w-4xl mt-12 px-8 py-12 space-y-8">
        <div className="profile-tag flex items-center justify-between">
          <div className="left flex items-center gap-4">
            <div className="w-20 hero-section-gsap-animation h-20 rounded-full overflow-hidden">
              <img src="/adminImage.jpg" alt="" className="w-full h-full" />
            </div>

            <div className="profile-text space-y-1">
              <h1 className="hero-section-gsap-animation text-2xl text-text-base font-semibold leading-9">
                👋 Hi, I'm Aanshik
              </h1>
              <p className="hero-section-gsap-animation text-sm leading-6">
                Web Developer | B.Tech Student at JSSATE, Noida
              </p>
            </div>
          </div>

          <div className="right flex items-center gap-3">
            <a
              href="mailto:aanshik16@gmail.com"
              className="hero-section-gsap-animation hover:text-text-base transition-colors duration-300 ease-out"
            >
              <Icon icon="mail" iconSize={24} />
            </a>

            <a
              href="https://linkedin.com/in/aanshik-sharma"
              className="hero-section-gsap-animation hover:text-linkedin-blue transition-colors duration-300 ease-out"
            >
              <Icon icon="linkedin" iconSize={24} />
            </a>

            <a
              href="https://github.com/aanshiksharma"
              className="hero-section-gsap-animation hover:text-text-base transition-colors duration-300 ease-out"
            >
              <Icon icon="github" iconSize={24} />
            </a>

            <a
              href="/resume.pdf"
              download="AanshikSharmaResume.pdf"
              className="hero-section-gsap-animation hover:text-text-base transition-colors duration-300 ease-out"
            >
              <Icon icon="fileearmarkarrowdown" iconSize={24} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <p className="hero-section-gsap-animation">
            I am a{" "}
            <span className="text-text-base">Full Stack Web Developer</span>{" "}
            (front-end focused) specializing in building scalable, feature-rich
            applications with strong attention to detail.
          </p>

          <p className="hero-section-gsap-animation">
            My work incorporates technologies like the{" "}
            <span className="text-text-base">
              MERN Stack, TailwindCSS, Redux Toolkit, GSAP, Sass
            </span>{" "}
            and <span className="text-text-base">Bootstrap</span>, to deliver
            efficient workflows and seamless user-experiences.
          </p>
        </div>

        <div className="hero-section-gsap-animation flex gap-4">
          <Button
            href="/resume.pdf"
            icon="download"
            label="Resume"
            download="AanshikSharmaResume.pdf"
            className="py-2 px-6 leading-5 border-2
              border-text-base text-text-base
              hover:bg-bg-base-alt"
          />

          <Button
            href="#projects-section"
            label="Explore Projects"
            className="py-2 px-4 hover:text-text-base"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
