import bookmarksData from "../data/bookmarks.json";

export function BookmarkPage() {
  const activeBookmarks = bookmarksData.filter((bookmark) => bookmark.status);

  return (
    <section className="space-y-4">
      <h2 className="section__title">Bookmarks</h2>
      <div className="grid grid-cols-3 gap-4">
        {activeBookmarks.map((bookmark) => (
          <article className="group rounded-xl hover:transition-all duration-300 w-full h-full">
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
                  <span className="text-xs font-medium me-2 px-2.5 py-0.5 border border-neutral-700 rounded">
                    Pink
                  </span>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
