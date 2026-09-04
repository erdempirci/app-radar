"use client";

import { useState } from "react";
import { APPS_DATA } from "../data/apps";
import { Sparkles, Flame, Compass, ChevronRight, CheckCircle2, Zap } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"updates" | "gems">("updates");
  const [selectedAppId, setSelectedAppId] = useState<string>(APPS_DATA[0].id);

  const selectedApp = APPS_DATA.find((a) => a.id === selectedAppId) || APPS_DATA[0];

  return (
    <main className="min-h-screen bg-[#09090b] text-[#fafafa] flex flex-col items-center">
      <header className="w-full max-w-4xl px-6 pt-16 pb-8 text-center border-b border-zinc-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-medium text-emerald-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Demo Sürüm</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight">
          App<span className="text-emerald-400">Radar</span>
        </h1>
        <p className="mt-2 text-zinc-400 text-sm max-w-lg mx-auto">
          En çok kullanılan uygulamaların yeni özelliklerini ve kaçırdığınız pratik güçlerini keşfedin.
        </p>

        <div className="flex justify-center mt-8">
          <div className="flex p-1 bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-xs">
            <button
              onClick={() => setActiveTab("updates")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "updates"
                  ? "bg-zinc-800 text-white border border-zinc-700"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              Yenilikler
            </button>
            <button
              onClick={() => setActiveTab("gems")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "gems"
                  ? "bg-zinc-800 text-white border border-zinc-700"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              Bunu Kaçırıyorsun
            </button>
          </div>
        </div>
      </header>

      <div className="w-full max-w-4xl px-6 py-8">
        {activeTab === "updates" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {APPS_DATA.map((app) => (
              <div key={app.id} className="p-5 bg-zinc-900/50 border border-zinc-800 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-base text-zinc-100">{app.name}</h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">
                      {app.version}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mb-4">{app.headline}</p>

                  <div className="space-y-3 pt-3 border-t border-zinc-800/80">
                    {app.features.map((feat, idx) => (
                      <div key={idx} className="text-xs space-y-1">
                        <div className="flex items-center gap-1.5 font-semibold text-zinc-200">
                          <Zap className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                          <span>{feat.title}</span>
                        </div>
                        <p className="text-zinc-400 pl-5">{feat.summary}</p>
                        <div className="pl-5 text-zinc-500">
                          <span className="text-zinc-400">Nasıl:</span> {feat.how_to}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/40 text-[11px] text-emerald-400 font-medium">
                  Kazanım: {app.features[0]?.gain}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "gems" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
              {APPS_DATA.map((app) => (
                <button
                  key={app.id}
                  onClick={() => setSelectedAppId(app.id)}
                  className={`flex items-center justify-between p-3 rounded-lg border text-left text-xs font-medium transition-all whitespace-nowrap md:whitespace-normal ${
                    selectedAppId === app.id
                      ? "bg-zinc-800 border-zinc-600 text-white"
                      : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <span>{app.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 hidden md:block text-zinc-500" />
                </button>
              ))}
            </div>

            <div className="md:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
              <div className="border-b border-zinc-800 pb-3 mb-4">
                <h2 className="text-lg font-bold text-zinc-100">{selectedApp.name}</h2>
                <p className="text-xs text-zinc-400">Çoğu kullanıcının farkında olmadığı verimlilik özellikleri.</p>
              </div>

              <div className="space-y-4">
                {selectedApp.missed_gems.map((gem, index) => (
                  <div key={index} className="p-3.5 rounded-lg bg-zinc-950/60 border border-zinc-800">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <h4 className="font-semibold text-xs text-zinc-100">{gem.title}</h4>
                        <p className="text-xs text-zinc-400">{gem.description}</p>
                        <div className="mt-2 text-xs bg-zinc-900 p-2 rounded border border-zinc-800 text-zinc-300">
                          <span className="font-semibold text-emerald-400">Nasıl: </span>
                          {gem.tip}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
