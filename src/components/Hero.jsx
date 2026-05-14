import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { skills } from "../data/portfolioData";

function Hero() {
  const floatingSkills = skills.slice(0, 6);

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.18),transparent_35%)]" />

      <div className="grid w-full items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-block rounded-full border border-cyan-400/30 px-4 py-2 text-sm text-cyan-400"
          >
            Backend-Focused Full Stack Developer
          </motion.p>

          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Indrajeet Raj
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            I build scalable and high-performance web applications using
            Node.js, Express.js, NestJS, React.js, PostgreSQL, MongoDB, Prisma,
            and cloud technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-300"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex gap-4 text-xl">
            <a className="rounded-lg bg-white/10 p-3 hover:text-cyan-400" href="#">
              <FaGithub />
            </a>
            <a className="rounded-lg bg-white/10 p-3 hover:text-cyan-400" href="#">
              <FaLinkedin />
            </a>
            <a className="rounded-lg bg-white/10 p-3 hover:text-cyan-400" href="mailto:indrajeetraj2809@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="relative hidden min-h-[500px] items-center justify-center lg:flex">
          <div className="absolute h-80 w-80 rounded-full border border-cyan-400/40 shadow-2xl shadow-cyan-500/30" />
          <div className="absolute h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

          {/* <div className="relative z-10 flex h-80 w-80 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/80 text-center shadow-xl">
            <div>
              <h2 className="text-5xl font-bold text-cyan-400">IR</h2>
              
              <p className="mt-3 text-slate-300">Backend Developer</p>
            </div>
          </div> */}
          <div className="relative z-10 h-96 w-80 overflow-hidden rounded-full border border-cyan-400/30 bg-slate-900 shadow-xl shadow-cyan-500/20">
            <img
              src="/profile.png"
              alt="Indrajeet Raj"
              className="h-full w-full object-cover"
             />
          </div>
          {floatingSkills.map((skill, index) => {
            const Icon = skill.icon;
            const positions = [
              "top-10 left-20",
              "top-24 right-10",
              "bottom-20 left-16",
              "bottom-28 right-16",
              "top-52 left-4",
              "top-52 right-0",
            ];

            return (
              <div
                key={skill.name}
                className={`absolute ${positions[index]} rounded-xl border border-white/10 bg-slate-900 p-4 shadow-lg`}
              >
                <Icon className={`text-4xl ${skill.color}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;