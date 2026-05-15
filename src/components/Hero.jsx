import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

import { skills } from "../data/portfolioData";

function Hero() {
  const floatingSkills = skills.slice(0, 6);

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-7xl items-center overflow-hidden px-6 pt-28"
    >
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-24 -z-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute bottom-20 right-[-120px] -z-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="grid w-full items-center gap-16 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-400"
          >
            Backend-Focused Full Stack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight md:text-6xl"
          >
            Hi, I'm <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Indrajeet Raj
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-300"
          >
            I build scalable, secure, and high-performance web applications
            using Node.js, Express.js, NestJS, React.js, PostgreSQL,
            MongoDB, Prisma, JWT authentication, and cloud deployment tools.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-300"
            >
              View My Work <FaArrowRight />
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex gap-4 text-xl"
          >
            <a
              href="https://github.com/Indrajeet2809"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/10 p-3 transition-all hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/indrajeet-raj-/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/10 p-3 transition-all hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:indrajeetraj2809@gmail.com"
              className="rounded-xl border border-white/10 bg-white/10 p-3 transition-all hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative hidden min-h-[560px] items-center justify-center lg:flex"
        >
          {/* Outer Rings */}
          <div className="absolute h-[470px] w-[470px] rounded-full border border-cyan-400/20" />

          <div className="absolute h-[560px] w-[560px] rounded-full border border-dashed border-cyan-400/30" />

          <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />

          {/* Profile Image */}
          <div className="relative z-10 flex h-[415px] w-[390px] items-end justify-center overflow-hidden rounded-full border-4 border-cyan-400 bg-gradient-to-b from-cyan-900/60 to-slate-950 shadow-2xl shadow-cyan-500/40">
            <img
              src="/profile.png"
              alt="Indrajeet Raj"
              className="h-[430px] w-full object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/40 via-transparent to-transparent" />
          </div>

          {/* Floating Tech Icons */}
          {floatingSkills.map((skill, index) => {
            const Icon = skill.icon;

            const positions = [
              "top-10 left-28",
              "top-24 right-8",
              "bottom-24 left-20",
              "bottom-28 right-16",
              "top-60 left-0",
              "top-60 right-0",
            ];

            return (
              <motion.div
                key={skill.name}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className={`absolute ${positions[index]} rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-lg backdrop-blur`}
              >
                <Icon className={`text-4xl ${skill.color}`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;