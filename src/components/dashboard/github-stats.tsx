"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@heroui/react";

export const GithubStats = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // TODO: Add GitHub API call to fetch data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton className="h-40 flex items-center justify-center rounded-xl" />
      ) : (
        <>
          <div className="grid grid-cols-12 gap-1">
            {Array.from({ length: 60 }).map((_, i) => {
              const level = Math.floor(Math.random() * 5);
              let bgColor = "bg-content2";
              if (level === 1) bgColor = "bg-primary/20";
              if (level === 2) bgColor = "bg-primary/40";
              if (level === 3) bgColor = "bg-primary/60";
              if (level === 4) bgColor = "bg-primary/80";

              return (
                <div
                  key={i}
                  className={`w-full aspect-square rounded-md ${bgColor}`}
                  title={`${level} contributions`}
                ></div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
