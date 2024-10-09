import React from "react";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillsCarousel from "../components/SkillsCarousel";

function Home() {
  return (
    <div>
      <Navbar />
      <body>
        <section className="hero wrapper-1">
          Hero Section
        </section>
        <section className="about wrapper-1">About Me</section>
          <SkillsCarousel />
        <section className="projects wrapper-1">Projects</section>
      </body>
      <Footer />
    </div>
  );
}

export default Home;
