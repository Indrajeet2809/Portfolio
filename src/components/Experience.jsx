import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Experience
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Work Experience
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-white/10 bg-slate-900/70 p-8"
      >
        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          <div>
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10">
              <FaBriefcase className="text-3xl text-cyan-400" />
            </div>

            <h3 className="text-2xl font-bold">
              Software Developer 
            </h3>

            <p className="mt-2 text-lg font-semibold text-cyan-400">
              SoftxAI
            </p>

            <div className="mt-5 space-y-3 text-slate-400">
              <p className="flex items-center gap-3">
                <FaCalendarAlt className="text-cyan-400" />
                May 2025 - Oct 2025
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyan-400" />
                Hyderabad
              </p>
            </div>
          </div>

          <ul className="space-y-4 text-slate-300">
            <li>
              Built and improved backend APIs using Node.js and NestJS.
            </li>
            <li>
              Worked on authentication, role-based access, and protected routes.
            </li>
            <li>
              Wrote unit tests using Jest to improve backend reliability.
            </li>
            <li>
              Contributed to production-level backend features and API logic.
            </li>
            <li>
              Collaborated with the team to debug issues and deliver clean backend modules.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;