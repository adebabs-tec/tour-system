"use client";

import React from "react";
import { BarChart3, TrendingUp, PieChart, Users, Zap, Clock } from "lucide-react";
import { CardShell } from "@/components/ui/CardShell";
import { StatCard } from "@/components/ui/StatCard";

export default function AnalyticsPage() {
  const hourlyData = [
    { hour: "10:00", players: 320, height: "45%" },
    { hour: "12:00", players: 540, height: "70%" },
    { hour: "14:00", players: 410, height: "55%" },
    { hour: "16:00", players: 680, height: "85%" },
    { hour: "18:00", players: 890, height: "100%" },
    { hour: "20:00", players: 740, height: "88%" },
    { hour: "22:00", players: 490, height: "60%" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-black text-white tracking-tight">Analytics & Player Insights</h1>
        <p className="text-xs text-slate-400 mt-1">
          Telemetry data, retention funnels, and difficulty balancing curves.
        </p>
      </div>

      {/* 1. Traffic & Participation Curves Chart */}
      <CardShell data-tutorial="analytics-chart" className="p-6">
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-primary/20 text-primary border border-primary/30">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Concurrency & Participation Velocity</h3>
              <p className="text-xs text-slate-400">Peak player load over 24-hour tournament cycles.</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary-300 border border-primary/30 font-mono">
            Peak: 890 Concurrents
          </span>
        </div>

        {/* Visual Simulated Bar Chart */}
        <div className="h-48 pt-8 flex items-end justify-between gap-3 px-4">
          {hourlyData.map((d) => (
            <div key={d.hour} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <div className="text-[11px] font-mono text-slate-400 group-hover:text-primary transition-colors">
                {d.players}
              </div>
              <div
                className="w-full max-w-[48px] bg-gradient-to-t from-primary-700 via-primary-500 to-accent-violet rounded-t-xl transition-all duration-300 group-hover:brightness-125"
                style={{ height: d.height }}
              />
              <span className="text-[10px] font-mono text-slate-500 mt-1">{d.hour}</span>
            </div>
          ))}
        </div>
      </CardShell>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 2. Player Engagement Stats */}
        <CardShell data-tutorial="engagement-stats" className="p-6 space-y-4">
          <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Player Engagement Score</h3>
              <p className="text-xs text-slate-400">Retention curves and repeat entry frequency.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-xs text-slate-400">Daily Return Rate</span>
              <div className="text-2xl font-black text-white mt-1">74.2%</div>
              <span className="text-[11px] text-emerald-400 font-semibold">+6.1% vs last week</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-xs text-slate-400">Avg. Matches per Player</span>
              <div className="text-2xl font-black text-white mt-1">5.8</div>
              <span className="text-[11px] text-emerald-400 font-semibold">High stickiness</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-xs text-slate-400">Quiz Completion Rate</span>
              <div className="text-2xl font-black text-white mt-1">91.4%</div>
              <span className="text-[11px] text-slate-400">Low early forfeit</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-xs text-slate-400">Average Win Reaction</span>
              <div className="text-2xl font-black text-white mt-1">1.18s</div>
              <span className="text-[11px] text-primary-400 font-semibold">Fast finger reflexes</span>
            </div>
          </div>
        </CardShell>

        {/* 3. Question Difficulty & Drop-off */}
        <CardShell data-tutorial="dropoff-breakdown" className="p-6 space-y-4">
          <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800">
            <div className="p-2 rounded-xl bg-accent-violet/20 text-accent-violet border border-accent-violet/30">
              <PieChart className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Difficulty & Drop-off Breakdown</h3>
              <p className="text-xs text-slate-400">Questions causing timeout spikes or incorrect answers.</p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { category: "Web3 & Cryptography", timeoutRate: "28.4%", status: "Hard" },
              { category: "Advanced Algorithms", timeoutRate: "22.1%", status: "Hard" },
              { category: "World History Trivia", timeoutRate: "14.5%", status: "Moderate" },
              { category: "General Pop Culture", timeoutRate: "4.2%", status: "Balanced" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-slate-950/40 border border-slate-800 flex items-center justify-between text-xs"
              >
                <div>
                  <div className="font-semibold text-white">{item.category}</div>
                  <span className="text-[11px] text-slate-400">Timeout Rate: {item.timeoutRate}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </CardShell>
      </div>
    </div>
  );
}
