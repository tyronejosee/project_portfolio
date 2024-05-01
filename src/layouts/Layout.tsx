import { ReactNode } from "react";

import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className="content__wrapper">
        {/* <Intro /> */}
        <Sidebar />
        <main className="pl-0 lg:pl-60 flex flex-col min-h-[650px]">
          {children}
          {/* <Footer /> */}
        </main>
      </div>
      {/* <ScrollToTop /> */}
    </>
  );
}
