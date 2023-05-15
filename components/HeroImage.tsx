import { faArrowDown } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { easeIn, easeInOut, motion, useScroll, useTransform } from "framer-motion";


export default function HeroImage({ slug }: { slug: string }) {
  const bgColor = () => {
    switch (slug) {
      case "createroom":
        return "bg-createroom"
      case "gallery":
        return "bg-gallery"
      case "housemate":
        return "bg-housemate"
      case "mtc":
        return "bg-mtc"
      default:
        return "bg-gray-500"
    }
  }

  const { scrollY, scrollYProgress } = useScroll();
  const y1 = useTransform(scrollY, [0, 900], [0, 800]);
  const y2 = useTransform(scrollY, [0, 400], [0, 600]);

  return (
    <div className={`h-screen relative ${bgColor()} -mt-16 z-10`}>
      <div className="absolute inset-0 flex justify-center items-center h-full z-10">
        <motion.div
          style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 180]), y: y1, scale: useTransform(scrollY, [0, 300], [1, .9]) }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-1/2"
        >
          <Image src={`/hero/${slug}.jpg`} alt="Hero" width={1600} height={1080} className="w-full h-auto" />
        </motion.div>
      </div>
      <div className="absolute bottom-4 inset-x-0 z-10">
        <motion.div
          style={{ y: y2 }}
          transition={easeInOut}>
          <div className="animate-bounce border-solid rounded-full border flex items-center justify-center w-16 h-16 mx-auto cursor-pointer hover:bg-white transition-default">
            <FontAwesomeIcon icon={faArrowDown} size="lg" />
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-y-0 z-[9] flex items-center">
        <motion.div
          style={{ y: y2 }}
          transition={easeInOut}>
          <div className="font-serif text-9xl ml-8 tracking-tighter">
            Create Room
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-y-0 flex items-center z-[11]">
        <motion.div
          style={{ y: y2 }}
          transition={easeInOut}>
          <div className="font-serif text-9xl ml-8 tracking-tighter text-transparent" style={{ WebkitTextStroke: '1px', WebkitTextStrokeColor: 'black' }}>
            Create Room
          </div>
        </motion.div>
      </div>
    </div >
  )
}
