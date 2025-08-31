import { Link } from "react-router";
import ProjectCard from "../../components/ui/ProjectCard";

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      name: "Windows Web",
      description:
        "A web-based recreation of the Windows 11 OS desktop experience, built with React, Redux, and Tailwind CSS, while using GSAP for animations.",
      technologies: ["React.js", "Tailwind CSS", "GSAP", "Redux TK"],
      links: {
        github: "https://github.com/aanshiksharma/windows-web",
        site: "https://windows-web-os.vercel.app",
      },
    },
    {
      id: 2,
      name: "Portfolio Website",
      description:
        "This very website, was created on React and all the data is being fetched from MongoDB. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      technologies: ["React.js", "Tailwind CSS", "GSAP"],
      links: {
        github: "https://github.com/aanshiksharma/portfolio",
        site: "/",
      },
    },
    {
      id: 3,
      name: "Snake Game",
      description:
        "A modern twist on the classic Snake Game built with HTML, CSS, and JavaScript. Features smooth controls, responsive design.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      links: {
        github: "https://github.com/aanshiksharma/Snake-Game",
        site: "https://aanshiksharma.github.io/Snake-Game",
      },
    },
  ];

  return (
    <section id="projects-section" className="">
      <div className="container max-w-5xl px-8 py-12 space-y-8">
        <h2 className="font-semibold text-3xl leading-10 text-text-base">
          Selected Work
        </h2>

        <div className="flex flex-wrap gap-4">
          {projects.map((project, index) => {
            if (index > 2) return;
            return (
              <ProjectCard
                key={project.id}
                {...project}
                projectsPageLink={false}
              />
            );
          })}

          <ProjectCard projectsPageLink={true} />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
