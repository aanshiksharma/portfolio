import React from "react";

import "../scss/home.scss";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillsCarousel from "../components/SkillsCarousel";

function Home() {
  return (
    <div>
      <Navbar select={"portfolio"} />
      <main>
        <section className="hero">
          <div className="flex wrapper-1">
            <h1>Hi, I'm Aanshik Sharma!</h1>
            <p>A Web Developer and Programmer in making</p>
          </div>
        </section>
        <section className="about wrapper-1">About Me</section>
        <SkillsCarousel />
        <section className="projects wrapper-1">Projects</section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
