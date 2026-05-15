import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Loading and status message states
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // EmailJS credentials
  // These values come from your EmailJS dashboard
  const SERVICE_ID = "service_qoavopu";
  const TEMPLATE_ID = "template_7m50rcm";
  const PUBLIC_KEY = "_uHg_eC2IJkvJvwhz";

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit and send email using EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatusMessage("");

    // These object keys must match your EmailJS template variables:
    // {{name}}, {{email}}, {{message}}
    const emailParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      // This line sends the email using EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, emailParams, PUBLIC_KEY);

      setStatusMessage("Message sent successfully! I will reply soon.");

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Let's Connect
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">Get in touch</h2>

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
                  className="break-all text-white hover:text-cyan-400"
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
                <a
                  href="https://github.com/Indrajeet2809"
                  target="_blank"
                  rel="noreferrer"
                  className="break-all text-white hover:text-cyan-400"
                >
                  github.com/Indrajeet2809
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-cyan-400/10 p-4">
                <FaLinkedin className="text-2xl text-cyan-400" />
              </div>

              <div>
                <p className="text-slate-400">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/indrajeet-raj-/"
                  target="_blank"
                  rel="noreferrer"
                  className="break-all text-white hover:text-cyan-400"
                >
                  linkedin.com/in/indrajeet-raj-
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form connected with EmailJS */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-slate-900/70 p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-xl border border-white/10 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-xl border border-white/10 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-5 w-full rounded-xl border border-white/10 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-slate-950 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
            <FaPaperPlane />
          </button>

          {statusMessage && (
            <p className="mt-4 text-center text-sm text-cyan-400">
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;