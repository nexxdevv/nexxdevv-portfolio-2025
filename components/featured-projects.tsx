import ProjectCard from "@/components/project-card"

const projects = [
  {
    title: "Sunset Traders",
    description:
      "A modern e-commerce platform for thrift goods, designed for intuitive browsing and a seamless shopping experience.",
    tech: ["React", "Next.js", "Tailwind CSS", "Firebase", "Framer Motion"],
    images: [
      "https://res.cloudinary.com/cloud-x/image/upload/v1750102861/sunset-traders_s3m9is.png",
      "https://res.cloudinary.com/cloud-x/image/upload/v1750109533/sunset-trader-product-details_ztouka.png"
    ],
    live: "https://sunset-traders-next.vercel.app/",
    repo: "https://github.com/nexxdevv/sunset-traders-next"
  }
]

const FeaturedProjects = () => (
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
)

export default FeaturedProjects
