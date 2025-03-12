// src/app/projects/ProjectPage.tsx
import React from 'react';

const projects = [
    {
      id: 1,
      title: 'Analyze Your Text',
      description: `Tech Stack: React, HTML, CSS, JavaScript\n\nAnalyze Your Text is a web application designed for efficient text processing. It allows users to analyze, transform, encode, decode, and bookmark text seamlessly. With a clean and responsive UI, the tool enhances readability and simplifies text-related tasks.`,
      link: 'https://janvihatwar.github.io/analyzeYourTextHere/',
    },
    {
      id: 2,
      title: 'Expense Tracker',
      description: `Tech Stack: React, HTML, CSS, JavaScript, Chart.js\n\nExpense Tracker is a web application that helps users manage their daily expenses effortlessly. It allows users to add, track, and categorize expenses with a clean and responsive interface. The application provides real-time updates to simplify financial management and budgeting.\n\nWe also integrated Chart.js to visualize spending patterns through interactive charts, making it easier to analyze financial trends.`,
      link: 'https://janvihatwar.github.io/ExpenseTracker/',
    },
    {
      id: 3,
      title: 'Memory Game',
      description: `Tech Stack: React, HTML, CSS, JavaScript\n\nMemory Game is a fun and interactive card-matching game that helps improve memory and concentration. The game challenges players to match pairs of cards within a limited number of moves. It features a dynamic and engaging UI with smooth animations for an enjoyable user experience.`,
      link: 'https://janvihatwar.github.io/MemoryGame/',
    },
];

const ProjectPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border-2 border-[#666666] dark:border-[#888888] rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:border-blue-500 shadow-lg hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            {/* Apply whitespace-pre-line to preserve line breaks */}
            <p className="text-[#666666] dark:text-[#888888] mb-4 whitespace-pre-line">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;