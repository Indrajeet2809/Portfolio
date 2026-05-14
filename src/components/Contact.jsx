import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Let's Connect
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Get in touch
        </h2>

        <p className="mt-5 max-w-2xl leading-8 text-slate-400">
          I am always open to discussing new opportunities, collaborations,
          internships, full-time roles, or backend/full-stack development work.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-cyan-400/10 p-4">
                <FaEnvelope className="text-2xl text-cyan-400" />
              </div>
              <div>
                <p className="text-slate-400">Email</p>
                <a
                  href="mailto:indrajeetraj2809@gmail.com"
                  className="text-white hover:text-cyan-400"
                >
                  indrajeetraj2809@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-cyan-400/10 p-4">
                <FaMapMarkerAlt className="text-2xl text-cyan-400" />
              </div>
              <div>
                <p className="text-slate-400">Location</p>
                <p className="text-white">India</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-cyan-400/10 p-4">
                <FaGithub className="text-2xl text-cyan-400" />
              </div>
              <div>
                <p className="text-slate-400">GitHub</p>
                <a href=" https://github.com/Indrajeet2809" className="text-white hover:text-cyan-400">
                   https://github.com/Indrajeet2809
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-cyan-400/10 p-4">
                <FaLinkedin className="text-2xl text-cyan-400" />
              </div>
              <div>
                <p className="text-slate-400">LinkedIn</p>
                <a href="https://www.linkedin.com/in/indrajeet-raj-/" className="text-white hover:text-cyan-400">
                  https://www.linkedin.com/in/indrajeet-raj-/
                </a>
              </div>
            </div>
          </div>
        </div>

        <form className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-xl border border-white/10 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="rounded-xl border border-white/10 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="7"
            className="mt-5 w-full rounded-xl border border-white/10 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Send Message <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;