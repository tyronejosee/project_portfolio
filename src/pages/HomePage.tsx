import { FULL_NAME, ABOUT_ME } from "../constants";

import projectsData from "../data/projects.json";
import skillsData from "../data/skills.json";

export function HomePage() {
  const activeProjects = projectsData.filter((project) => project.status);
  const activeSkills = skillsData.filter((skill) => skill.status);

  return (
    <>
      {/* About Section */}
      <section className="section">
        <h2>
          <span className="section__title">About</span>
        </h2>
        <article className="box">
          <h3 className="text__bold">Hi my name is {FULL_NAME}</h3>
          <p>{ABOUT_ME}</p>
        </article>
      </section>

      {/* Project Section */}
      <section className="section">
        <h2>
          <span className="section__title">Projects</span>
        </h2>
        {activeProjects.map((project) => (
          <article key={project.id} className="project__grid">
            <figure className="project__img">
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="overflow-x-clip">
              <h3 className="text__bold">{project.name}</h3>
              <p className="block">{project.description}</p>
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500"
              >
                {project.repository}
              </a>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500"
              >
                {project.website}
              </a>
              <div className="flex space-x-2">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="block text-xs font-medium border rounded py-1 px-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Experiences Section */}
      <section className="section">
        <h2>
          <span className="section__title">Experiences</span>
        </h2>
        <article className="experience__grid">
          <div>
            <span>00-00-0000 - 00-00-0000</span>
          </div>
          <div className="col-span-2 space-y-4">
            <div>
              <h3 className="text__bold">Experience job title</h3>
              <span className="block text-neutral-500 text__medium">
                Experience company
              </span>
            </div>
            <p>Experience description</p>
            <span className="block text-neutral-500">
              Experience skills map
            </span>
          </div>
        </article>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills-section">
        <h2>
          <span className="section__title">Skills</span>
        </h2>
        <section className="skill__grid">
          {activeSkills.map((skill) => (
            <article className="p-4 h-28 flex flex-col justify-center items-center bg-neutral-200 dark:bg-neutral-800 hover:bg-chartreuse-400 hover:text-neutral-900 rounded-xl hover-scale transform hover:scale-105 group space-y-2">
              <img src={skill.icon} alt={skill.name} />
              <span className="text-xs font-bold">{skill.name}</span>
            </article>
          ))}
        </section>
      </section>

      {/* Contact Section */}
      <section className="section">
        <h2>
          <span className="section__title">Contact</span>
        </h2>
        <form method="POST" action="" className="form">
          <label className="form__label">
            <p className="text__bold">Name:</p>
            <input type="text" className="form__input form__input--text" />
          </label>
          <label className="form__label">
            <p className="text__bold">Email:</p>
            <input type="email" className="form__input form__input--text" />
          </label>
          <label className="form__label">
            <p className="text__bold">Message:</p>
            <input type="text" className="form__input form__input--textarea" />
          </label>
          <div className="flex space-x-4">
            <button type="reset" className="btn btn--secondary w-full">
              Clear Form
            </button>
            <button type="submit" className="btn btn--primary w-full">
              Send Message
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
