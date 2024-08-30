import { motion } from 'framer-motion';

export const Loader = () => {
  return (
    <section className='w-full h-[600px] flex items-center justify-center'>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
      >
        <svg width="100" height="100" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 102.4C56.554 102.4 102.4 56.554 102.4 0H153.6V102.4H256V153.6C199.446 153.6 153.6 199.446 153.6 256H102.4V153.6H0V102.4Z" fill="#DCFF04" />
        </svg>
      </motion.div>
    </section>
  )
}
