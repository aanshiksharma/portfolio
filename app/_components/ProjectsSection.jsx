import { useState } from "react";

import { useHeadingAnimation } from "../hooks/projectAnimations";

import ProjectCard from "./ProjectsSection/ProjectCard";

function ProjectsSection({ projects }) {
  useHeadingAnimation();

  return (
    <section id="projects">
      <div className="sticky -top-1/8 md:-top-1/4 h-[60vh] md:h-screen flex items-center justify-center bg-background overflow-hidden">
        <h2 className="text-[15vw] md:text-[9vw] text-center font-semibold tracking-tight uppercase flex max-md:flex-col items-center md:gap-6">
          <span className="fromLeft relative">Featured</span>
          <span className="fromRight relative">Projects</span>
        </h2>
      </div>

      <section className="relative z-1 flex flex-col bg-dark-background px-4 lg:px-12 max-lg:py-20 max-lg:gap-20">
        {projects.length > 0 ? (
          projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                rightToLeft={index % 2 !== 0}
              />
            ))
        ) : (
          <div className="min-h-[30vh] flex flex-col gap-6 items-center justify-center text-dark-foreground px-4">
            <h2 className="text-2xl">No projects found.</h2>
            <div className="space-y-2 text-center">
              <p>
                Go to{" "}
                <a
                  target="_blank"
                  href="https://portfolio-manager-cms.vercel.app"
                  className="hover:underline hover:text-primary transition ease-out duration-300"
                >
                  Portfolio CMS
                </a>{" "}
                to add a project.
              </p>
              <p className="text-dark-muted">
                This could also be due to an error in the backend.
              </p>
            </div>
          </div>
        )}
      </section>
    </section>
  );
}

export default ProjectsSection;
