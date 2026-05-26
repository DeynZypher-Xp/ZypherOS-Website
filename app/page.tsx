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

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,140,255,0.18),transparent_35%)] pointer-events-none"></div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-col lg:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-4 sm:gap-6">

            {/* LOGO (UNCHANGED) */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl"></div>

              <img
                src="/Logo.jpg"
                alt="ZypherOS Logo"
                className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover"
              />
            </div>

            <div>
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
                ZypherOS Ports
              </h1>

              <p className="text-zinc-400 text-sm sm:text-lg mt-1">
                Custom ROM Ports & Projects
              </p>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a className="px-6 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 hover:bg-cyan-500/20 transition text-center">
              Telegram Channel
            </a>

            <a className="px-6 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 hover:bg-cyan-500/20 transition text-center">
              Telegram Support
            </a>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="relative py-16 sm:py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Experience The Ports Roms
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-tight">
              Deyn Zypher.Xp
              <span className="block text-cyan-400">Port Roms</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
              Download custom ROM ports, get flashing guides, changelogs,
              screenshots, and updates directly from my Telegram channel.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#downloads" className="px-7 py-4 rounded-2xl bg-cyan-500 text-black font-semibold text-center">
                Browse ROMs
              </a>

              <a className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 text-center">
                Support Channel
              </a>
            </div>

          </div>

          {/* RIGHT CARD (LATEST RELEASE KEPT FULL) */}
          <div className="relative mt-6 lg:mt-0">

            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[32px] blur opacity-25"></div>

            <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl">

              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
                <div>
                  <p className="text-zinc-400 text-sm">Latest Release</p>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-1">
                    ColorOS 16.1
                  </h2>
                </div>

                <div className="px-4 py-2 rounded-xl bg-green-500/20 border border-green-400/20 text-green-300 text-sm">
                  Stable
                </div>
              </div>

              {/* KEEP YOUR DETAILS */}
              <div className="space-y-3 text-sm">

                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-400">Device</span>
                  <span>Stone</span>
                </div>

                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-400">Android Version</span>
                  <span>16</span>
                </div>

                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-400">Kernel</span>
                  <span>Sawit 1.0.1</span>
                </div>

                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-400">Security Patch</span>
                  <span>May 2026</span>
                </div>

              </div>

              <button className="w-full mt-6 py-4 rounded-2xl bg-cyan-500 text-black font-bold">
                <a href="https://pixeldrain.com/u/hyADNivF">Download Rom</a>
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* DOWNLOADS (FIXED ONLY RESPONSIVE GRID) */}
      <section id="downloads" className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-12">

            <div>
              <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm">
                Downloads
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                Latest ROM Builds
              </h2>
            </div>

            <input
              placeholder="Search devices..."
              className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 w-full sm:w-72"
            />

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">

            {roms.map((rom, i) => (
              <div key={i} className="rounded-[28px] border border-white/10 bg-white/[0.03]">

                <div className="h-1 bg-gradient-to-r from-cyan-400 to-blue-600"></div>

                <div className="p-6 sm:p-7">

                  <h3 className="text-xl sm:text-2xl font-bold">{rom.rom}</h3>
                  <p className="text-zinc-400">{rom.device}</p>

                  <div className="mt-6 space-y-3 text-sm">

                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-zinc-500">Android</span>
                      <span>{rom.android}</span>
                    </div>

                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-zinc-500">Date</span>
                      <span>{rom.date}</span>
                    </div>

                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">

                    <a href={rom.link} className="flex-1 text-center py-3 rounded-2xl bg-cyan-500 text-black font-semibold">
                      Download
                    </a>

                    <button className="px-5 py-3 rounded-2xl border border-white/10">
                      Changelog
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-zinc-500">
        © 2026 Deyn_Zypher.Xp Ports — Built for the Android Modding Community
      </footer>

    </div>
  );
}