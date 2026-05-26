"use client";

import { useState } from 'react';

// Define the ROM type
interface ROM {
  device: string;
  rom: string;
  android: string;
  status: string;
  date: string;
  link: string;
  changelog: string[];
}

export default function LazioROMPortal() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedChangelog, setSelectedChangelog] = useState<ROM | null>(null);
  
  const roms: ROM[] = [
    {
      device: "Sunstone & Moonstone",
      rom: "ColorOS 16.0.7 Port",
      android: "Android 16",
      status: "Stable",
      date: "26 May 2026",
      link: "https://pixeldrain.com/u/hyADNivF",
      changelog: [
        "Initial stable release",
        "Fixed camera lag issues",
        "Improved battery backup",
        "Added custom animations",
        "Security patch: May 2026"
      ]
    },
    {
      device: "Sunstone & Moonstone",
      rom: "Realme UI 16.0.3 Port",
      android: "Android 16",
      status: "Stable",
      date: "20 May 2026",
      link: "https://pixeldrain.com/u/yGuUGeVQ",
      changelog: [
        "Realme UI 6.0 features",
        "Optimized RAM usage",
        "Fixed heating issues",
        "Improved gaming performance"
      ]
    },
    {
      device: "Sunstone & Moonstone",
      rom: "OxygenOS 16.0.5 Port",
      android: "Android 16",
      status: "Stable",
      date: "15 May 2026",
      link: "https://drive.google.com/file/d/13GLuzzx_Lzyoqq8Gv0oOarH4BJklGhIz/view?usp=drive_link",
      changelog: [
        "OxygenOS 16 features",
        "Smooth UI experience",
        "Fixed Bluetooth issues",
        "Improved network stability"
      ]
    },
    {
      device: "Sunstone",
      rom: "HyperOS 3.0.5 Port",
      android: "Android 15",
      status: "Stable",
      date: "26 May 2026",
      link: "https://pixeldrain.com/u/KAGVeuyY",
      changelog: [
        "HyperOS 3.0 features",
        "Enhanced performance",
        "Bug fixes and improvements",
        "Better app compatibility"
      ]
    },
  ];

  const filteredRoms = roms.filter(rom => 
    rom.device.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rom.rom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const latestRom = roms[0];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,140,255,0.18),transparent_35%)] pointer-events-none"></div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between">
            
           <div className="flex items-center gap-6"> <div className="relative"> <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl"></div> <img src="/Logo.jpg" alt="ZypherOS Logo" className="relative w-24 h-24 rounded-full object-cover" /> </div>

              <div>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-tight">
                  ZypherOS Ports
                </h1>
                <p className="text-zinc-400 text-xs md:text-sm lg:text-lg mt-0.5 md:mt-1">
                  Custom ROM Ports & Projects
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 w-full md:w-auto">
              <a
                href="https://t.me/Deyn_Zypher"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 hover:bg-cyan-500/20 transition text-center text-sm md:text-base"
              >
                📢 Telegram Channel
              </a>

              <a
                href="https://t.me/Deyn_Zypher"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 hover:bg-cyan-500/20 transition text-center text-sm md:text-base"
              >
                💬 Support Group
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 mb-4 md:mb-6 text-sm md:text-base">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Experience The Ports Roms
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
              Deyn Zypher.Xp
              <span className="block text-cyan-400">Port Roms</span>
            </h1>

            <p className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg text-zinc-400 max-w-xl leading-relaxed">
              Download custom ROM ports, get flashing guides, changelogs,
              screenshots, and updates directly from my Telegram channel.
            </p>

            <div className="mt-6 md:mt-10 flex flex-wrap gap-3 md:gap-4">
              <a
                href="#downloads"
                className="px-5 md:px-7 py-3 md:py-4 rounded-2xl bg-cyan-500 text-black font-semibold hover:scale-105 transition text-center text-sm md:text-base"
              >
                Browse ROMs
              </a>

              <a
                href="https://t.me/ZypherOS_Support"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 md:px-7 py-3 md:py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-center text-sm md:text-base"
              >
                Support Channel
              </a>
            </div>
          </div>

          {/* Latest Release Card */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-none">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[24px] md:rounded-[32px] blur opacity-25"></div>

            <div className="relative rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-5 md:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-4 md:mb-8 flex-wrap gap-3">
                <div>
                  <p className="text-zinc-400 text-xs md:text-sm">Latest Release</p>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-1">{latestRom.rom}</h2>
                </div>

                <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-green-500/20 border border-green-400/20 text-green-300 text-xs md:text-sm">
                  {latestRom.status}
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <div className="rounded-2xl bg-black/40 border border-white/5 p-3 md:p-5 flex justify-between text-sm md:text-base">
                  <span className="text-zinc-400">Device</span>
                  <span>{latestRom.device}</span>
                </div>

                <div className="rounded-2xl bg-black/40 border border-white/5 p-3 md:p-5 flex justify-between text-sm md:text-base">
                  <span className="text-zinc-400">Android Version</span>
                  <span>{latestRom.android}</span>
                </div>

                <div className="rounded-2xl bg-black/40 border border-white/5 p-3 md:p-5 flex justify-between text-sm md:text-base">
                  <span className="text-zinc-400">Build Date</span>
                  <span>{latestRom.date}</span>
                </div>
              </div>

              <a
                href={latestRom.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-6 md:mt-8 py-3 md:py-4 rounded-2xl bg-cyan-500 text-black font-bold hover:scale-[1.02] transition block text-center text-sm md:text-base"
              >
                Download ROM
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="px-4 md:px-6 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 md:mb-12 gap-4">
            <div>
              <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs md:text-sm">
                Downloads
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-1 md:mt-2">Latest ROM Builds</h2>
            </div>

            <input
              type="text"
              placeholder="🔍 Search devices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 md:w-72 px-4 md:px-5 py-2 md:py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-500/50 transition text-sm md:text-base"
            />
          </div>

          {filteredRoms.length === 0 ? (
            <div className="text-center py-12 md:py-20">
              <p className="text-zinc-400 text-lg">No ROMs found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {filteredRoms.map((rom, index) => (
                <div
                  key={index}
                  className="group rounded-[24px] md:rounded-[28px] border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition overflow-hidden"
                >
                  <div className="h-1 bg-gradient-to-r from-cyan-400 to-blue-600"></div>

                  <div className="p-5 md:p-6 lg:p-7">
                    <div className="flex justify-between items-start gap-3 md:gap-4">
                      <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{rom.rom}</h3>
                        <p className="text-zinc-400 text-xs md:text-sm mt-0.5 md:mt-1">{rom.device}</p>
                      </div>

                      <div className="px-2 md:px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs md:text-sm whitespace-nowrap">
                        {rom.status}
                      </div>
                    </div>

                    <div className="mt-5 md:mt-6 lg:mt-8 space-y-3 md:space-y-4 text-sm">
                      <div className="flex justify-between border-b border-white/5 pb-2 md:pb-3">
                        <span className="text-zinc-500 text-xs md:text-sm">Android</span>
                        <span className="text-xs md:text-sm">{rom.android}</span>
                      </div>

                      <div className="flex justify-between border-b border-white/5 pb-2 md:pb-3">
                        <span className="text-zinc-500 text-xs md:text-sm">Build Date</span>
                        <span className="text-xs md:text-sm">{rom.date}</span>
                      </div>
                    </div>

                    <div className="mt-5 md:mt-6 lg:mt-8 flex gap-2 md:gap-3">
                      <a
                        href={rom.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2.5 md:py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:scale-105 transition text-sm md:text-base"
                      >
                        Download
                      </a>

                      <button
                        onClick={() => setSelectedChangelog(rom)}
                        className="px-4 md:px-5 py-2.5 md:py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-sm md:text-base whitespace-nowrap"
                      >
                        Changelog
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          
          {/* About Card */}
          <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px] border border-cyan-500/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 md:p-8 lg:p-10 backdrop-blur-2xl">
            <div className="absolute -top-20 -right-20 w-48 h-48 md:w-64 md:h-64 bg-cyan-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-xs md:text-sm">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                About Deyn_Zypher.Xp
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mt-4 md:mt-6 leading-tight">
                ROM Porter &
                <span className="block text-cyan-400">
                  Android Modder
                </span>
              </h2>

              <p className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg text-zinc-400 leading-relaxed">
                I port OxygenOS, ColorOS, Realme UI and custom Android ROMs
                for Xiaomi and Redmi devices with focus on smooth UI,
                performance optimization and premium user experience.
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8 lg:mt-10">
                <div className="rounded-2xl md:rounded-3xl border border-white/10 bg-black/30 p-3 md:p-4 lg:p-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-400">4+</h3>
                  <p className="text-zinc-500 text-xs md:text-sm mt-1">ROM Builds</p>
                </div>

                <div className="rounded-2xl md:rounded-3xl border border-white/10 bg-black/30 p-3 md:p-4 lg:p-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-400">2</h3>
                  <p className="text-zinc-500 text-xs md:text-sm mt-1">Devices</p>
                </div>
              </div>

              <div className="mt-6 md:mt-8 lg:mt-10 flex flex-wrap gap-2 md:gap-3 lg:gap-4">
                <div className="px-3 md:px-4 lg:px-5 py-2 md:py-2.5 lg:py-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 hover:bg-cyan-500/20 transition text-xs md:text-sm">
                  Android Ports
                </div>
                <div className="px-3 md:px-4 lg:px-5 py-2 md:py-2.5 lg:py-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 hover:bg-cyan-500/20 transition text-xs md:text-sm">
                  HyperOS Mods
                </div>
                <div className="px-3 md:px-4 lg:px-5 py-2 md:py-2.5 lg:py-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 hover:bg-cyan-500/20 transition text-xs md:text-sm">
                  UI Designs
                </div>
                <div className="px-3 md:px-4 lg:px-5 py-2 md:py-2.5 lg:py-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 hover:bg-cyan-500/20 transition text-xs md:text-sm">
                  Performance Tweaks
                </div>
              </div>
            </div>
          </div>

          {/* Community Card */}
          <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px] border border-cyan-500/10 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-6 md:p-8 lg:p-10 backdrop-blur-2xl">
            <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-cyan-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">
              <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs md:text-sm">
                Community
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mt-2 md:mt-4">
                Stay Updated
              </h2>

              <p className="mt-3 md:mt-5 text-sm md:text-base lg:text-lg text-zinc-400 leading-relaxed">
                Join the ZypherOS community for latest ROM releases,
                changelogs, bug fixes and installation support.
              </p>

              <div className="mt-6 md:mt-8 lg:mt-10 space-y-3 md:space-y-4 lg:space-y-5">
                <div className="group rounded-2xl md:rounded-3xl bg-black/30 border border-white/10 p-4 md:p-5 lg:p-6 flex justify-between items-center hover:border-cyan-400/30 transition">
                  <div>
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold">
                      Telegram Channel
                    </h3>
                    <p className="text-zinc-400 text-xs md:text-sm mt-1">
                      Latest releases & updates
                    </p>
                  </div>

                  <a
                    href="https://t.me/ZypherOS_Updates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-2xl bg-cyan-500 text-black font-bold hover:scale-105 transition text-sm md:text-base"
                  >
                    Join →
                  </a>
                </div>

                <div className="group rounded-2xl md:rounded-3xl bg-black/30 border border-white/10 p-4 md:p-5 lg:p-6 flex justify-between items-center hover:border-cyan-400/30 transition">
                  <div>
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold">
                      Support Group
                    </h3>
                    <p className="text-zinc-400 text-xs md:text-sm mt-1">
                      Installation help & bug reports
                    </p>
                  </div>

                  <a
                    href="https://t.me/ZypherOS_Support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 transition text-sm md:text-base"
                  >
                    Join →
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 md:py-10 px-4 md:px-6 text-center text-zinc-500">
        <p className="text-xs md:text-sm">
          © 2026 Deyn_Zypher.Xp Ports — Built for the Android Modding Community
        </p>
      </footer>

      {/* Changelog Modal */}
      {selectedChangelog && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedChangelog(null)}
        >
          <div 
            className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl md:rounded-3xl max-w-md w-full border border-cyan-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 md:p-6 lg:p-8">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-cyan-400">Changelog</h3>
                <button
                  onClick={() => setSelectedChangelog(null)}
                  className="text-zinc-400 hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="mb-4 md:mb-6">
                <p className="text-white font-semibold text-base md:text-lg">{selectedChangelog.rom}</p>
                <p className="text-zinc-400 text-xs md:text-sm">{selectedChangelog.device}</p>
              </div>

              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {selectedChangelog.changelog.map((item, idx) => (
                  <li key={idx} className="text-zinc-300 text-sm md:text-base flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedChangelog(null)}
                className="w-full py-2.5 md:py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-[1.02] transition text-sm md:text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}