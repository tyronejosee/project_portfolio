"use client";

import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "../i18n/i18n";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <HeroUIProvider>
      <ToastProvider
        placement="bottom-center"
        maxVisibleToasts={1}
        toastProps={{
          size: "lg",
          radius: "lg",
          variant: "solid",
          color: "primary",
          timeout: 5000,
        }}
      />
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
