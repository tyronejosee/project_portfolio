import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Navbar, Footer, Loader } from "../components";

interface Props {
  children: ReactNode;
}

interface Data {
  message: string;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout({ children }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulación de llamada a API
        const response = await new Promise<Data>((resolve) =>
          setTimeout(() => resolve({ message: 'Loader example' }), 1500)
        );
        setData(response);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <main className="max-w-screen-lg mx-auto space-y-16 flex flex-col min-h-[650px] p-4">
            {children}
          </main>
          <Footer authorName="Tyrone José" year={new Date().getFullYear()} />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}
