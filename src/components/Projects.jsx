import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-16 flex items-center justify-between">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Featured Projects
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Some things I've built
          </h2>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-xl transition-all hover:border-cyan-400/40 hover:shadow-cyan-500/20"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-5">
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