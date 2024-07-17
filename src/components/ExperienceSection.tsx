export const ExperienceSection = () => {
  return (
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
  )
}

