import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="max-w-screen-2xl px-4 py-2 w-full fixed top-0 z-50 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 shadow-b shadow">
      <div className="navbar__content">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="scroll-m-20 text-3xl font-bold tracking-tight dark:border-neutral-800">
            TYRONE
          </span>
          <span className="text-xs font-bold tracking-tight dark:border-neutral-800">
            Portfolio
          </span>
        </Link>
        {/* <search className="w-1/3 relative">
          <form method="GET" action="#">
            <input
              type="search"
              id="search-navbar"
              className="h-10 p-4 border dark:border-neutral-700 dark:hover:border-neutral-500 bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-800 focus:bg-neutral-300 dark:focus:bg-neutral-700 placeholder:text-neutral-600 w-full rounded-xl focus:outline-none focus:ring focus:ring-chartreuse-400 text-center focus:text-left focus:pl-12 transition-all ease-in"
              placeholder="Search..."
              name="search"
              // value=""
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
        </search> */}
        <div className="flex space-x-4">
          {/* <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-chartreuse-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-chartreuse-800"></div>
          </label> */}
          <button className="btn btn--secondary w-full">
            <Link to="/bookmarks">Bookmark</Link>
          </button>
          <button className="btn btn--primary">Contact</button>
        </div>
      </div>
    </nav>
  );
}
