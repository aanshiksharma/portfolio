import { useEffect, useState } from "react";

import {
  useBackgroundAnimation,
  useHeadingAnimation,
} from "../hooks/projectAnimations";

import ProjectCard from "./ProjectsSection/ProjectCard";
// import projects from "@/data/projects.json";

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  console.log(BACKEND_URL);
  useBackgroundAnimation();
  useHeadingAnimation();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/projects`);
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="">
      <div className="py-55 flex items-center justify-center">
        <h2 className="text-[9rem] text-center font-semibold tracking-tight uppercase flex items-center gap-6">
          <span className="fromLeft relative">Featured</span>
          <span className="fromRight relative">Projects</span>
        </h2>
      </div>

      <div className="flex flex-col gap-15">
        {loading ? (
          <h4 className="text-2xl text-center text-background">
            Loading Projects...
          </h4>
        ) : (
          projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
