import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* Navbar */}
      <main className="content__wrapper">
        {/* <Intro /> */}
        <section className="">
          {/* <Sidebar /> */}
          <div className="p-4 space-y-16">{children}</div>
        </section>
        {/* <Footer /> */}
      </main>
      {/* <ScrollToTop /> */}
    </>
  );
}
