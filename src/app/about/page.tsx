"use client"
import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaJava, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiNextdotjs, SiCplusplus, SiC, SiTailwindcss, SiTypescript } from "react-icons/si"


`
@keyframes border-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`

export default function Home() {

    const technologies = [
        { icon: <SiC />, name: "C" },
        { icon: <SiCplusplus />, name: "C++" },
        { icon: <FaJava />, name: "Java" },
        { icon: <FaPython />, name: "Python" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiTypescript  />, name: "TypeScript" }
      ]

  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#111111]">
      {/* ... existing hero section ... */}

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto px-6 py-20"
      >
        <div className="space-y-16">
          {/* About Text */}
          <div className="prose dark:prose-invert">
          <h3 className="text-2xl font-bold mb-6 text-[#1a1a1a] dark:text-white">
            About Me
              <div className="h-0.5 w-20 bg-[#1a1a1a] dark:bg-white mt-2 rounded-full" />
            </h3>
            <div className="space-y-4 text-lg text-[#666666] dark:text-[#888888]">
              <p>
                Hi, I&apos;m Janvi Rajesh Hatwar, a frontend developer who loves building clean and user-friendly web applications. 
                I mainly work with React.js, JavaScript, and modern web technologies, and I&apos;m always eager to learn new tools 
                to improve my skills.
              </p>
              <p>
                I also have experience with Node.js, MongoDB, and Docker, which helps me work on full-stack projects. 
                I enjoy solving problems, improving website performance, and creating smooth user experiences.
              </p>
              <p>
                Apart from development, I also teach programming, including C, C++, Java, JavaScript, and React. 
                I believe in continuous learning and enjoy sharing knowledge with others.
              </p>
            </div>
          </div>

          {/* Tech Stack with updated hover effects */}
          <h3 className="text-2xl font-bold mb-6 text-[#1a1a1a] dark:text-white">
            Technologies I Work With
              <div className="h-0.5 w-20 bg-[#1a1a1a] dark:bg-white mt-2 rounded-full" />
            </h3>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-[2px] rounded-lg overflow-hidden"
          >
            {/* Animated border gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff00] via-[#0066ff] to-[#0066ff00] 
              opacity-0 group-hover:opacity-100
              blur-md transition-opacity duration-300
              animate-[border-animation_3s_ease_infinite]
              bg-[length:200%_100%]" />

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center p-4 
                          rounded-lg bg-white dark:bg-[#1a1a1a]
                          h-full w-full
                          transition-all duration-300">
              <div className="text-3xl mb-3 text-[#333333] dark:text-[#888888] 
                            group-hover:text-black dark:group-hover:text-white 
                            transition-colors duration-300">
                {tech.icon}
              </div>
              <span className="text-sm text-center text-[#666666] dark:text-[#888888]
                             group-hover:text-black dark:group-hover:text-white 
                             transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>


          {/* Stats with updated hover effects */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "4+", label: "Years Experience" },
              { number: "20+", label: "Projects" },
              { number: "9+", label: "Technologies" },
              { number: "100%", label: "Dedication" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group p-6 rounded-lg bg-white dark:bg-[#1a1a1a]
                          hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)]
                          dark:hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)]
                          transition-all duration-300"
              >
                <div className="text-2xl font-bold text-black dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-[#666666] dark:text-[#888888]
                               group-hover:text-black dark:group-hover:text-white">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </motion.section>
    </main>
  )
}