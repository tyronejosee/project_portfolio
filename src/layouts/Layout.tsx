import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Navbar, Footer } from "../components";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  const { pathname } = useLocation();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <>
      <div className="hidden xl:flex fixed left-0 h-full flex-col items-center justify-center">
        <div className="transform -rotate-90 text-lg font-medium leading-tight hover:text-white">
          {currentPath === "/" ? "" : currentPath}
        </div>
      </div>
      <Navbar />
      <main className="max-w-screen-lg mx-auto space-y-16 flex flex-col min-h-[650px] p-4">
        {children}
      </main>
      <Footer authorName="Tyrone José" year={new Date().getFullYear()} />
      <ScrollToTop />
    </>
  );
}
