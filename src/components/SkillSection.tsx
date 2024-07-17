interface Skill {
  id: string;
  name: string;
  icon: string;
  status: boolean;
}

interface Props {
  skills: Skill[];
}

export const SkillSection = ({ skills }: Props) => {
  const activeSkills = skills.filter(skill => skill.status);

  return (
    <section className="space-y-4">
      <h2 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Skills
      </h2>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-12 gap-2">
        {activeSkills.map((skill) => (
          <article
            key={skill.id}
            className="flex justify-center items-center bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-chartreuse-400 rounded-full hover-scale transform hover:scale-105 group h-16"
          >
            <img src={skill.icon} alt={skill.name} width={30} height={30} />
          </article>
        ))}
      </div>
    </section>
  )
}
