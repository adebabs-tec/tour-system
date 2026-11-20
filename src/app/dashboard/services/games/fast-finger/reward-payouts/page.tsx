"use client";

import React, { useState } from "react";
import { Wallet, Table, Zap, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";
import { CardShell } from "@/components/ui/CardShell";
import { Button } from "@/components/ui/Button";

export default function RewardPayoutsPage() {
  const [selectedAll, setSelectedAll] = useState(true);

  const pendingWinners = [
    {
      id: "WIN-910",
      player: "SpeedDemon_99",
      wallet: "0x7F2a...981c",
      session: "Lightning Tech Trivia #42",
      rank: "1st Place",
      prize: "$750.00",
      antiCheat: "Passed 100%",
    },
    {
      id: "WIN-911",
      player: "Sarah_Trivia",
      wallet: "0x3B99...2104",
      session: "Lightning Tech Trivia #42",
      rank: "2nd Place",
      prize: "$300.00",
      antiCheat: "Passed 100%",
    },
    {
      id: "WIN-912",
      player: "NeoMatrix",
      wallet: "0x9812...E09a",
      session: "Lightning Tech Trivia #42",
      rank: "3rd Place",
      prize: "$200.00",
      antiCheat: "Passed 100%",
    },
    {
      id: "WIN-913",
      player: "Fast_Freddy",
      wallet: "0xAA10...5541",
      session: "World Capitals Speed Sprint",
      rank: "1st Place",
      prize: "$360.00",
      antiCheat: "Passed 99.4%",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* 1. Overview Summary Cards */}
      <div
        data-tutorial="payouts-overview"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <StatCard
          title="Escrow Balance"
          value="$124,500.00"
          change="Secured"
          isPositive={true}
          icon={Wallet}
          subtext="Smart contract escrow reserve"
        />
        <StatCard
          title="Pending Approval"
          value="$1,610.00"
          change="4 Winners"
          isPositive={true}
          icon={AlertTriangle}
          subtext="Cleared automated anti-cheat"
        />
        <StatCard
          title="Settled (Last 24h)"
          value="$24,850.00"
          change="+8.2%"
          isPositive={true}
          icon={CheckCircle2}
          subtext="Instant blockchain broadcasts"
        />
        <StatCard
          title="Anti-Cheat Accuracy"
          value="99.99%"
          change="Normal"
          isPositive={true}
          icon={ShieldCheck}
          subtext="Zero disputed results"
        />
      </div>

      {/* 2. Pending Approvals Table & Batch Release Button */}
      <CardShell data-tutorial="pending-payouts-table">
        <div className="p-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-primary/20 text-primary border border-primary/30">
              <Table className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">
                Pending Winner Disbursals
              </h3>
              <p className="text-xs text-slate-400">
                Audited tournament results ready for immediate payout broadcast.
              </p>
            </div>
          </div>

          <Button
            data-tutorial="btn-batch-payout"
            variant="emerald"
            size="md"
            className="shrink-0"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>One-Click Batch Release ($1,610)</span>
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/60 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="px-5 py-3">
                  <input
                    type="checkbox"
                    checked={selectedAll}
                    onChange={(e) => setSelectedAll(e.target.checked)}
                    className="rounded bg-slate-900 border-slate-700 text-primary focus:ring-primary"
                  />
                </th>
                <th className="px-5 py-3 font-semibold uppercase tracking-wider">Disbursal ID</th>
                <th className="px-5 py-3 font-semibold uppercase tracking-wider">Player Handle</th>
                <th className="px-5 py-3 font-semibold uppercase tracking-wider">Settlement Wallet</th>
                <th className="px-5 py-3 font-semibold uppercase tracking-wider">Session</th>
                <th className="px-5 py-3 font-semibold uppercase tracking-wider">Standing</th>
                <th className="px-5 py-3 font-semibold uppercase tracking-wider">Prize Amount</th>
                <th className="px-5 py-3 font-semibold uppercase tracking-wider">Integrity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {pendingWinners.map((winner) => (
                <tr key={winner.id} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-5 py-3.5">
                    <input
                      type="checkbox"
                      checked={selectedAll}
                      onChange={() => {}}
                      className="rounded bg-slate-900 border-slate-700 text-primary focus:ring-primary"
                    />
                  </td>
                  <td className="px-5 py-3.5 font-mono text-primary-400 font-semibold">
                    {winner.id}
                  </td>
                  <td className="px-5 py-3.5 font-semibold text-white">{winner.player}</td>
                  <td className="px-5 py-3.5 font-mono text-slate-400">{winner.wallet}</td>
                  <td className="px-5 py-3.5 text-slate-300">{winner.session}</td>
                  <td className="px-5 py-3.5 font-semibold text-amber-400">{winner.rank}</td>
                  <td className="px-5 py-3.5 font-bold font-mono text-emerald-400">
                    {winner.prize}
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <ShieldCheck className="w-3 h-3" />
                      {winner.antiCheat}
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
