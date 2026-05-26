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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,140,255,0.18),transparent_35%)] pointer-events-none"></div>

     {/* Navbar */}
<header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/50">
  <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

    <div className="flex items-center gap-6">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl"></div>

        <img
          src="/Logo.jpg"
          alt="ZypherOS Logo"
          className="relative w-24 h-24 rounded-full object-cover"
        />
      </div>

      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          ZypherOS Ports
        </h1>

        <p className="text-zinc-400 text-lg mt-1">
          Custom ROM Ports & Projects
        </p>
      </div>
    </div>

   <div className="flex items-center gap-4">
  <a
    href="https://t.me/Deyn_Zypher"
    className="px-6 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 hover:bg-cyan-500/20 transition"
  >
    Telegram Channel
  </a>

  <a
    href="https://t.me/Deyn_Zypher"
    className="px-6 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 hover:bg-cyan-500/20 transition"
  >
    Telegram Support
  </a>
</div>

  </div>
</header>

      {/* Hero */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Experience The Ports Roms
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Deyn Zypher.Xp
              <span className="block text-cyan-400">Port Roms</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-400 max-w-xl leading-relaxed">
              Download custom ROM ports, get flashing guides, changelogs,
              screenshots, and updates directly from my Telegram channel.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#downloads"
                className="px-7 py-4 rounded-2xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
              >
                Browse ROMs
              </a>

              <a
                href="https://t.me/ZypherOS_Support"
                className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                Support Channel
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[32px] blur opacity-25"></div>

            <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-zinc-400 text-sm">Latest Release</p>
                  <h2 className="text-3xl font-bold mt-1">ColorOS 16.1</h2>
                </div>

                <div className="px-4 py-2 rounded-xl bg-green-500/20 border border-green-400/20 text-green-300 text-sm">
                  Stable
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-black/40 border border-white/5 p-5 flex justify-between">
                  <span className="text-zinc-400">Device</span>
                  <span>Stone</span>
                </div>

                <div className="rounded-2xl bg-black/40 border border-white/5 p-5 flex justify-between">
                  <span className="text-zinc-400">Android Version</span>
                  <span>16</span>
                </div>

                <div className="rounded-2xl bg-black/40 border border-white/5 p-5 flex justify-between">
                  <span className="text-zinc-400">Kernel</span>
                  <span>Sawit 1.0.1</span>
                </div>

                <div className="rounded-2xl bg-black/40 border border-white/5 p-5 flex justify-between">
                  <span className="text-zinc-400">Security Patch</span>
                  <span>May 2026</span>
                </div>
              </div>

              <button className="w-full mt-8 py-4 rounded-2xl bg-cyan-500 text-black font-bold hover:scale-[1.02] transition">
                <a href="https://pixeldrain.com/u/hyADNivF">Download Rom</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm">
                Downloads
              </p>
              <h2 className="text-4xl font-bold mt-2">Latest ROM Builds</h2>
            </div>

            <input
              placeholder="Search devices..."
              className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none w-72"
            />
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {roms.map((rom, index) => (
              <div
                key={index}
                className="group rounded-[28px] border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition overflow-hidden"
              >
                <div className="h-1 bg-gradient-to-r from-cyan-400 to-blue-600"></div>

                <div className="p-7">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">{rom.rom}</h3>
                      <p className="text-zinc-400 mt-1">{rom.device}</p>
                    </div>

                    <div className="px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm">
                      {rom.status}
                    </div>
                  </div>

                  <div className="mt-8 space-y-4 text-sm">
                    <div className="flex justify-between border-b border-white/5 pb-3">
                      <span className="text-zinc-500">Android</span>
                      <span>{rom.android}</span>
                    </div>

                    <div className="flex justify-between border-b border-white/5 pb-3">
                      <span className="text-zinc-500">Build Date</span>
                      <span>{rom.date}</span>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <a
                      href={rom.link}
                      className="flex-1 text-center py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
                    >
                      Download
                    </a>

                    <button className="px-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                      Changelog
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* About */}
<section className="px-6 pb-24">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

    {/* About Card */}
    <div className="relative overflow-hidden rounded-[36px] border border-cyan-500/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10 backdrop-blur-2xl">

      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-sm">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          About Deyn_Zypher.Xp
        </div>

        <h2 className="text-5xl font-black mt-6 leading-tight">
          ROM Porter &
          <span className="block text-cyan-400">
            Android Modder
          </span>
        </h2>

        <p className="mt-6 text-zinc-400 leading-relaxed text-lg">
          I port OxygenOS, ColorOS, Realme UI and custom Android ROMs
          for Xiaomi and Redmi devices with focus on smooth UI,
          performance optimization and premium user experience.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mt-10">

          <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
            <h3 className="text-3xl font-bold text-cyan-400">
              Rom Builds
            </h3>

            <p className="text-zinc-500 mt-2 text-sm">
              4+ Roms Ported
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
            <h3 className="text-3xl font-bold text-cyan-400">
              Device
            </h3>

            <p className="text-zinc-500 mt-2 text-sm">
              Redmi Note 12 5G
            </p>
          </div>

        </div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-4">

          <div className="px-5 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 hover:bg-cyan-500/20 transition">
            Android Ports
          </div>

          <div className="px-5 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 hover:bg-cyan-500/20 transition">
            HyperOS Mods
          </div>

          <div className="px-5 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 hover:bg-cyan-500/20 transition">
            UI Designs
          </div>

          <div className="px-5 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 hover:bg-cyan-500/20 transition">
            Performance Tweaks
          </div>

        </div>

      </div>
    </div>

    {/* Community Card */}
    <div className="relative overflow-hidden rounded-[36px] border border-cyan-500/10 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-10 backdrop-blur-2xl">

      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10">

        <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm">
          Community
        </p>

        <h2 className="text-5xl font-black mt-4">
          Stay Updated
        </h2>

        <p className="mt-5 text-zinc-400 text-lg leading-relaxed">
          Join the ZypherOS community for latest ROM releases,
          changelogs, bug fixes and installation support.
        </p>

        <div className="mt-10 space-y-5">

          <div className="group rounded-3xl bg-black/30 border border-white/10 p-6 flex justify-between items-center hover:border-cyan-400/30 transition">

            <div>
              <h3 className="text-xl font-semibold">
                Telegram Channel
              </h3>

              <p className="text-zinc-400 text-sm mt-2">
                Latest releases & updates
              </p>
            </div>

            <a
              href="https://t.me/ZypherOS_Updates"
              className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-bold hover:scale-105 transition"
            >
              Join
            </a>

          </div>

          <div className="group rounded-3xl bg-black/30 border border-white/10 p-6 flex justify-between items-center hover:border-cyan-400/30 transition">

            <div>
              <h3 className="text-xl font-semibold">
                Support Group
              </h3>

              <p className="text-zinc-400 text-sm mt-2">
                Installation help & bug reports
              </p>
            </div>

            <a
              href="https://t.me/ZypherOS_Support"
              className="px-6 py-3 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 transition"
            >
              Join
            </a>

          </div>

        </div>

      </div>
    </div>

  </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-zinc-500">
        <p>
          © 2026 Deyn_Zypher.Xp Ports — Built for the Android Modding Community
        </p>
      </footer>

    </div>
  );
}