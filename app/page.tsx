// app/page.tsx
import Link from "next/link"
import ProjectCard from "@/components/project-card"

const projects = [
  {
    title: "Sunset Traders",
    description:
      "A modern e-commerce platform for thrift goods, designed for intuitive browsing and a seamless shopping experience.",
    tech: ["React", "Next.js", "Tailwind CSS", "Firebase", "Framer Motion"],
    image:
      "https://res.cloudinary.com/cloud-x/image/upload/v1750102861/sunset-traders_s3m9is.png",
    live: "https://sunset-traders-next.vercel.app/",
    repo: "https://github.com/nexxdevv/sunset-traders-next"
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 px-6 sm:px-8 lg:px-12 py-16 mx-auto max-w-7xl">
      {/* Hero Section */}
      <section className="mb-24 md:mb-32 pt-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-white">
          Hi, I&apos;m Cliff — <br className="block sm:hidden" />
          <span className="text-blue-600 dark:text-blue-400">
            React Developer
          </span>
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl leading-snug">
          I craft modern, responsive web apps with a focus on intuitive user
          experiences and elegant functionality.
        </p>
      </section>

      {/* Featured Projects Section */}
      <section className="mb-24 md:mb-32">
        <h2 className="text-4xl font-bold mb-10 text-zinc-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
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
        <ul className="flex flex-wrap gap-3 text-sm">
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
            "Shadcn/ui"
          ].map((tech) => (
            <li
              key={tech}
              className="bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 px-4 py-2 rounded-full font-medium shadow-sm dark:shadow-md"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="mt-24 pt-12 text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-700">
        <p className="mb-4 text-lg text-zinc-600 dark:text-zinc-300">
          Connect with me:
        </p>
        <div className="flex gap-6 text-lg font-medium">
          <Link
            href="https://github.com/nexxdevv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
          >
            GitHub
          </Link>
          <Link
            href="mailto:cliff.sanchez.999@gmail.com"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
          >
            Email
          </Link>
          <Link
            href="/cliff-resume.pdf"
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
