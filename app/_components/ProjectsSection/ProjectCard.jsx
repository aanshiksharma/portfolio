import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";

const styles = {
  linksContainer:
    "[@media(hover:none)]:grid lg:flex grid-cols-2 md:grid-cols-2 items-center gap-2 md:gap-6",
  links: {
    base: `
      group flex items-center [@media(hover:none)]:justify-center gap-2
      [@media(hover:hover)]:text-dark-muted whitespace-nowrap text-sm
      transition ease-out duration-300
      [@media(hover:none)]:py-2.5 rounded-xl
    `,
    primary: `
      text-dark-foreground [@media(hover:hover)]:hover:text-primary [@media(hover:none)]:bg-primary
    `,
    secondary: `
      text-dark-secondary [@media(hover:hover)]:hover:text-dark-foreground [@media(hover:none)]:bg-secondary
    `,
  },
  icons: "transition ease-out duration-300",
};

function ProjectCard({ project, rightToLeft = false }) {
  return (
    <div
      className={`
        flex flex-wrap lg:items-end gap-8 max-lg:flex-col-reverse
        ${rightToLeft && "flex-row-reverse"}
        text-dark-foreground
        [@media(hover:hover)]:min-h-screen lg:py-32
      `}
    >
      <div className="basis-sm space-y-8 max-lg:px-4">
        <div className="space-y-4">
          <h2 className="text-2xl">{project.title}</h2>
          <p className="leading-relaxed text-dark-secondary text-pretty line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-y-2 gap-x-6 text-dark-muted text-xs">
          {project.skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>

        <div className={styles.linksContainer}>
          <a
            className={styles.links.base + styles.links.secondary}
            target="_blank"
            href={project.githubLink}
          >
            <span>Github</span>
            <BsGithub className={`${styles.icons} group-hover:rotate-360`} />
          </a>

          <a
            className={styles.links.base + styles.links.secondary}
            target="_blank"
            href={project.projectLink}
          >
            <span>View Live</span>
            <HiArrowRight
              className={`${styles.icons} -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
            />
          </a>

          {/* <a
            className={`${styles.links.base} ${styles.links.primary} max-md:col-span-2`}
            href="#"
          >
            <span>Read More</span>
            <HiArrowRight
              className={`${styles.icons} group-hover:translate-x-0.5`}
            />
          </a> */}
        </div>
      </div>

      <div className="flex-1 w-full aspect-video bg-dark-secondary/5 max-lg:basis-1/2 rounded-2xl overflow-hidden shadow hover:shadow-lg shadow-dark-surface/50 transition-shadow ease-out duration-300">
        <Image
          src={project.coverImage.url}
          alt={`${project.title} image`}
          width={500}
          height={40}
          className="object-cover object-top w-full h-auto"
        />
      </div>
    </div>
  );
}

export default ProjectCard;
