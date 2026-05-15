import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Featured Projects
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Some things I've built
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          Explore some of my featured backend and full-stack development
          projects.
        </p>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        className="projects-swiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-xl transition-all hover:border-cyan-400/40 hover:shadow-cyan-500/20"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="mt-4 min-h-[90px] leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-white hover:text-cyan-400"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Projects;