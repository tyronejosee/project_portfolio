import bookmarksData from "../data/bookmarks.json";

export function BookmarkPage() {
  const activeBookmarks = bookmarksData.filter((bookmark) => bookmark.status);

  return (
    <>
      <section className="space-y-4">
        <h2 className="section__title">Bookmarks</h2>
        <section className="grid grid-cols-3 gap-2">
          {activeBookmarks.map((bookmark) => (
            <article className="hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-xl hover:transition-all duration-300 p-2 w-full h-full">
              <a href={bookmark.website} target="_blank" className="section">
                <img
                  src={bookmark.image}
                  alt={bookmark.title}
                  className="rounded-lg border dark:border-neutral-700 aspect-video"
                  loading="lazy"
                />
                <div className="px-2 pb-2 space-y-4">
                  <p className="font-medium">{bookmark.title}</p>
                  <div>
                    <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
                      Pink
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </section>
      </section>
    </>
  );
}
