"use client"

import HeroImage from "@/components/HeroImage"
import { useScroll, useTransform, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const slug = usePathname().split("/").pop()
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -400]);

  return (
    <>
      <HeroImage slug={slug} />
      <motion.div className="prose-rose prose max-w-none mx-auto prose-h2:border-zinc-200/70 prose-h2:border-b z-10 relative bg-white" style={{ y: y }} transition={{ type: "spring", stiffness: 100 }}>
        {children}
      </motion.div>
    </>
  )
}
