import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT, RESUME } from "../constants"; // Combined import for clarity
import profilePic from "../assets/kevinRushProfile.png";

// Animation for container elements
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-7 text-6xl font-thin tracking-tight lg:mt-10 lg:text-6xl" // Corrected to 8xl
            >
              Sundarasekar T
            </motion.h1>
            <motion.span
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="my-1 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.a
               variants={container(1)}
               initial="hidden"
               animate="visible"
              className="bg-stone-50 text-stone-900 p-3 lg:p-3 mt-3 inline-block rounded-3xl mb-5"
              href={RESUME.resumeLink}
              download
              rel="noopener noreferrer"
              target="_blank"
            >
              {RESUME.resumeLinkText}
            </motion.a>

          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              src={profilePic}
              alt="profilePic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
