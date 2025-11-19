import ProjectCard from "./ProjectsSection/ProjectCard";
import projects from "@/data/projects.json";

function ProjectsSection() {
  return (
    <section id="projects" className="">
      <div className="py-55 flex items-center justify-center">
        <h2 className="text-5xl text-center">Featured Projects</h2>
      </div>

      <div className="flex flex-col gap-15">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
