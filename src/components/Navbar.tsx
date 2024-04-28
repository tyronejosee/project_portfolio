export function Navbar() {
  return (
    <nav className="navbar">
      <section className="navbar__content">
        <div className="w-1/3">
          <div className="flex items-center space-x-2">
            <figure className="bg-neutral-800 h-10 w-10 rounded-md flex items-center justify-center">
              <img src="#logo" alt="Logo" className="w-6 h-6" />
            </figure>
            <a href="#landing_view" className="text__bold">
              José Reyes
            </a>
          </div>
        </div>
        <div className="w-1/3 relative">
          <form method="GET" action="#">
            <input
              type="search"
              id="search-navbar"
              className="form__input-text text-center focus:text-left focus:pl-12 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              placeholder="What topic are you interested in?"
              name="search"
              value="#"
            />
            <div className="absolute rounded-full inset-y-0 left-0 p-4 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </form>
        </div>

        <div className="flex space-x-4">
          <div className="flex space-x-4">
            <button>Theme</button>
          </div>
          <a
            href="#cv_link"
            role="button"
            target="_blank"
            className="btn btn--primary"
          >
            Download CV
          </a>
        </div>
      </section>
    </nav>
  );
}
