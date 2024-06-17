import { FULL_NAME, ABOUT_ME, GMAIL, GITHUB, LINKEDIN } from "../constants";
import { Button } from "../components/Button";
import projectsData from "../data/projects.json";
import skillsData from "../data/skills.json";

import signature from "/svg/signature_example.svg";
// import profile from "/profile.png";
// import scrollDown from "/scroll-down.gif";

export function HomePage() {
  const activeProjects = projectsData.filter((project) => project.status);
  const activeSkills = skillsData.filter((skill) => skill.status);

  return (
    <>
      {/* About Section */}
      <section className="">
        <div className="grid grid-cols-2 gap-8 h-[560px] items-center relative">
          <article className="z-10 space-y-2">
            <span className="text-lg font-medium leading-tight">
              Portfolio / About
            </span>
            <h2 className="scroll-m-20 text-4xl font-bold tracking-tight border-b dark:border-neutral-800 pb-6">
              Hello, Im <span className="text-chartreuse-500">{FULL_NAME}</span>
            </h2>
            <p className="text-neutral-500">{ABOUT_ME}</p>
            <img src={signature} alt="Signature" className="w-52" />
            <div className="flex">
              <a
                href={GMAIL}
                className="p-4 hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-chartreuse-400 items-center rounded-xl"
                target="_blank"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
              </a>
              <a
                href={LINKEDIN}
                className="p-4 hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-chartreuse-400 items-center rounded-xl"
                target="_blank"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={GITHUB}
                className="p-4 hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-chartreuse-400 items-center rounded-xl"
                target="_blank"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </article>
          <figure className="overflow-hidden rounded-3xl border dark:border-neutral-800 dark:hover:border-neutral-500 hover:shadow-2xl dark:hover:shadow-chartreuse-500 transition-all ease-in-out">
            <img src="/profile.png" alt="Profile" />
          </figure>
        </div>
        <div className="flex justify-center animate-pulse opacity-80">
          <img className="h-20" src="/scroll-arrows.gif" alt="Scroll Down" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-4">
        <h2 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Skills
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-12 gap-2">
          {activeSkills.map((skill) => (
            <article className="flex justify-center items-center bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-chartreuse-400 rounded-full hover-scale transform hover:scale-105 group h-16">
              <img src={skill.icon} alt={skill.name} width={30} height={30} />
            </article>
          ))}
        </div>
      </section>

      {/* Project Section */}
      <section className="section">
        <h2 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Projects
        </h2>
        {activeProjects.map((project) => (
          <article
            key={project.id}
            className="group grid grid-cols-1 sm:grid-cols-2 gap-4 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 border dark:border-neutral-800 dark:hover:border-neutral-500 rounded-xl p-2 hover:transition-all duration-300"
          >
            <div className="overflow-x-clip p-4 space-y-4">
              <h3 className="text-lg font-medium leading-tight">
                {project.name}
              </h3>
              <p className="text-sm text-neutral-500">{project.description}</p>
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:underline"
              >
                Repository
              </a>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:underline"
              >
                Website
              </a>
              <Button variant="primary">Website</Button>
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
            <figure className="rounded-xl overflow-hidden border dark:border-neutral-500 aspect-video">
              <img
                src={project.image}
                alt={project.name}
                className="group-hover:scale-110 transition-all ease-in-out"
              />
            </figure>
          </article>
        ))}
      </section>

      {/* Experiences Section */}
      <section className="space-y-4">
        <h2 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Experiences
        </h2>
        <article className="border-t dark:border-neutral-800 p-4 hover:transition-all duration-300 grid grid-cols-3 gap-4">
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
    </>
  );
}
