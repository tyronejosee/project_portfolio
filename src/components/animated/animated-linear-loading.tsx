"use client";

import { motion } from "framer-motion";

export const AnimatedLinearLoading = () => {
  <div className="absolute bottom-0 left-0 right-0 h-1">
    <motion.div
      className="h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"
      animate={{
        x: ["-100%", "100%"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </div>;
};
