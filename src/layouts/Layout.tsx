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
      {/* <ScrollToTop /> */}
    </>
  );
}
