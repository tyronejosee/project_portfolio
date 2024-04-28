import { ReactNode } from "react";

import { Navbar } from "../components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="styles">
        <Navbar />
        <main className="content__wrapper">
          {/* <Intro /> */}
          <section className="">
            {/* <Sidebar /> */}
            <div className="p-4 space-y-16">{children}</div>
          </section>
          {/* <Footer /> */}
        </main>
        {/* <ScrollToTop /> */}
      </div>
    </>
  );
}
