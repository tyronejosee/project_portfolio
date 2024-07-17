import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const ButtonScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bg-white top-1 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-radical-600 hover:bg-radical-500 h-8 px-4 text-xs font-medium rounded-3xl shadow-xl text-neutral-800 ${isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <ChevronUpIcon className="w-3 h-3 stroke-black" />
      <span className="ml-2">Back to top</span>
    </button>
  );
}
