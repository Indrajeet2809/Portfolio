import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaLightbulb,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: FaServer,
      title: "Backend Development",
      desc: "Building scalable APIs and secure server-side applications.",
    },
    {
      icon: FaDatabase,
      title: "Database Design",
      desc: "Designing efficient MongoDB and PostgreSQL database systems.",
    },
    {
      icon: FaCode,
      title: "API Architecture",
      desc: "REST APIs, JWT authentication, role-based access control, and system design.",
    },
    {
      icon: FaLightbulb,
      title: "Problem Solving",
      desc: "Solving real-world backend engineering challenges with clean architecture.",
    },
  ];

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          About Me
        </p>

        <h2 className="max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
          Passionate about building{" "}
          <span className="text-cyan-400">real-world solutions</span>
        </h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-8 text-slate-300">
            I am a B.Tech Computer Science graduate and backend-focused
            full stack developer with a strong passion for building scalable
            web applications and solving real-world problems.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            I have hands-on experience with the MERN stack, NestJS,
            PostgreSQL, Prisma, authentication, role-based access control,
            AI integration, and dashboard-based systems.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            I also worked as a Backend Developer Intern at SoftxAI,
            where I contributed to building production-ready APIs,
            authentication flows, testing, and new backend features.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="rounded-xl border border-cyan-400/20 bg-slate-900/80 px-5 py-3">
              🎓 B.Tech CSE Graduate
            </div>

            <div className="rounded-xl border border-cyan-400/20 bg-slate-900/80 px-5 py-3">
              💻 Backend Developer
            </div>

            <div className="rounded-xl border border-cyan-400/20 bg-slate-900/80 px-5 py-3">
              📍 India
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition-all hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-start gap-5">
                  <div className="rounded-xl bg-cyan-400/10 p-4">
                    <Icon className="text-2xl text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {card.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-400">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default About;