import { useEffect, useState } from "react";

import {
  useBackgroundAnimation,
  useHeadingAnimation,
} from "../hooks/projectAnimations";

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
      <div className="sticky -top-1/3 h-screen flex items-center justify-center bg-background overflow-hidden">
        <h2 className="text-[9dvw] text-center font-semibold tracking-tight uppercase flex items-center gap-2 md:gap-6">
          <span className="fromLeft relative">Featured</span>
          <span className="fromRight relative">Projects</span>
        </h2>
      </div>

      <div className="relative z-1 flex flex-col bg-dark-background px-4 lg:px-12">
        {loading ? (
          <h4 className="text-2xl text-center text-dark-foreground">
            Loading Projects...
          </h4>
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
