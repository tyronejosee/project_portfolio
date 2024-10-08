import { ReactNode } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: ReactNode;
  className?: string;
}

export const FadeInSection = ({ children, className }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{
        ease: "easeOut",
        duration: 0.6,
      }}
    >
      {children}
    </motion.div>
  );
};
