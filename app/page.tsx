// app/page.tsx
import Link from "next/link"
import ProjectCard from "@/components/project-card" // Assuming ProjectCard is updated as well

const projects = [
  {
    title: "Sunset Traders",
    description:
      "A modern e-commerce platform for thrift goods, designed for intuitive browsing and a seamless shopping experience.",
    tech: ["React", "Next.js", "Tailwind CSS", "Firebase", "Framer Motion"],
    image:
      "https://res.cloudinary.com/cloud-x/image/upload/v1750102861/sunset-traders_s3m9is.png",
    live: "https://sunset-traders-next.vercel.app/",
    repo: "https://github.com/nexxdevv/sunset-traders-next",
  },
  // Add more projects here following the same structure
  // {
  //   title: "Another Project",
  //   description: "Description of another project.",
  //   tech: ["Next.js", "TypeScript"],
  //   image: "https://via.placeholder.com/1200x800",
  //   live: "#",
  //   repo: "#",
  // },
]

export default function Home() {
  return (
    <main
      // Main container styling:
      // - bg-zinc-50 for light mode, dark:bg-zinc-900 for a deep dark mode
      // - text-zinc-800 for light mode, dark:text-zinc-100 for dark mode
      // - px-6 for general padding, max-w-7xl to center content and limit width
      // - min-h-screen to ensure it takes full height
      className="min-h-screen bg-zinc-50 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 px-6 sm:px-8 lg:px-12 py-16 mx-auto max-w-7xl"
    >
      {/* Hero Section */}
      <section className="mb-24 md:mb-32 pt-8">
        <h1
          // Hero title styling:
          // - text-5xl for larger size, sm:text-6xl, lg:text-7xl for responsiveness
          // - font-extrabold for a strong presence
          // - tracking-tight for tighter letter spacing
          // - mb-4 for margin below
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-white"
        >
          Hi, I&apos;m Cliff — <br className="block sm:hidden" />
          <span className="text-blue-600 dark:text-blue-400">
            React Developer
          </span>
        </h1>
        <p
          // Hero description styling:
          // - text-xl for larger text, max-w-2xl for controlled width
          // - text-zinc-600 for light mode, dark:text-zinc-300 for dark mode
          // - leading-relaxed for comfortable line spacing
          className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl leading-snug"
        >
          I craft modern, responsive web apps with a focus on intuitive
          user experiences and elegant functionality.
        </p>
      </section>

      {/* Featured Projects Section */}
      <section className="mb-24 md:mb-32">
        <h2
          // Section title styling:
          // - text-4xl for prominence
          // - font-bold for strong emphasis
          // - mb-10 for generous space below
          className="text-4xl font-bold mb-10 text-zinc-900 dark:text-white"
        >
          Featured Projects
        </h2>
        <div
          // Grid layout for project cards:
          // - grid-cols-1 for mobile, md:grid-cols-2 for tablets and above
          // - gap-10 for generous spacing between cards
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="mb-24 md:mb-32">
        <h2 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-white">
          Technologies I Use
        </h2>
        <ul
          // Tech list styling:
          // - flex flex-wrap gap-3 for responsive wrapping
          className="flex flex-wrap gap-3 text-sm"
        >
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Firebase",
            "Stripe",
            "Vercel",
            "Git",
            "Shadcn/ui",
          ].map((tech) => (
            <li
              key={tech}
              // Individual tech tag styling:
              // - bg-zinc-200 for light, dark:bg-zinc-700 for dark
              // - text-zinc-700 for light, dark:text-zinc-200 for dark
              // - px-4 py-2 for good padding
              // - rounded-full for pill shape
              // - font-medium for a slightly bolder text
              className="bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 px-4 py-2 rounded-full font-medium shadow-sm dark:shadow-md"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {/* Footer Section */}
      <footer
        // Footer styling:
        // - mt-24 for good separation from content
        // - text-zinc-500 for a subtle text color, dark:text-zinc-400 for dark mode
        // - border-t for a subtle top separator line
        // - border-zinc-200 for light, dark:border-zinc-700 for dark
        // - pt-12 for padding above content
        className="mt-24 pt-12 text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-700"
      >
        <p className="mb-4 text-lg text-zinc-600 dark:text-zinc-300">
          Connect with me:
        </p>
        <div className="flex gap-6 text-lg font-medium">
          <Link
            href="https://github.com/nexxdevv" // Replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            // Link styling:
            // - text-blue-600 for prominent link color, dark:text-blue-400
            // - hover:text-blue-700 for interaction, dark:hover:text-blue-300
            // - transition-colors for smooth hover
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
          >
            GitHub
          </Link>
          <Link
            href="mailto:your.email@example.com" // Replace with your email
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
          >
            Email
          </Link>
          <Link
            href="/cliff-resume.pdf" // Ensure you have this file in your public directory
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
          >
            Resume
          </Link>
        </div>
      </footer>
    </main>
  )
}