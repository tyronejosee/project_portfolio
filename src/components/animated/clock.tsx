"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
import { profile } from "@/data/profile";

dayjs.extend(utc);
dayjs.extend(timezone);

const TIMEZONE = profile.timezone;

const AnimatedDigit = ({ digit, index }: { digit: string; index: number }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={`${digit}-${index}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.3,
        }}
        className="inline-block"
      >
        {digit}
      </motion.span>
    </AnimatePresence>
  );
};

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={text}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.2, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          duration: 0.4,
        }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </AnimatePresence>
  );
};

export const Clock = () => {
  const [time, setTime] = useState(dayjs().tz(TIMEZONE));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().tz(TIMEZONE));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeString = time.format("HH:mm");
  const dateString = time.format("D/MM");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-default-500 font-black overflow-hidden text-ellipsis whitespace-nowrap"
    >
      <div className="text-2xl">
        {timeString.split("").map((char, index) => {
          if (char === ":") {
            return (
              <motion.span
                key={`colon-${index}`}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block mx-0.5"
              >
                {char}
              </motion.span>
            );
          }
          return (
            <AnimatedDigit key={`digit-${index}`} digit={char} index={index} />
          );
        })}
      </div>

      <div className="text-sm">
        <AnimatedText text={dateString} />
      </div>
    </motion.div>
  );
};
