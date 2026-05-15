import { useState } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Experience", path: "#experience" },
    { name: "Contact", path: "#contact" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-cyan-400/10 bg-[#020817]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-bold text-white"
        >
          <span className="text-cyan-400">&lt;/&gt;</span> Indrajeet Raj
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="transition-all hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="/Indrajeet_Raj_Resume.pdf"
          className="hidden items-center gap-2 rounded-lg bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all hover:bg-cyan-300 lg:flex"
        >
          Download Resume <FaDownload />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/10 bg-white/10 p-3 text-xl text-white lg:hidden"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#020817] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5 text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 transition-all hover:bg-white/10 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/Indrajeet_Raj_Resume.pdf"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/30"
            >
              Download Resume <FaDownload />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;