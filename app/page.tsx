"use client";

import { useState } from "react";
import { APPS_DATA } from "../data/apps";
import { 
  Sparkles, 
  Flame, 
  Compass, 
  ChevronRight, 
  Zap, 
  Search, 
  Copy, 
  Check,
  Tag
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"updates" | "gems">("updates");
  const [selectedAppId, setSelectedAppId] = useState<string>(APPS_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const filteredApps = APPS_DATA.filter((app) =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedApp = APPS_DATA.find((a) => a.id === selectedAppId) || APPS_DATA[0];

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 flex flex-col font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
      
      {/* Üst Çubuk */}
      <header className="border-b border-zinc-800/80 bg-[#07090e]/80 backdrop-blur sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 text-black font-black flex items-center justify-center text-sm shadow-md shadow-emerald-500/20">
              AR
            </div>
            <span className="font-bold text-base tracking-tight">AppRadar</span>
          </div>

          {/* Sekme Butonları */}
          <div className="flex bg-zinc-900 border border-zinc-800 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab("updates")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === "updates"
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Flame className={`w-3.5 h-3.5 ${activeTab === "updates" ? "text-amber-400" : ""}`} />
              Neler Değişti?
            </button>
            <button
              onClick={() => setActiveTab("gems")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === "gems"
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Compass className={`w-3.5 h-3.5 ${activeTab === "gems" ? "text-emerald-400" : ""}`} />
              Bunu Kaçırıyorsun
            </button>
          </div>
        </div>
      </header>

      {/* Ana Başlık & Arama */}
      <section className="max-w-5xl mx-auto px-5 pt-12 pb-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          {activeTab === "updates" ? "Yeni Sürümlerde Gerçekte Ne Var?" : "Kullandığın Araçların Gizli Güçleri"}
        </h1>
        <p className="mt-2 text-zinc-400 text-sm max-w-xl mx-auto">
          {activeTab === "updates"
            ? "Teknik sürüm notlarını eledik; doğrudan hayatınızı kolaylaştıracak değişiklikleri özetledik."
            : "Herkesin kullandığı uygulamaların %90'ının bilinmeyen en pratik ipuçları ve kısayolları."}
        </p>

        <div className="mt-6 max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Uygulama veya kategori filtrele..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition"
          />
        </div>
      </section>

      {/* İÇERİK BÖLÜMÜ */}
      <main className="max-w-5xl w-full mx-auto px-5 pb-20 mt-4 flex-1">
        
        {/* SEKME 1: YENİ SÜRÜMLER (Sade ve Kart Formatında) */}
        {activeTab === "updates" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700/60 font-bold flex items-center justify-center text-sm text-zinc-200">
                        {app.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-zinc-100">{app.name}</h3>
                        <span className="text-xs text-zinc-500">{app.category}</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                      {app.version}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-300 font-medium leading-relaxed mb-5">
                    {app.headline}
                  </p>

                  <div className="space-y-2.5 border-t border-zinc-800/60 pt-4">
                    {app.highlightPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                        <Zap className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-800/40 flex items-center justify-between text-xs text-zinc-500">
                  <span className="text-zinc-400">{app.badgeText}</span>
                  <button 
                    onClick={() => { setSelectedAppId(app.id); setActiveTab("gems"); }}
                    className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1"
                  >
                    10 Gizli Özelliğini Gör <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SEKME 2: BUNU KAÇIRIYORSUN (10 Özellikli Net Liste) */}
        {activeTab === "gems" && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Sol: Uygulama Menüsü */}
            <div className="md:col-span-4 flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
              {filteredApps.map((app) => (
                <button
                  key={app.id}
                  onClick={() => setSelectedAppId(app.id)}
                  className={`flex items-center justify-between p-3 rounded-xl border text-left text-xs font-semibold transition whitespace-nowrap md:whitespace-normal ${
                    selectedAppId === app.id
                      ? "bg-zinc-800 border-zinc-700 text-white shadow-sm"
                      : "bg-zinc-900/30 border-zinc-800/60 text-zinc-400 hover:bg-zinc-800/40 hover:text-zinc-200"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-[11px] font-bold">
                      {app.name.charAt(0)}
                    </span>
                    <span>{app.name}</span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 hidden md:block">
                    {app.missed_gems.length}
                  </span>
                </button>
              ))}
            </div>

            {/* Sağ: Seçilen Uygulamanın 10 Maddelik Hazine Listesi */}
            <div className="md:col-span-8 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-zinc-800/70">
                <div>
                  <h2 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
                    {selectedApp.name} İpuçları
                  </h2>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Günde en az 20 dakika kazandıran püf noktaları ve kısayollar.
                  </p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20">
                  {selectedApp.missed_gems.length} İpucu
                </span>
              </div>

              {/* 10 Maddelik Akıcı Kartlar */}
              <div className="space-y-3">
                {selectedApp.missed_gems.map((gem, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-950/40 border border-zinc-800/60 hover:border-zinc-700/80 transition"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="font-semibold text-xs sm:text-sm text-zinc-100">
                        {gem.title}
                      </h4>
                      <span className="text-[10px] px-2 py-0.5 rounded font-mono bg-zinc-800/90 text-zinc-400 flex items-center gap-1">
                        <Tag className="w-2.5 h-2.5" />
                        {gem.tag}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                      {gem.detail}
                    </p>

                    {/* Aksiyon / Kısayol Kutusu */}
                    <div className="flex items-center justify-between bg-zinc-900/90 border border-zinc-800 px-3 py-2 rounded-lg text-xs">
                      <span className="font-mono text-emerald-400 font-medium select-all">
                        {gem.action}
                      </span>
                      <button
                        onClick={() => handleCopy(gem.action, idx)}
                        className="text-zinc-500 hover:text-zinc-300 transition pl-2"
                        title="Kopyala"
                      >
                        {copiedIndex === idx ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </main>

      <footer className="border-t border-zinc-800/60 py-6 text-center text-xs text-zinc-600">
        AppRadar — En çok kullanılan uygulamaların verimlilik rehberi.
      </footer>
    </div>
  );
}
