function Footer() {
  return (
    <footer className="border-t border-white/10 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} Indrajeet Raj. All rights reserved.</p>

        <p>
          Built with <span className="text-cyan-400">React</span> &{" "}
          <span className="text-cyan-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;