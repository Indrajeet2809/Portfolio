import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-28">
      <div className="text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          My Skills
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Technologies I work with
        </h2>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-white/10 bg-slate-900/70 p-6 text-center transition-all hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="flex justify-center">
                <Icon
                  className={`text-6xl transition-transform duration-300 group-hover:scale-110 ${skill.color}`}
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-200">
                {skill.name}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;