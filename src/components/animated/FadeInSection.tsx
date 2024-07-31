import { ReactNode } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: ReactNode;
}

export const FadeInSection = ({ children }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{
        ease: "linear",
        duration: .3,
        x: { duration: 1 }
      }}
    >
      {children}
    </motion.div>
  );
};
