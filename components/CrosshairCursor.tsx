"use client"
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CrosshairCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {

    window.addEventListener("mousemove", (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    })
  }, [])

  return (
    <>
      <motion.div
        className="w-[200%] h-[200%] fixed -top-full -left-full grid"
        style={{ x: mousePosition.x, y: mousePosition.y }}
        animate='default'
      >
        <div className="bg-white bg-opacity-10 w-1 h-full m-auto col-start-1 row-start-1"></div>
        <div className="bg-white bg-opacity-10 h-1 w-full m-auto col-start-1 row-start-1"></div>
        <div className='bg-red-500 bg-opacity-5 h-24 w-24 m-auto rounded-full col-start-1 row-start-1' ></div>
      </motion.div>

    </>
  );
}
