import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14 flex items-center justify-between">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Featured Projects
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Some things I've built
          </h2>
        </div>

        <button className="hidden rounded-xl border border-cyan-400/30 px-5 py-3 text-cyan-400 transition-all hover:bg-cyan-400 hover:text-slate-950 md:block">
          View All Projects
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-lg transition-all hover:border-cyan-400/40 hover:shadow-cyan-500/10"
          >
            {/* <div className="h-52 bg-gradient-to-br from-cyan-500/20 to-blue-500/10" /> */}
            <div className="h-52 overflow-hidden">
             {project.image ? (
             <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
             />
               ) : (
              <div className="h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/10" />
               )}
           </div>

            <div className="p-7">
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-6">
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  className="flex items-center gap-2 text-white hover:text-cyan-400"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;