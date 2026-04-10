import {
  useBackgroundAnimation,
  useHeadingAnimation,
} from "../hooks/projectAnimations";

import ProjectCard from "./ProjectsSection/ProjectCard";
import projects from "@/data/projects.json";

function ProjectsSection() {
  useBackgroundAnimation();
  useHeadingAnimation();

  return (
    <section id="projects" className="">
      <div className="py-55 flex items-center justify-center">
        <h2 className="text-[9rem] text-center font-semibold tracking-tight uppercase flex items-center gap-6">
          <span className="fromLeft relative">Featured</span>
          <span className="fromRight relative">Projects</span>
        </h2>
      </div>

      <div className="flex flex-col gap-15">
        {projects.map((project) => (
          <ProjectCard key={project._id.$oid} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
