import { FaCode, FaBriefcase, FaLayerGroup, FaBullseye } from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: FaCode,
      number: "10+",
      label: "Projects Completed",
    },
    {
      icon: FaBriefcase,
      number: "1+",
      label: "Years Experience",
    },
    {
      icon: FaLayerGroup,
      number: "10+",
      label: "Technologies",
    },
    {
      icon: FaBullseye,
      number: "100%",
      label: "Dedication",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-5 rounded-2xl bg-white/5 p-5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                <Icon className="text-2xl text-cyan-400" />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  {stat.number}
                </h3>
                <p className="text-sm text-slate-400">
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Stats;