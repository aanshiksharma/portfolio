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
      <div
        style={{ width: "max(468px, 20vw)" }}
        className="border-1 border-text-base/10 rounded-lg flex items-center justify-center"
      >
        <Link
          to="/projects"
          className="font-bold transition ease-out duration-300 hover:text-text-base"
        >
          See all projects {"->"}
        </Link>
      </div>
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

      <div className="flex items-center text-xs font-bold gap-4">
        <a
          href={links.site}
          className="hover:text-text-base transition ease-out duration-300 font-bold flex gap-2 items-center"
        >
          <Icon icon="boxArrowUpRight" iconSize={20} />
          <span>View Live</span>
        </a>

        <a
          href={links.github}
          className="hover:text-text-base transition ease-out duration-300 font-bold flex gap-2 items-center"
        >
          <Icon icon="github" iconSize={20} />
          <span>Source Code</span>
        </a>

        <Link
          to={links.readMore}
          className="hover:text-text-base transition ease-out duration-300 font-bold flex gap-2 items-center"
        >
          {"Read More -->"}
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
