import { HiArrowUp } from "react-icons/hi";

function ProjectCardData({ project }) {
  return (
    <article className="py-30 flex flex-col gap-50">
      <div className="px-12">
        <p className="text-2xl max-w-4xl text-dark-secondary leading-tight">
          {project.description}
        </p>
      </div>

      <div className="flex flex-col w-full max-w-5xl self-end">
        <div className="py-8 px-6 flex gap-4 items-start border-t border-dark-foreground/25">
          <h4 className="uppercase text-dark-secondary text-sm basis-1/4">
            Tech Stack
          </h4>
          <div className="flex flex-col items-start gap-1.5">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="font-medium text-dark-secondary hover:text-dark-primary transition ease-out duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {[
          { url: project.projectLink, label: "Live" },
          { url: project.githubLink, label: "GitHub" },
        ].map(({ url, label }, index) => (
          <div
            key={index}
            className={`py-8 px-6 flex gap-4 items-center ${
              index < 1 ? "border-t" : "border-y"
            } border-dark-foreground/25`}
          >
            <h4 className="uppercase text-dark-secondary text-sm basis-1/4">
              {label}
            </h4>

            <a
              href={url}
              target="_blank"
              className="flex items-center gap-2 text-dark-secondary hover:text-dark-primary transition ease-out duration-300 font-medium group"
            >
              <span>{url}</span>
              <HiArrowUp className="rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition ease-out duration-300" />
            </a>
          </div>
        ))}
      </div>
    </article>
  );
}

export default ProjectCardData;
