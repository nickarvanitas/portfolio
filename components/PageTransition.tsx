"use client"

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 3 }}
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
          exit: {

          }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
