"use client";

import React from "react";
import { Eye, BarChart3, Zap, AlertTriangle, Users, Clock, ShieldAlert } from "lucide-react";
import { CardShell } from "@/components/ui/CardShell";
import { Button } from "@/components/ui/Button";

export default function LiveQuestionsPage() {
  const activeQuestionsInPlay = [
    {
      id: "LIVE-891",
      question: "Which planet has the greatest number of confirmed moons as of 2026?",
      activeRooms: 18,
      avgSpeed: "1.12s",
      accuracy: "84.2%",
    },
    {
      id: "LIVE-892",
      question: "What is the time complexity of searching an element in a balanced AVL tree?",
      activeRooms: 12,
      avgSpeed: "0.98s",
      accuracy: "92.0%",
    },
    {
      id: "LIVE-893",
      question: "In which year did the Apollo 11 mission successfully land on the Moon?",
      activeRooms: 24,
      avgSpeed: "1.34s",
      accuracy: "95.5%",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Real-time Telemetry Stream</span>
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">Active Live Questions Monitor</h1>
          <p className="text-xs text-slate-400">
            Real-time feed of questions currently served across active player rooms.
          </p>
        </div>

        {/* 3. Emergency Pause Control */}
        <Button
          data-tutorial="btn-emergency-pause"
          variant="danger"
          size="md"
        >
          <ShieldAlert className="w-4 h-4" />
          <span>Emergency Intercept / Freeze Rotation</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 1. Real-time Live Feed */}
        <div data-tutorial="live-monitor" className="lg:col-span-2">
          <CardShell className="p-6 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-bold text-white">Active Questions In Rotation</h3>
              </div>
              <span className="text-xs font-mono text-emerald-400">54 Rooms Live</span>
            </div>

            <div className="space-y-3">
              {activeQuestionsInPlay.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-all space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-primary-400 font-bold">{item.id}</span>
                    <span className="text-slate-400 font-mono">Running in {item.activeRooms} concurrent matches</span>
                  </div>
                  <h4 className="font-semibold text-white text-sm">{item.question}</h4>
                  <div className="flex items-center gap-4 text-slate-400 pt-1 text-[11px]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-primary-400" />
                      Speed: <strong className="text-white">{item.avgSpeed}</strong>
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-emerald-400" />
                      Accuracy: <strong className="text-white">{item.accuracy}</strong>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardShell>
        </div>

        {/* 2. Live Accuracy Stats */}
        <div data-tutorial="active-stats">
          <CardShell className="p-6 space-y-4">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-800">
              <BarChart3 className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-bold text-white">Live Answer Dynamics</h3>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-slate-400">Average Global Accuracy</span>
                <div className="text-2xl font-black text-white mt-1">88.6%</div>
                <div className="mt-2 w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[88.6%] h-full bg-emerald-500 rounded-full" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-slate-400">Sub-1s Answers Ratio</span>
                <div className="text-2xl font-black text-white mt-1">42.1%</div>
                <div className="mt-2 w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[42.1%] h-full bg-primary-500 rounded-full" />
                </div>
              </div>
            </div>
          </CardShell>
        </div>
      </div>
    </div>
  );
}
