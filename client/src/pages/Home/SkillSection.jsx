import SkillTag from "../../components/ui/SkillTag";

function SkillSection() {
  const skills = {
    frontend: ["React.js", "Tailwind CSS", "GSAP", "Redux TK", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "MongoDB"],
    languages: ["JavaScript", "Java", "C language", "Python"],
    tools: ["Git", "GitHub", "VS Code", "Sass", "Vite"],
  };

  return (
    <section id="skills-section" className="">
      <div className="container max-w-4xl py-12 px-8 space-y-8">
        <h2 className="font-semibold text-3xl leading-10 text-text-base">
          Skills
        </h2>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          <div className="space-y-3">
            <h3 className="text-xl leading-6">Frontend Technologies ⚡</h3>
            <ul className="flex items-center flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <li key={skill}>
                  <SkillTag title={skill} />
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl leading-6">Backend Technologies 🛠️</h3>

            <ul className="flex items-center flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <li key={skill}>
                  <SkillTag title={skill} />
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl leading-6">Programming Languages 💻</h3>

            <ul className="flex items-center flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <li key={skill}>
                  <SkillTag title={skill} />
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl leading-6">Tools and Technologies 🧩</h3>

            <ul className="flex items-center flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <li key={skill}>
                  <SkillTag title={skill} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
