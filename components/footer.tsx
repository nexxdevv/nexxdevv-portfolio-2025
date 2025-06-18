import Link from "next/link"

const Footer = () => (
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
)

export default Footer
