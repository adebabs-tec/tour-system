"use client";

import React from "react";
import Link from "next/link";
import {
  Users,
  Trophy,
  Flame,
  Clock,
  Sparkles,
  ArrowUpRight,
  Play,
  Gamepad2,
  CheckCircle2,
} from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";
import { CardShell } from "@/components/ui/CardShell";
import { Button } from "@/components/ui/Button";
import TutorialToggleCard from "@/components/tutorial/TutorialToggleCard";

export default function FastFingerDashboardPage() {
  const activeSessions = [
    {
      id: "SES-8402",
      title: "Lightning Tech Trivia #42",
      host: "Alex Rivers",
      participants: "420 / 500",
      pot: "$1,250",
      status: "In Progress",
      round: "Round 4 / 7",
    },
    {
      id: "SES-8403",
      title: "World Capitals Speed Sprint",
      host: "Maria Chen",
      participants: "189 / 200",
      pot: "$600",
      status: "Starting in 2m",
      round: "Lobby Open",
    },
    {
      id: "SES-8404",
      title: "Crypto & Web3 Masterclass",
      host: "Satoshi_Fan",
      participants: "940 / 1000",
      pot: "$4,500",
      status: "In Progress",
      round: "Final Sudden Death",
    },
    {
      id: "SES-8405",
      title: "80s & 90s Pop Music Mania",
      host: "RetroKing",
      participants: "310 / 350",
      pot: "$850",
      status: "Completed",
      round: "Winner Declared",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* 1. Header with greeting and fast launch */}
      <div
        data-tutorial="dashboard-header"
        className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-primary-950/40 to-slate-900 border border-slate-800 shadow-xl"
      >
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-300 border border-primary/30 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Finger Arena Command Center</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-sm text-slate-400">
            Real-time live player activity, rapid-fire tournaments, and question engine telemetry.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/dashboard/services/games/fast-finger/game-sessions/games">
            <Button variant="primary" size="md">
              <Play className="w-4 h-4 fill-current" />
              <span>Launch New Match</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* 2. Key Performance Metrics Grid */}
      <div
        data-tutorial="metrics-grid"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <StatCard
          title="Active Participants"
          value="14,892"
          change="+18.4%"
          isPositive={true}
          icon={Users}
          subtext="Across 42 live tournament rooms"
        />
        <StatCard
          title="Prize Pool Turnover"
          value="$24,850"
          change="+12.6%"
          isPositive={true}
          icon={Trophy}
          subtext="Today's settled disbursements"
        />
        <StatCard
          title="Avg. Answer Speed"
          value="1.42s"
          change="-0.3s"
          isPositive={true}
          icon={Clock}
          subtext="High-reflex accuracy tier"
        />
        <StatCard
          title="System Concurrency"
          value="99.98%"
          change="Ultra High"
          isPositive={true}
          icon={Flame}
          subtext="Zero packet drops detected"
        />
      </div>

      {/* 3. Tutorial Toggle & Management Card */}
      <div>
        <TutorialToggleCard />
      </div>

      {/* 4. Active & Recent Games Table */}
      <CardShell data-tutorial="recent-games-table">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-primary/20 text-primary border border-primary/30">
              <Gamepad2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">
                Live & Recent Game Sessions
              </h3>
              <p className="text-xs text-slate-400">
                Matches currently being broadcasted across global player lobbies.
              </p>
            </div>
          </div>

          <Link href="/dashboard/services/games/fast-finger/game-sessions/games">
            <Button variant="outline" size="sm">
              <span>View All Arenas</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/60 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="px-5 py-3 font-semibold uppercase tracking-wider">Session ID</th>
                <th className="px-5 py-3 font-semibold uppercase tracking-wider">Title</th>
                <th className="px-5 py-3 font-semibold uppercase tracking-wider">Host</th>
                <th className="px-5 py-3 font-semibold uppercase tracking-wider">Players</th>
                <th className="px-5 py-3 font-semibold uppercase tracking-wider">Prize Pot</th>
                <th className="px-5 py-3 font-semibold uppercase tracking-wider">Phase</th>
                <th className="px-5 py-3 font-semibold uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {activeSessions.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-5 py-3.5 font-mono text-primary-400 font-semibold">
                    {item.id}
                  </td>
                  <td className="px-5 py-3.5 font-semibold text-white">
                    {item.title}
                  </td>
                  <td className="px-5 py-3.5 text-slate-400">{item.host}</td>
                  <td className="px-5 py-3.5 font-mono">{item.participants}</td>
                  <td className="px-5 py-3.5 font-bold text-emerald-400 font-mono">
                    {item.pot}
                  </td>
                  <td className="px-5 py-3.5 text-slate-400">{item.round}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        item.status === "In Progress"
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : item.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-primary/20 text-primary-300 border border-primary/30"
                      }`}
                    >
                      {item.status === "In Progress" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      )}
                      {item.status === "Completed" && (
                        <CheckCircle2 className="w-3 h-3" />
                      )}
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardShell>
    </div>
  );
}
