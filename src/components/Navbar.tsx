import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="max-w-screen-2xl px-4 py-2 w-full sticky top-0 z-50 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 shadow-b shadow">
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
        <div className="flex space-x-4">
          <button className="btn btn--secondary w-full">
            <Link to="/bookmarks">Bookmark</Link>
          </button>
          <button className="btn btn--primary">Contact</button>
        </div>
      </div>
    </nav>
  );
}
