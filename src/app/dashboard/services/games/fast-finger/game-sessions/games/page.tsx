"use client";

import React, { useState } from "react";
import { Gamepad2, Settings, Layers, Trophy, Play, Plus, Clock } from "lucide-react";
import { CardShell } from "@/components/ui/CardShell";
import { Button } from "@/components/ui/Button";

export default function CreateGamePage() {
  const [gameTitle, setGameTitle] = useState("Speed Trivia Arena: Friday Finals");
  const [difficulty, setDifficulty] = useState("Hard (Lightning 3s)");
  const [maxPlayers, setMaxPlayers] = useState("500");
  const [questionPool, setQuestionPool] = useState("curated-tech-fast");
  const [prizeTier, setPrizeTier] = useState("Pro League ($2,500)");

  return (
    <div className="space-y-8 animate-fade-in">
      {/* 1. Header */}
      <div
        data-tutorial="create-game-header"
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl"
      >
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-400">
            <Gamepad2 className="w-4 h-4" />
            <span>Session Deployment Manager</span>
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">Creating a Game Session</h1>
          <p className="text-xs text-slate-400">
            Configure tournament settings, question draw pools, countdown speeds, and reward distributions.
          </p>
        </div>

        <Button variant="emerald" size="md">
          <Play className="w-4 h-4 fill-current" />
          <span>Deploy Match Live</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 2. Match Configurations Card */}
        <div data-tutorial="game-config-card" className="lg:col-span-2">
          <CardShell className="p-6 space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-primary/20 text-primary border border-primary/30">
                <Settings className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Match Configurations</h3>
                <p className="text-xs text-slate-400">Basic metadata and entry requirements.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Tournament Lobby Title
                </label>
                <input
                  type="text"
                  value={gameTitle}
                  onChange={(e) => setGameTitle(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Difficulty Profile
                  </label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-primary"
                  >
                    <option>Novice (Slow 10s)</option>
                    <option>Standard (Paced 6s)</option>
                    <option>Hard (Lightning 3s)</option>
                    <option>Sudden Death (1.5s Rapid)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Player Cap (Max Participants)
                  </label>
                  <input
                    type="number"
                    value={maxPlayers}
                    onChange={(e) => setMaxPlayers(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* 3. Question Pool Selector */}
            <div data-tutorial="question-pool-select" className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" />
                  <label className="text-xs font-bold text-white">Question Pool Assignment</label>
                </div>
                <span className="text-[11px] text-primary-400 font-mono">15 Questions Loaded</span>
              </div>

              <select
                value={questionPool}
                onChange={(e) => setQuestionPool(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary"
              >
                <option value="curated-tech-fast">Curated Tech Trivia - Fast Finger Vault (480 Questions)</option>
                <option value="pop-culture-speed">Global Pop Culture & Music Sprint (320 Questions)</option>
                <option value="crypto-defi">DeFi & Web3 High-Speed Challenge (150 Questions)</option>
                <option value="custom-draft">Draft Pool: My Pending Questions (34 Questions)</option>
              </select>
              <p className="text-[11px] text-slate-500">
                Randomized draw ensures fair gameplay and reduces collusion during rapid-fire rounds.
              </p>
            </div>
          </CardShell>
        </div>

        {/* 4. Timer & Prize Structure Card */}
        <div data-tutorial="game-rules-card">
          <CardShell className="p-6 space-y-5">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Timer & Prize Structure</h3>
                <p className="text-xs text-slate-400">Speed bonuses and payout curves.</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">Prize Pot Tier</label>
                <select
                  value={prizeTier}
                  onChange={(e) => setPrizeTier(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-primary"
                >
                  <option>Casual League ($250)</option>
                  <option>Challenger ($1,000)</option>
                  <option>Pro League ($2,500)</option>
                  <option>High Roller Arena ($10,000)</option>
                </select>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    Round Timer
                  </span>
                  <span className="text-white font-mono font-bold">12 Seconds</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Fast-Finger Multiplier</span>
                  <span className="text-emerald-400 font-mono font-bold">Up to 3.0x</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>1st Place Share</span>
                  <span className="text-white font-mono font-bold">60%</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>2nd - 5th Place</span>
                  <span className="text-white font-mono font-bold">40% Split</span>
                </div>
              </div>

              <Button variant="primary" size="md" className="w-full">
                <Plus className="w-4 h-4" />
                <span>Save Rule Template</span>
              </Button>
            </div>
          </CardShell>
        </div>
      </div>
    </div>
  );
}
