import { FULL_NAME, ABOUT_ME } from "../constants";

export function HomePage() {
  return (
    <>
      <section className="section">
        <h2>
          <span className="section__title">About</span>
        </h2>
        <article className="box">
          <h3 className="text__bold">Hi my name is {FULL_NAME}</h3>
          <p>{ABOUT_ME}</p>
        </article>
      </section>

      <section className="section">
        <h2>
          <span className="section__title">Projects</span>
        </h2>
        <article className="project__grid">
          <figure className="project__img">
            <img src="" alt="" className="object-cover w-full h-full" />
          </figure>
          <div className="overflow-x-clip">
            <h3 className="text__bold">Project title</h3>
            <span className="block">Project description</span>
            <span className="block">Project repository</span>
            <span className="block">Project website</span>
          </div>
        </article>
      </section>

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

      <section className="section" id="skills-section">
        <h2>
          <span className="section__title">Skills</span>
        </h2>
        <section className="skill__grid">
          <article className="p-4 h-28 flex flex-col justify-center items-center bg-neutral-200 dark:bg-neutral-800 hover:bg-chartreuse-400 hover:text-neutral-900 rounded-xl hover-scale transform hover:scale-105 group space-y-2">
            Skill icon
            <span className="text-xs font-bold">Skill name</span>
          </article>
        </section>
      </section>

      <section className="section">
        <h2>
          <span className="section__title">Contact</span>
        </h2>
        <form method="POST" action="" className="form">
          <label className="form__label">
            <p className="text__bold">Name:</p>
            <input type="text" />
          </label>
          <label className="form__label">
            <p className="text__bold">Email:</p>
            <input type="text" />
          </label>
          <label className="form__label">
            <p className="text__bold">Message:</p>
            <input type="text" />
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
