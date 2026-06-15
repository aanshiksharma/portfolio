import { useEffect, useState } from "react";

import { useHeadingAnimation } from "../hooks/projectAnimations";

import ProjectCard from "./ProjectsSection/ProjectCard";
import projects from "@/data/projects.json";

function ProjectsSection() {
  // const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  // const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  useHeadingAnimation();

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const res = await fetch(`${BACKEND_URL}/api/projects`);
  //       const data = await res.json();
  //       setProjects(data);
  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  return (
    <section id="projects">
      <div className="sticky -top-1/8 md:-top-1/3 h-[60vh] md:h-screen flex items-center justify-center bg-background overflow-hidden">
        <h2 className="text-[15vw] md:text-[9vw] text-center font-semibold tracking-tight uppercase flex max-md:flex-col items-center md:gap-6">
          <span className="fromLeft relative">Featured</span>
          <span className="fromRight relative">Projects</span>
        </h2>
      </div>

      <div className="relative z-1 flex flex-col bg-dark-background px-4 lg:px-12 max-lg:py-20 max-lg:gap-20">
        {loading ? (
          <p>Loading Projects...</p>
        ) : (
          projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              rightToLeft={index % 2 !== 0}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
