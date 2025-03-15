// src/app/projects/ProjectPage.tsx
"use client";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Analyze Your Text",
    description: `Tech Stack: React, HTML, CSS, JavaScript\n\nAnalyze Your Text is a web application designed for efficient text processing. It allows users to analyze, transform, encode, decode, and bookmark text seamlessly. With a clean and responsive UI, the tool enhances readability and simplifies text-related tasks.`,
    link: "https://janvihatwar.github.io/analyzeYourTextHere/",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: `Tech Stack: React, HTML, CSS, JavaScript, Chart.js\n\nExpense Tracker is a web application that helps users manage their daily expenses effortlessly. It allows users to add, track, and categorize expenses with a clean and responsive interface. The application provides real-time updates to simplify financial management and budgeting.\n\nWe also integrated Chart.js to visualize spending patterns through interactive charts, making it easier to analyze financial trends.`,
    link: "https://janvihatwar.github.io/ExpenseTracker/",
  },
  {
    id: 3,
    title: "BK Enterprises - Service Platform",
    description:
      "Tech Stack: React, HTML, CSS, JavaScript\n\nThe BK Enterprises website is designed to showcase a range of electrical and mechanical services. It offers a professional platform for clients to explore services, request quotes, and connect with the business. With a clean and intuitive interface, the website ensures fast performance and seamless navigation, providing an optimal user experience.",
    link: "https://bk-enterprises.vercel.app/",
  },

  {
    id: 4,
    title: "Memory Game",
    description: `Tech Stack: React, HTML, CSS, JavaScript\n\nMemory Game is a fun and interactive card-matching game that helps improve memory and concentration. The game challenges players to match pairs of cards within a limited number of moves. It features a dynamic and engaging UI with smooth animations for an enjoyable user experience.`,
    link: "https://janvihatwar.github.io/MemoryGame/",
  },
];

function ProjectPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-3 sm:space-y-4 md:space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-[#666666] dark:border-[#888888] rounded-md sm:rounded-lg 
                     p-3 sm:p-4 md:p-6
                     transition-all duration-300 transform hover:scale-[1.02] 
                     hover:border-blue-500 
                     shadow-md hover:shadow-lg
                     bg-white dark:bg-[#1a1a1a]"
          >
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-[#1a1a1a] dark:text-white">
              {project.title}
            </h2>
            {/* Apply whitespace-pre-line to preserve line breaks */}
            <p className="text-xs sm:text-sm md:text-base text-[#666666] dark:text-[#888888] mb-3 sm:mb-4 whitespace-pre-line">
              {project.description}
            </p>
            <a
              href={project.link}
              className="inline-flex items-center text-xs sm:text-sm md:text-base text-blue-500 hover:text-blue-600 dark:hover:text-blue-400
                       transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
