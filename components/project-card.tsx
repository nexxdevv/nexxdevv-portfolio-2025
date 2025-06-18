"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRef, useState } from "react" // Import useRef and useState
import { FaChevronLeft, FaChevronRight } from "react-icons/fa" // Example icons, install react-icons if you don't have it

type Project = {
  title: string
  description: string
  tech: string[]
  images: string[] // Ensure this is an array of strings
  live: string
  repo: string
}

export default function ProjectCard({ project }: { project: Project }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current
      const scrollLeft = scrollContainer.scrollLeft
      const itemWidth = scrollContainer.clientWidth // Assuming each image takes full width of the container
      const newIndex = Math.round(scrollLeft / itemWidth)
      setCurrentImageIndex(newIndex)
    }
  }

  const scrollToImage = (index: number) => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current
      const itemWidth = scrollContainer.clientWidth // Assuming each image takes full width
      scrollContainer.scrollTo({
        left: index * itemWidth,
        behavior: "smooth"
      })
      setCurrentImageIndex(index)
    }
  }

  const scrollLeft = () => {
    if (currentImageIndex > 0) {
      scrollToImage(currentImageIndex - 1)
    }
  }

  const scrollRight = () => {
    if (currentImageIndex < project.images.length - 1) {
      scrollToImage(currentImageIndex + 1)
    }
  }

  return (
    <motion.div
      className="bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-lg dark:shadow-2xl border border-transparent dark:border-zinc-700"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1), 0 5px 10px rgba(0,0,0,0.06)"
      }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    >
      <div className="relative w-full h-[800px] md:h-[400px] lg:h-[500px] overflow-hidden">
        {/* Slider Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll} // Update index on user scroll
          className="flex w-full h-[800px] overflow-x-scroll snap-x snap-mandatory scrollbar-hide" // scrollbar-hide to hide default scrollbar
        >
          {project.images.map((imageSrc, index) => (
            <div
              key={index}
              className="flex-none w-full h-[800px] snap-center relative" // Each image takes full width and snaps to center
            >
              <Link href={project.live} target="_blank">
                <Image
                  src={imageSrc}
                  alt={`${project.title} Screenshot ${index + 1}`}
                  fill
                  className="object-cover object-top rounded-md"
                  priority={index === 0} // Prioritize first image for faster loading
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {project.images.length > 1 && ( // Only show buttons if there's more than one image
          <>
            {currentImageIndex > 0 && (
              <button
                onClick={scrollLeft}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10"
                aria-label="Previous image"
                disabled={currentImageIndex === 0}
              >
                <FaChevronLeft />
              </button>
            )}
            {currentImageIndex < project.images.length - 1 && (
              <button
                onClick={scrollRight}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10"
                aria-label="Next image"
                disabled={currentImageIndex === project.images.length - 1}
              >
                <FaChevronRight />
              </button>
            )}
          </>
        )}

        {/* Pagination Dots (Optional) */}
        {project.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToImage(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentImageIndex ? "bg-white" : "bg-gray-400"
                } hover:bg-white transition-colors duration-200`}
                aria-label={`Go to image ${index + 1}`}
              ></button>
            ))}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-snug">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 justify-start">
          <Link
            href={project.live}
            className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </Link>
          <Link
            href={project.repo}
            className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-blue-600 rounded-full hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
