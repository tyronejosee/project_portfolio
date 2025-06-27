import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { Navbar, Footer, LanguageSwitcher } from "@/components/layout";
import { BackToTop } from "@/components/ui";
import Providers from "./providers";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "`${owner.full_name} | Portfolio`",
  description: "Description pending",
  keywords: [
    "portfolio",
    "backend",
    "python",
    "django",
    "fastapi",
    "databases",
    "developer",
  ],
  openGraph: {
    title: "`${owner.full_name} - Portfolio`",
    description: "`${owner.description}`",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "`${owner.full_name} - ${owner.specialty}`",
    images: [
      {
        url: "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1726444056/ubt1lho0b0td6ojoukol.webp",
        width: 800,
        height: 450,
        alt: "Portfolio Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${roboto.variable} antialiased`}>
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <div className="fixed bottom-4 right-4 z-50">
            <LanguageSwitcher />
          </div>
          <BackToTop />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
