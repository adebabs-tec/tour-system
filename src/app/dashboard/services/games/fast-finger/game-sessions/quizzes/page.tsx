"use client";

import React, { useState } from "react";
import { Gamepad2, Filter, Zap, Trophy, Clock, Users, Play } from "lucide-react";
import { CardShell } from "@/components/ui/CardShell";
import { Button } from "@/components/ui/Button";

export default function QuizzesPage() {
  const [selectedTier, setSelectedTier] = useState("All Tiers");

  const quizzes = [
    {
      id: "QZ-01",
      title: "Lightning CodeSprint: TypeScript & React",
      tier: "Grandmaster",
      rounds: 5,
      timer: "2.5s / question",
      players: "128 Players Max",
      reward: "$1,500.00",
    },
    {
      id: "QZ-02",
      title: "Around The Globe: Geography Blitz",
      tier: "Challenger",
      rounds: 7,
      timer: "4.0s / question",
      players: "250 Players Max",
      reward: "$650.00",
    },
    {
      id: "QZ-03",
      title: "Pop Culture & Hollywood Classics",
      tier: "Novice",
      rounds: 10,
      timer: "6.0s / question",
      players: "500 Players Max",
      reward: "$300.00",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-white tracking-tight">Quiz Arena Challenge Hub</h1>
          <p className="text-xs text-slate-400 mt-1">
            Choose curated quiz challenges, filter by difficulty tiers, or launch an instant room.
          </p>
        </div>

        {/* 3. Launch Arena Button */}
        <Button
          data-tutorial="btn-launch-quiz"
          variant="primary"
          size="md"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>Launch Instant Arena</span>
        </Button>
      </div>

      {/* 2. Difficulty Tiers Filter */}
      <div
        data-tutorial="quiz-tiers"
        className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 w-fit text-xs font-semibold"
      >
        <span className="flex items-center gap-1.5 px-3 py-1 text-slate-400">
          <Filter className="w-3.5 h-3.5" />
          <span>Difficulty:</span>
        </span>
        {["All Tiers", "Novice", "Challenger", "Grandmaster"].map((tier) => (
          <button
            key={tier}
            onClick={() => setSelectedTier(tier)}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              selectedTier === tier
                ? "bg-primary text-white shadow-md shadow-primary-950/40"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {tier}
          </button>
        ))}
      </div>

      {/* 1. Quiz Challenge Catalog */}
      <div data-tutorial="quiz-catalog" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <CardShell key={quiz.id} className="p-6 space-y-4 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-primary-400 font-bold text-xs">{quiz.id}</span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    quiz.tier === "Grandmaster"
                      ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      : quiz.tier === "Challenger"
                      ? "bg-violet-500/10 text-violet-400 border border-violet-500/20"
                      : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  }`}
                >
                  {quiz.tier}
                </span>
              </div>

              <h3 className="text-base font-bold text-white leading-snug">{quiz.title}</h3>

              <div className="space-y-1.5 text-xs text-slate-400 pt-1">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    Round Speed:
                  </span>
                  <span className="text-white font-mono">{quiz.timer}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-500" />
                    Max Capacity:
                  </span>
                  <span className="text-white font-mono">{quiz.players}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Prize Pot</span>
                <span className="text-sm font-black text-emerald-400 font-mono">{quiz.reward}</span>
              </div>

              <Button variant="emerald" size="sm">
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Join Lobby</span>
              </Button>
            </div>
          </CardShell>
        ))}
      </div>
    </div>
  );
}
