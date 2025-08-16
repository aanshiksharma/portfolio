import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/ui/Button";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero-section" className="bg-gradient-custom max-h-195">
          <div className="flex-1 flex flex-col justify-center items-center text-center gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl leading-9 font-semibold">
                  Hey, I'm{" "}
                  <span className="text-primary text-2xl font-bold">
                    Aanshik
                  </span>
                </h3>
                <h1 className="text-5xl leading-16 font-bold">
                  Web Developer and Programmer
                </h1>
              </div>
              <div className="text-text-muted leading-7">
                <p>If you can imagine it, I can build it!</p>
                <p>Let's code your imagination into reality.</p>
              </div>
            </div>

            <Button
              label="Download Resume"
              className="pt-2 pb-2.5 px-6 leading-5 flex items-center justify-center bg-primary hover:bg-transparent border-2 border-primary hover:text-primary "
            />
          </div>
        </section>

        <section id="about-section" className="">
          About
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
