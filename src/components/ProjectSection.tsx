import { Button } from "../components";

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  repository: string;
  website: string;
  skills: string[];
  status: boolean;
}

interface Props {
  projects: Project[];
}

export const ProjectSection = ({ projects }: Props) => {
  const activeProjects = projects.filter(project => project.status);

  return (
    <section className="section">
      <h2 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Projects
      </h2>
      {activeProjects.map((project) => (
        <article
          key={project.id}
          className="group grid grid-cols-1 sm:grid-cols-2 gap-4 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 border dark:border-neutral-800 dark:hover:border-neutral-500 rounded-xl p-2 hover:transition-all duration-300"
        >
          <div className="inline-flex flex-col space-y-2 p-4">
            <h3 className="text-lg font-medium leading-tight border-b border-neutral-700 pb-2">
              {project.name}
            </h3>
            <p className="text-sm text-neutral-500 h-14">
              {project.description}
            </p>
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
            <div className="flex space-x-2">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="block text-xs border border-neutral-700 rounded py-1 px-2"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="pt-4 space-x-2">
              <Button variant="primary">Website</Button>
              <Button variant="secondary">Github repo</Button>
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
  )
}

