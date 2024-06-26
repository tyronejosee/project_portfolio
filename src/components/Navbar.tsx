import { Link } from "react-router-dom";
import { Bars2Icon } from "@heroicons/react/24/solid";

export function Navbar() {
  return (
    <nav className="max-w-screen-2xl px-4 py-2 w-full sticky top-0 z-50 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 shadow-b shadow">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="flex items-baseline space-x-3 rtl:space-x-reverse"
        >
          <span className="sm:hidden scroll-m-20 text-3xl font-bold tracking-tight dark:border-neutral-800">
            TY
          </span>
          <span className="hidden sm:block scroll-m-20 text-3xl font-bold tracking-tight dark:border-neutral-800">
            TYRONE.
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            className="inline-flex items-baseline transition-colors hover:text-neutral-100/80 text-neutral-100/60 bg-transparent"
            to="/bookmarks"
          >
            Bookmark
          </Link>
          <Link
            className="inline-flex items-baseline transition-colors hover:text-neutral-100/80 text-neutral-100/60 bg-transparent"
            to="/repositories"
          >
            Repositories
          </Link>
          <Bars2Icon className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}
