"use client"

import HeroImage from "@/components/HeroImage"
import { useScroll, useTransform, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useRef } from "react"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const slug = usePathname().split("/").pop()
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -400]);
  const anchor = useRef(null)

  const handleClick = () => {
    anchor.current.scrollIntoView({ behavior: "smooth", })
  }


  return (
    <>
      <HeroImage slug={slug} handleClick={handleClick} />
      <motion.div className="prose-rose prose max-w-none mx-auto prose-h2:border-zinc-200/70 prose-h2:border-b z-10 relative bg-white -mb-[400px]" style={{ y: y }} transition={{ type: "spring", stiffness: 100 }}>
        <div ref={anchor} className="absolute -top-[400px]"></div>
        {children}
      </motion.div>
    </>
  )
}
