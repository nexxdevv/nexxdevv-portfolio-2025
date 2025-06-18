const techList = [
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
]

const Technologies = () => (
  <section className="mb-24 md:mb-32">
    <h2 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-white">
      Technologies I Use
    </h2>
    <ul className="flex flex-wrap gap-3 text-sm">
      {techList.map((tech) => (
        <li
          key={tech}
          className="bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 px-4 py-2 rounded-full font-medium shadow-sm dark:shadow-md"
        >
          {tech}
        </li>
      ))}
    </ul>
  </section>
)

export default Technologies
