import { motion } from "framer-motion"

import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="w-full relative h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120PX] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>
        <div className="mb-2">
          <h1 className={`${styles.heroHeadText} text-white leading-[30px]`}>Hi , I'm <span className="text-[#915eff]">JALLOUL </span><br className='sm:block hidden' />Abderrahim </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
          I’m a FullStack Developer located in Morocco. I have a serious passion for UI/UX effects, 
          animations, and creating REST API,in general, dynamic user experiences. 
          Well-organized person, problem solver, and independent employee with high attention to detail. 
          Interested in the entire frontend and backend spectrum and working on ambitious projects with positive people.
          <br className='sm:block hidden' />
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" >
          <div className="w-[30px] h-[55px] rounded-3xl border-4 border-se flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-2 h-2 rounded-full bg-secondary bt-1"
            />
          </div>
        </a>
        
      </div>
    </section>
  )
}

export default Hero