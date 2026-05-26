export default function LazioROMPortal() {
  const roms = [
    {
      device: "Sunstone & Moonstone",
      rom: "ColorOS 16.0.7 Port",
      android: "Android 16",
      status: "Stable",
      date: "26 May 2026",
      link: "https://pixeldrain.com/u/hyADNivF",
    },
    {
      device: "Sunstone & Moonstone",
      rom: "Realme UI 16.0.3 Port",
      android: "Android 16",
      status: "Stable",
      date: "20 May 2026",
      link: "https://pixeldrain.com/u/yGuUGeVQ",
    },
    {
      device: "Sunstone & Moonstone",
      rom: "OxygenOS 16.0.5 Port",
      android: "Android 16",
      status: "Stable",
      date: "15 May 2026",
      link: "https://drive.google.com/file/d/13GLuzzx_Lzyoqq8Gv0oOarH4BJklGhIz/view?usp=drive_link",
    },
    {
      device: "Sunstone",
      rom: "HyperOS 3.0.5 Port",
      android: "Android 15",
      status: "Stable",
      date: "26 May 2026",
      link: "https://pixeldrain.com/u/KAGVeuyY",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto text-center">
          
          <h1 className="text-3xl md:text-6xl font-black leading-tight">
            Deyn Zypher.Xp
            <span className="block text-cyan-400">ROM Ports</span>
          </h1>

          <p className="mt-4 md:mt-6 text-sm md:text-lg text-zinc-400 max-w-2xl mx-auto">
            Download custom ROM ports with smooth UI and latest Android builds.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-3 justify-center">
            <a className="px-6 py-3 bg-cyan-500 text-black rounded-xl font-semibold">
              Browse ROMs
            </a>
            <a className="px-6 py-3 border border-white/10 rounded-xl">
              Support
            </a>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          
          <h2 className="text-xl md:text-3xl font-bold">
            Latest ROM Builds
          </h2>

          <input
            placeholder="Search devices..."
            className="w-full md:w-72 px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none"
          />
        </div>
      </section>

      {/* ROM GRID */}
      <section className="px-4 md:px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {roms.map((rom, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-bold">{rom.rom}</h3>
              <p className="text-zinc-400 text-sm">{rom.device}</p>

              <div className="mt-4 text-sm space-y-2 text-zinc-300">
                <p>Android: {rom.android}</p>
                <p>Date: {rom.date}</p>
                <p>Status: {rom.status}</p>
              </div>

              <a
                href={rom.link}
                className="mt-5 block text-center py-2 bg-cyan-500 text-black rounded-xl font-semibold"
              >
                Download
              </a>
            </div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-zinc-500 text-sm">
        © 2026 ZypherOS Ports
      </footer>

    </div>
  );
}