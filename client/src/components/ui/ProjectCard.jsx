import { Link } from "react-router";

import SkillTag from "./SkillTag";
import { Icon } from "./Button";

function ProjectCard({
  name,
  description,
  technologies,
  links,
  projectsPageLink,
}) {
  if (projectsPageLink) {
    return (
      <Link
        to="/projects"
        style={{ width: "max(468px, 20vw)" }}
        className="border-1 rounded-lg flex items-center justify-center font-bold transition ease-out duration-300 border-text-base/10
        hover:text-text-base hover:border-text-base"
      >
        See all projects {"->"}
      </Link>
    );
  }

  return (
    <div className="space-y-4 border-1 border-text-base/10 rounded-lg max-w-117 p-4">
      <h4 className="text-xl leading-8 text-text-base font-bold">{name}</h4>
      <p className="leading-6">{description}</p>

      <div className="flex flex-wrap items-center gap-2">
        {technologies.map((skill) => (
          <SkillTag key={skill} title={skill} />
        ))}
      </div>

      <div className="flex items-center text-xs font-bold gap-4 project-card-link-container">
        <a
          href={links.site}
          target="_blank"
          className="transition ease-out duration-300 font-bold flex gap-2 items-center project-card-link"
        >
          <Icon icon="boxArrowUpRight" iconSize={20} />
          <span>View Live</span>
        </a>

        <a
          href={links.github}
          target="_blank"
          className="transition ease-out duration-300 font-bold flex gap-2 items-center project-card-link"
        >
          <Icon icon="github" iconSize={20} />
          <span>Source Code</span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
