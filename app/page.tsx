import Hero from "@/components/hero"
import FeaturedProjects from "@/components/featured-projects"
import Technologies from "@/components/technologies"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 px-6 sm:px-8 lg:px-12 py-16 mx-auto max-w-7xl">
      <Hero />
      <FeaturedProjects />
      <Technologies />
      <Footer />
    </main>
  )
}
