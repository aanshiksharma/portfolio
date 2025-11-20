import ProjectCardData from "./ProjectCardData";
import ProjectCardCover from "./ProjectCardCover";

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col gap-10">
      <ProjectCardCover project={project} />
      <ProjectCardData project={project} />
    </div>
  );
}

export default ProjectCard;
