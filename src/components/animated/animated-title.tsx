"use client";

import { cn } from "@/lib/utils";

type AnimatedTitleProps = {
  title: string;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
};

export const AnimatedTitle = ({
  title,
  as = "h1",
  className,
}: AnimatedTitleProps) => {
  const baseClasses =
    "font-bold tracking-tight bg-gradient-to-r from-purple-600 via-primary to-blue-600 bg-clip-text text-transparent animate-gradient-move";

  const sizeClasses = {
    h1: "text-3xl lg:text-4xl",
    h2: "text-2xl lg:text-3xl",
    h3: "text-xl lg:text-2xl",
    h4: "text-lg lg:text-xl",
  };

  const Component = as;

  return (
    <Component className={cn(baseClasses, sizeClasses[as], className)}>
      {title}
    </Component>
  );
};
