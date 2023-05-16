"use client";
import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
  use,
} from "react";

import ResizeObserver from "resize-observer-polyfill";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";



export default function Projects() {
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSmall(true);
    }
  }, []);


  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  );

  const projects = [
    {
      href: '/projects/createroom',
      project: 'createroom',
      title: 'Increasing Sales with UX Design',
      subtitle: 'The impact I had on the multi-million dollar startup Create Room.',
    },
    {
      href: '/projects/mtc',
      project: 'mtc',
      title: 'Designing for a SaaS Application',
      subtitle: 'Creating a new profile experience.',
    },
    {
      href: '/projects/housemate',
      project: 'housemate',
      title: 'My Design Process',
      subtitle: 'Taking a project from an idea to final deliverable',
    },
    {
      href: '/projects/gallery',
      project: 'Gallery',
      title: 'UI Design Gallery',
      subtitle: 'A collection of designs'
    }]

  return (
    <div ref={containerRef}>
      <div className="scroll-container sticky inset-0 will-change-transform bg-zinc-800 border-b-2 border-zinc-500 z-[5]">
        <div className='flex h-[15vh]  items-center xl:pl-40 lg:pl-30 pl-20 space-x-20 bg-zinc-900 border-b-2 border-zinc-600'>
          <div className='text-zinc-300 w-[40vw] max-w-lg text-xl border-r border-zinc-600'>
            <div>Case Studies</div>
            <div>01 –– 04</div>
          </div>
          <div className='text-zinc-400 w-[40vw] max-w-lg text-xl'>
            <div>Some of the projects I’ve been a part of. Feel free to reach out to see more of my works.</div>
          </div>
        </div>

        <motion.section
          ref={scrollRef}
          style={isSmall ? { x: 0 } : { x: transform }}
          className="relative h-[calc(85vh+4px)] w-max flex items-center xl:px-40 lg:px-30 px-20"
        >
          <div className="relative flex gap-x-20 lg:gap-x-40">
            {projects.map((project, i) => (
              <a href={project.href} className="md:w-[80vw] lg:w-[40vw] 2xl:w-[30vw] aspect-[3/2] lg:aspect-square group border-zinc-500 border-2 relative overflow-hidden px-7 py-9 bg-zinc-950 shadow-2xl" key={project.href}>
                <div className='flex flex-col '>
                  <div className='!leading-tighter text-6xl lg:text-5xl xl:text-7xl text-white font-bold  pb-4'>{project.title}</div>
                  <div className=' text-zinc-400 font-light text-2xl md:text-xl lg:text-2xl'>{project.subtitle}</div>
                </div>
                <div className='absolute inline-block w-24 h-24 bottom-4 left-4 group-hover:translate-y-0 translate-y-full transition-default rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="#fff" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm88 144H192 168v48h24 94.1L151 327l-17 17L168 377.9l17-17 135-135V328v24h48V328 168 144H344z" /></svg>
                </div>
                <div className="absolute bottom-2 right-3 text-4xl z-[1] group-hover:text-white text-transparent font-serif" style={{ WebkitTextStroke: '1px', WebkitTextStrokeColor: 'white' }}>0{i + 1}</div>
                <div className={`absolute -bottom-1/4 lg:-bottom-[16.67%] -right-[16.67%] h-1/2 lg:h-1/3 w-1/3 border-2 border-zinc-500 group-hover:bg-${project.project} transition-default rotate-45`} />
              </a>
            )
            )}
          </div>
        </motion.section>
      </div>
      <div ref={ghostRef} style={isSmall ? { height: 0 } : { height: scrollRange }} className="ghost w-screen" />
    </div >
  );
};