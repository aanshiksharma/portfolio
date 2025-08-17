import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import { Icon } from "../components/ui/Button";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero-section" className="relative bg-gradient-custom">
          <div className="container mx-auto mt-12 px-8 py-12 space-y-8">
            <div className="profile-tag flex items-center justify-between">
              <div className="left flex items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img src="/adminImage.jpg" alt="" className="w-full h-full" />
                </div>

                <div className="profile-text space-y-1">
                  <h1 className="text-2xl text-text-base font-semibold leading-9">
                    Hi, I'm Aanshik
                  </h1>
                  <p className="text-sm leading-6">
                    Web Developer | B.Tech Student at JSSATE, Noida
                  </p>
                </div>
              </div>

              <div className="right flex items-center gap-4">
                <a
                  href="mailto:aanshik16@gmail.com"
                  className="hover:text-text-base transition-colors duration-300 ease-out"
                >
                  <Icon icon="mail" iconSize={24} />
                </a>

                <a
                  href="https://linkedin.com/in/aanshik-sharma"
                  className="hover:text-linkedin-blue transition-colors duration-300 ease-out"
                >
                  <Icon icon="linkedin" iconSize={24} />
                </a>

                <a
                  href="https://github.com/aanshiksharma"
                  className="hover:text-text-base transition-colors duration-300 ease-out"
                >
                  <Icon icon="github" iconSize={24} />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <p>
                I am a{" "}
                <span className="text-text-base">Full Stack Web Developer</span>{" "}
                (front-end focused) specializing in building scalable,
                feature-rich applications with strong attention to detail.
              </p>

              <p>
                My work incorporates technologies like the{" "}
                <span className="text-text-base">
                  MERN Stack, TailwindCSS, Redux Toolkit, GSAP, Sass
                </span>{" "}
                and <span className="text-text-base">Bootstrap</span>, to
                deliver efficient workflows and seamless user-experiences.
              </p>
            </div>

            <Button
              href="/resume.pdf"
              icon="download"
              label="Resume"
              download="AanshikSharmaResume.pdf"
              className="py-2 px-6 w-fit leading-5 border-2
              border-text-muted hover:border-text-base hover:text-text-base"
            />
          </div>
        </section>

        <section id="skills-section" className="">
          Skills
        </section>

        <section
          id="projects-section"
          className="bg-bg-base-light text-text-inverse"
        >
          Projects
        </section>

        <section id="socials-section" className="">
          Socials
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
