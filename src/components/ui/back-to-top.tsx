"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { ChevronUp } from "lucide-react";

export const BackToTop = () => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState<boolean>(false);
  const [showing, setShowing] = useState<boolean>(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
        setShowing(true);
      } else {
        if (direction < 0) {
          setVisible(true);
          setShowing(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  // Effects
  useEffect(() => {
    if (showing) {
      const timer = setTimeout(() => {
        setVisible(false);
        setShowing(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showing]);

  // Functions
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 200,
        }}
        animate={{
          y: visible ? 0 : 200,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="flex max-w-fit z-40 fixed bottom-4 right-16 mx-auto"
      >
        <Button
          isIconOnly
          size="md"
          radius="lg"
          color="primary"
          variant="bordered"
          aria-label="Back to Top"
          onPress={() => scrollToTop()}
          className="group bg-content1 border-2 border-content2"
          startContent={
            <ChevronUp
              size={16}
              className="text-foreground group-hover:text-primary"
            />
          }
        ></Button>
      </motion.div>
    </AnimatePresence>
  );
};
