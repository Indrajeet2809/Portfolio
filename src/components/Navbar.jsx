import { FaDownload } from "react-icons/fa";

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-cyan-400/10 bg-[#020817]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-2xl font-bold text-white">
          <span className="text-cyan-400">&lt;/&gt;</span> Indrajeet Raj
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#experience" className="hover:text-cyan-400">Experience</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>

        <a
          href="/Indrajeet_Raj_Resume.pdf"
          className="hidden items-center gap-2 rounded-lg bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-300 md:flex"
        >
          Download Resume <FaDownload />
        </a>
      </nav>
    </header>
  );
}

export default Navbar;