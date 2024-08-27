import { ReactNode, useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: ReactNode;
  className?: string;
}

export const RotateScaleUp = ({ children, className }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={{ rotate: 180, scale: 0 }}
      animate={{ opacity: inView ? 1 : 0, rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40
      }}
    >
      {children}
    </motion.div>
  );
};
