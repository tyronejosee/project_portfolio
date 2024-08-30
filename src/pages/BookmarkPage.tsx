import { motion } from "framer-motion";
import { useState } from "react";
import bookmarksData from "../data/bookmarks.json";

export function BookmarkPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const activeBookmarks = bookmarksData.filter((bookmark) => bookmark.status);
  const tags: string[] = [
    ...new Set(activeBookmarks.flatMap((bookmark) => bookmark.tags)),
  ];

  const handleTagClick = (tag: string | null) => {
    setSelectedTag(tag);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredBookmarks = activeBookmarks.filter((bookmark) => {
    const matchesTag = selectedTag ? bookmark.tags.includes(selectedTag) : true;
    const matchesSearch = bookmark.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section className="space-y-4 overflow-hidden">
      <h2 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Bookmarks
      </h2>
      <search className="w-full relative">
        <form method="GET" action="#">
          <input
            type="search"
            className="h-10 p-4 border dark:border-neutral-700 dark:hover:border-neutral-500 bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-800 focus:bg-neutral-300 dark:focus:bg-neutral-700 placeholder:text-neutral-600 w-full rounded-xl focus:outline-none focus:ring focus:ring-chartreuse-400 text-center focus:text-left focus:pl-12 transition-all ease-in"
            placeholder="Search bookmarks..."
            name="search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="absolute rounded-full inset-y-0 left-0 p-4 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </form>
      </search>
      <nav>
        <details className="bg-neutral-900 p-2 space-x-2 space-y-2 rounded-lg">
          <summary className="font-medium">Tags</summary>
          <hr className="border-neutral-700 pb-2" />
          <button
            onClick={() => handleTagClick(null)}
            className={`ml-2 bg-white text-xs font-medium px-2.5 py-0.5 border border-neutral-700 rounded ${!selectedTag ? "bg-chartreuse-500 text-neutral-800" : ""
              }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`text-xs font-medium px-2.5 py-0.5 border border-neutral-700 rounded ${selectedTag === tag ? "bg-chartreuse-500 text-neutral-800" : ""
                }`}
            >
              {tag}
            </button>
          ))}
        </details>
      </nav>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredBookmarks.map((bookmark) => (
          <motion.article
            key={bookmark.id}
            className="group rounded-xl hover:transition-all duration-300 w-full h-full overflow-hidden"
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .3 }}
          // TODO: Add component
          >
            <a href={bookmark.website} target="_blank" className="space-y-2">
              <figure className="aspect-video dark:bg-neutral-700 rounded-lg border dark:border-neutral-700 overflow-hidden">
                <img
                  src={bookmark.image}
                  alt={bookmark.title}
                  className="group-hover:scale-110 transition-all ease-in"
                  loading="lazy"
                />
              </figure>
              <div className="px-2 pb-2 space-y-2">
                <p className="font-medium">{bookmark.title}</p>
                <p className="text-sm text-neutral-500">{bookmark.category}</p>
                <div>
                  {bookmark.tags.map((tag) => (
                    <span
                      key={tag}
                      className="hover:bg-chartreuse-500 hover:text-neutral-800 text-xs font-medium me-2 px-2.5 py-0.5 border border-neutral-700 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </motion.article>
        ))}
      </section>
    </section>
  );
}
