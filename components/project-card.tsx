"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

type Project = {
  title: string
  description: string
  tech: string[]
  image: string
  live: string
  repo: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-lg dark:shadow-2xl border border-transparent dark:border-zinc-700"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1), 0 5px 10px rgba(0,0,0,0.06)"
      }} // More refined hover shadow
      transition={{ type: "spring", stiffness: 250, damping: 20 }} // Softer, more "springy" transition
    >
      <div className="relative w-full h-[800px] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top" // object-center often looks better
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Improve image performance
        />
      </div>
      <div className="p-6">
        {" "}
        {/* Increased padding for more breathing room */}
        <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-2">
          {" "}
          {/* Stronger font-weight, dark mode text color */}
          {project.title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-snug">
          {" "}
          {/* Softer text color, improved line height */}
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {" "}
          {/* Slightly more space below tech tags */}
          {project.tech.map((tech) => (
            <span
              key={tech}
              // Refined tech tag styling
              // - bg-zinc-100 for light, dark:bg-zinc-700 for dark
              // - text-zinc-700 for light, dark:text-zinc-200 for dark
              // - Rounded-full for pill shape
              // - px-3 py-1 for more generous padding
              className="bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 justify-start">
          {" "}
          {/* Align links to the start */}
          <Link
            href={project.live}
            // Button-like link for primary action
            // - bg-blue-600 with dark:bg-blue-500
            // - text-white for both modes
            // - px-5 py-2 for button padding
            // - Rounded-full for pill shape
            // - Hover effect for subtle interaction
            className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer" // Good practice for external links
          >
            Live Site
          </Link>
          <Link
            href={project.repo}
            // Secondary link style
            // - Text-blue-600 with dark:text-blue-400
            // - Hover:text-blue-700 with dark:hover:text-blue-300
            className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-blue-600 rounded-full hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer" // Good practice for external links
          >
            GitHub
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
