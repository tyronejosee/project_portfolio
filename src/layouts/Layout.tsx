import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Navbar } from "../components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="fixed left-0 h-full flex items-center justify-center">
        <div className="transform -rotate-90 text-lg font-medium leading-tight hover:text-white">
          Portfolio
        </div>
      </div>
      <Navbar />
      <main className="max-w-screen-lg mx-auto space-y-16 flex flex-col min-h-[650px] p-4">
        {children}
      </main>
      <ScrollToTop />
    </>
  );
}
