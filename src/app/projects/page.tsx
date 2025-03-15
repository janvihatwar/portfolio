// src/app/projects/page.tsx
"use client";
import React from 'react';
import ProjectPage from './ProjectPage';
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#111111] px-3 sm:px-4 md:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="text-center mb-4 sm:mb-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 sm:gap-3"
        >
          {/* <span className="h-px w-3 sm:w-4 md:w-6 lg:w-8 bg-[#1a1a1a] dark:bg-white" />
          <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-[#666666] dark:text-[#888888] uppercase tracking-wider">
            My Work
          </span>
          <span className="h-px w-3 sm:w-4 md:w-6 lg:w-8 bg-[#1a1a1a] dark:bg-white" /> */}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a1a1a] dark:text-white mb-4 sm:mb-6 mt-3 sm:mt-4"
        >
          My Projects
        </motion.h1>
      </div>
      <ProjectPage />
    </div>
  );
}