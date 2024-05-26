import { ReactNode } from "react";

import { Navbar } from "../components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-lg mx-auto space-y-16 flex flex-col min-h-[650px] p-4">
        {children}
      </main>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      {/* <ScrollToTop /> */}
    </>
  );
}
