"use client";
import { motion } from "framer-motion";
import { BsSend } from "react-icons/bs";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#111111] py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 "
          >
            <span className="h-px w-8 bg-[#1a1a1a] dark:bg-white" />
            <span className="text-sm font-medium text-[#666666] dark:text-[#888888] uppercase tracking-wider">
              Get in Touch
            </span>
            <span className="h-px w-8 bg-[#1a1a1a] dark:bg-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] dark:text-white mb-6"
          >
            Let&apos;s Work Together
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
<form className="space-y-6" action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="5a31bb93-64a4-4038-9a81-b0b18a0f5497" />
  
  <div className="space-y-4">
    <div>
      <label
        htmlFor="name"
        className="block text-sm font-medium text-[#1a1a1a] dark:text-white mb-2"
      >
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name" // Ensure this attribute is present
        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-[#1a1a1a] 
                 border border-[#e5e7eb] dark:border-[#2e2e2e]
                 text-[#1a1a1a] dark:text-white
                 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] dark:focus:ring-white
                 transition-all duration-300"
        placeholder="Your name"
        required // Optional: Add required attribute for validation
      />
    </div>
    
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-[#1a1a1a] dark:text-white mb-2"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email" // Ensure this attribute is present
        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-[#1a1a1a] 
                 border border-[#e5e7eb] dark:border-[#2e2e2e]
                 text-[#1a1a1a] dark:text-white
                 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] dark:focus:ring-white
                 transition-all duration-300"
        placeholder="your@email.com"
        required // Optional: Add required attribute for validation
      />
    </div>
    
    <div>
      <label
        htmlFor="message"
        className="block text-sm font-medium text-[#1a1a1a] dark:text-white mb-2"
      >
        Message
      </label>
      <textarea
        id="message"
        name="message" // Ensure this attribute is present
        rows={6}
        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-[#1a1a1a] 
                 border border-[#e5e7eb] dark:border-[#2e2e2e]
                 text-[#1a1a1a] dark:text-white
                 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] dark:focus:ring-white
                 transition-all duration-300 resize-none"
        placeholder="Your message..."
        required // Optional: Add required attribute for validation
      />
    </div>
  </div>

  <motion.button
    whileHover={{ scale: 1.02 }}
    className="group relative inline-flex items-center gap-2 px-6 py-3 
             bg-[#1a1a1a] dark:bg-white
             text-white dark:text-[#1a1a1a]
             rounded-lg w-full justify-center
             transition-all duration-300"
  >
    Send Message
    <BsSend className="group-hover:translate-x-1 transition-transform" />
  </motion.button>
</form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:pl-8"
          >
            <div className="space-y-8 lg:pt-11">
              <div>
                <h4 className="text-xl font-semibold text-[#1a1a1a] dark:text-white mb-4">
                  Contact Information
                </h4>
                <div className="space-y-4">
                  <a
                    href="mailto:your.email@example.com"
                    className="group flex items-center gap-4 text-[#666666] dark:text-[#888888] hover:text-[#1a1a1a] dark:hover:text-white transition-colors duration-300"
                  >
                    <FiMail className="text-xl" />
                    <span>janvihatwar7@gmail.com</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] dark:text-white mb-4">
                  Social Links
                </h3>
                <div className="flex gap-6">
                  {[
                    {
                      icon: FiGithub,
                      href: "https://github.com/yourusername",
                      label: "GitHub",
                    },
                    {
                      icon: FiLinkedin,
                      href: "https://linkedin.com/in/yourusername",
                      label: "LinkedIn",
                    },
                    {
                      icon: FiTwitter,
                      href: "https://twitter.com/yourusername",
                      label: "Twitter",
                    },
                  ].map((social) => (
                    <motion.div
                      key={social.label}
                      className="group relative p-[2px] rounded-full overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                    >
                      {/* Animated border gradient */}
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-[#0066ff00] via-[#0066ff] to-[#0066ff00] 
                      opacity-0 group-hover:opacity-100
                      blur-md transition-opacity duration-300
                      animate-[border-animation_3s_ease_infinite]
                      bg-[length:200%_100%]"
                      />

                      {/* Social Icon */}
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center p-3 rounded-full
                   bg-white dark:bg-[#1a1a1a] 
                   text-[#1a1a1a] dark:text-white
                   border border-[#e5e7eb] dark:border-[#2e2e2e]
                   transition-colors duration-300"
                      >
                        <social.icon className="text-xl" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="p-6 rounded-lg bg-white dark:bg-[#1a1a1a] border border-[#e5e7eb] dark:border-[#2e2e2e]">
                <p className="text-[#666666] dark:text-[#888888]">
                  For urgent matters, please reach out via email directly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
