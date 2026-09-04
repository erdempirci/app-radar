"use client";

import { useState } from "react";
import { APPS_DATA } from "../data/apps";
import { 
  Sparkles, 
  Flame, 
  Compass, 
  ChevronRight, 
  CheckCircle2, 
  Zap, 
  Search, 
  Terminal,
  Layers,
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"updates" | "gems">("updates");
  const [selectedAppId, setSelectedAppId] = useState<string>(APPS_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = APPS_DATA.filter((app) =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedApp = APPS_DATA.find((a) => a.id === selectedAppId) || APPS_DATA[0];

  return (
    <div className="min-h-screen mesh-bg relative selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* İnce Izgara Efekti */}
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0 opacity-40"></div>

      {/* Navigasyon / Üst Çubuk */}
      <nav className="relative z-10 w-full border-b border-white/[0.08] backdrop-blur-md bg-black/20">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-black font-black text-base">
              AR
            </div>
            <span className="font-bold tracking-tight text-lg text-white">
              App<span className="text-emerald-400">Radar</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              v2.0 Canlıda
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Bölümü */}
      <header className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-medium text-zinc-300 mb-6 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Sürüm notlarındaki karmaşayı temizleyen akıllı radar</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-3xl mx-auto leading-[1.15]">
          Uygulamalarınız güncelleniyor. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500">
            Siz ne kadarını kaçırıyorsunuz?
          </span>
        </h1>

        <p className="mt-5 text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Karmaşık teknik dokümanlar yerine sadece işinize yarayacak özellikleri ve gizli kalmış verimlilik tüyolarını tek ekranda yakalayın.
        </p>

        {/* Sekme Değiştirici & Arama Çubuğu */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
          <div className="flex p-1 bg-white/[0.04] border border-white/[0.1] rounded-2xl backdrop-blur-md w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("updates")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === "updates"
                  ? "bg-zinc-800/90 text-white shadow-lg shadow-black/40 border border-white/[0.12]"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Flame className={`w-4 h-4 ${activeTab === "updates" ? "text-amber-400" : ""}`} />
              Son Sürümler
            </button>
            <button
              onClick={() => setActiveTab("gems")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === "gems"
                  ? "bg-zinc-800/90 text-white shadow-lg shadow-black/40 border border-white/[0.12]"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Compass className={`w-4 h-4 ${activeTab === "gems" ? "text-emerald-400" : ""}`} />
              Bunu Kaçırıyorsun
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Uygulama veya kategori..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/[0.1] rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/50 backdrop-blur-md transition"
            />
          </div>
        </div>
      </header>

      {/* Dinamik Kart Alanı */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        {/* SEKME 1: YENİ GÜNCELLEMELER */}
        {activeTab === "updates" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                className="group relative flex flex-col justify-between p-7 rounded-3xl bg-zinc-950/40 border border-white/[0.08] hover:border-emerald-500/40 hover:bg-zinc-900/30 transition-all duration-300 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-emerald-950/20"
              >
                <div>
                  {/* Başlık ve Sürüm Rozeti */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center font-bold text-lg text-emerald-400 group-hover:scale-105 transition-transform">
                        {app.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-zinc-100 group-hover:text-white transition">
                          {app.name}
                        </h3>
                        <span className="text-xs text-zinc-400 font-medium tracking-wide">
                          {app.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white/[0.06] text-zinc-300 border border-white/[0.1]">
                      {app.version}
                    </span>
                  </div>

                  {/* Sürüm Tek Cümle Özeti */}
                  <p className="text-sm text-zinc-300 font-normal leading-relaxed mb-6">
                    {app.headline}
                  </p>

                  {/* Yeni Özellikler */}
                  <div className="space-y-4 pt-5 border-t border-white/[0.08]">
                    {app.features.map((feat, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center gap-2 font-semibold text-sm text-zinc-200">
                          <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                          <span>{feat.title}</span>
                        </div>
                        <p className="text-xs text-zinc-400 pl-6 leading-relaxed">
                          {feat.summary}
                        </p>
                        <div className="ml-6 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-zinc-300 flex items-start gap-2">
                          <Terminal className="w-3.5 h-3.5 text-zinc-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-zinc-500 font-mono">Nasıl açılır: </span>
                            {feat.how_to}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Alt Kazanım Çubuğu */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    Kazanım: {app.features[0]?.gain}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SEKME 2: BUNU KAÇIRIYORSUN (GEMS) */}
        {activeTab === "gems" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sol: Uygulama Listesi */}
            <div className="lg:col-span-4 flex lg:flex-col gap-2.5 overflow-x-auto pb-2 lg:pb-0">
              {filteredApps.map((app) => (
                <button
                  key={app.id}
                  onClick={() => setSelectedAppId(app.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl border text-left transition-all whitespace-nowrap lg:whitespace-normal duration-200 ${
                    selectedAppId === app.id
                      ? "bg-zinc-800/90 border-emerald-500/50 text-white shadow-xl shadow-black/40 ring-1 ring-emerald-500/30"
                      : "bg-zinc-950/40 border-white/[0.08] text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-xs font-bold text-emerald-400">
                      {app.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold">{app.name}</div>
                      <div className="text-[11px] text-zinc-500">{app.category}</div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 hidden lg:block ${selectedAppId === app.id ? "text-emerald-400" : "text-zinc-600"}`} />
                </button>
              ))}
            </div>

            {/* Sağ: Seçilen Aracın Kaçırılan Özellikleri */}
            <div className="lg:col-span-8 bg-zinc-950/40 border border-white/[0.08] rounded-3xl p-7 lg:p-8 backdrop-blur-md shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div>
                  <h2 className="text-2xl font-black text-white flex items-center gap-3">
                    {selectedApp.name}
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-zinc-400">
                      {selectedApp.category}
                    </span>
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1">
                    Günlük kullanımda saatler kazandıran gizli yetenekler.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 self-start sm:self-auto">
                  <Sparkles className="w-3.5 h-3.5" />
                  {selectedApp.missed_gems.length} Gizli Güç
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {selectedApp.missed_gems.map((gem, index) => (
                  <div key={index} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mt-0.5 flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h4 className="font-bold text-base text-zinc-100">{gem.title}</h4>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">{gem.description}</p>
                        
                        <div className="mt-3 p-3 rounded-xl bg-black/40 border border-white/[0.08] text-xs text-zinc-300 flex items-start gap-2.5">
                          <Terminal className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-emerald-400">Hemen Dene: </span>
                            {gem.tip}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-white/[0.08] py-8 text-center text-xs text-zinc-500 bg-black/30 backdrop-blur-md">
        <p>AppRadar © 2026 — Dijital araçların gücünü son damlasına kadar kullanın.</p>
      </footer>
    </div>
  );
}
