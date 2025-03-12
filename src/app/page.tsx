"use client";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#111111] overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] 
                      bg-gradient-to-br from-[#00000008] to-transparent
                      dark:from-[#ffffff08] dark:to-transparent
                      rounded-full blur-3xl"
        />
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Name & Description */}
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                <span className="text-[#1a1a1a] dark:text-white">Hi, I&apos;m </span>
                <span className="relative inline-block">
                  <span
                    className="bg-gradient-to-r from-[#1a1a1a] to-[#666666]
                                 dark:from-white dark:to-[#888888]
                                 text-transparent bg-clip-text"
                  >
                    Janvi
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[4px] 
                              bg-[#1a1a1a] dark:bg-white rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  />
                </span>
              </h1>

              {/* Role Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3"
              >
                <span className="h-px w-8 bg-[#1a1a1a] dark:bg-white" />
                <span className="text-sm font-medium text-[#666666] dark:text-[#888888] uppercase tracking-wider">
                  Frontend Developer
                </span>
              </motion.div>

              <p className="text-lg text-[#666666] dark:text-[#888888] max-w-lg">
                I create user-friendly web applications with modern
                technologies. Passionate about clean code and seamless user
                experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="flex space-x-4">
  <Link
    href="/contact"
    className="relative inline-flex items-center gap-2 px-6 py-3 
             bg-[#1a1a1a] dark:bg-white
             text-white dark:text-[#1a1a1a]
             rounded-lg group-hover:rounded-xl
             transition-all duration-300"
  >
    Get in Touch
    <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
  </Link>

  <Link
    href="/Resume_JanviHatwar.pdf" // Replace this with your resume link
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-flex items-center gap-2 px-6 py-3 
             border border-[#1a1a1a] dark:border-white
             text-[#1a1a1a] dark:text-white
             rounded-lg group-hover:rounded-xl
             transition-all duration-300"
  >
    Resume
  </Link>
</div>

              </motion.div>

              {/* <motion.div
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <Link
                  href="/projects"
                  className="relative inline-flex items-center gap-2 px-6 py-3 
                           bg-white dark:bg-[#1a1a1a]
                           text-[#1a1a1a] dark:text-white
                           border border-[#e5e7eb] dark:border-[#2e2e2e]
                           rounded-lg group-hover:rounded-xl
                           transition-all duration-300"
                >
                  View Projects
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div> */}
            </motion.div>
          </motion.div>

          {/* Right Column - Creative Tagline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="space-y-6 text-right">
              <motion.h2
                className="text-4xl lg:text-7xl font-light flex flex-wrap justify-end gap-4 lg:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span
                  className="relative inline-block group cursor-default 
                   text-[#1a1a1a] dark:text-white"
                >
                  Coding
                  <span
                    className="absolute bottom-0 left-0 w-full h-[2px] 
                     bg-[#1a1a1a] dark:bg-white
                     transform origin-left scale-x-0 group-hover:scale-x-100
                     transition-transform duration-300"
                  />
                </span>

                <span className="text-[#666666] dark:text-[#888888]">
                  where
                </span>

                <span
                  className="relative inline-block group cursor-default
                   text-[#1a1a1a] dark:text-white"
                >
                  Logic
                  <span
                    className="absolute bottom-0 left-0 w-full h-[2px]
                     bg-[#1a1a1a] dark:bg-white
                     transform origin-left scale-x-0 group-hover:scale-x-100
                     transition-transform duration-300"
                  />
                </span>

                <span className="text-[#666666] dark:text-[#888888]">
                  meets
                </span>

                <span
                  className="relative inline-block group cursor-default
                   text-[#1a1a1a] dark:text-white"
                >
                  Creativity
                  <span
                    className="absolute bottom-0 left-0 w-full h-[2px]
                     bg-[#1a1a1a] dark:bg-white
                     transform origin-left scale-x-0 group-hover:scale-x-100
                     transition-transform duration-300"
                  />
                </span>
              </motion.h2>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
