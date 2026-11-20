"use client";

import React, { useState } from "react";
import { Wallet, FileText, Table, CheckCircle2, ArrowUpRight, DollarSign } from "lucide-react";
import { CardShell } from "@/components/ui/CardShell";
import { Button } from "@/components/ui/Button";

export default function WithdrawEarningsPage() {
  const [amount, setAmount] = useState("5000");
  const [method, setMethod] = useState("USDC (Solana / Ethereum)");
  const [destination, setDestination] = useState("0x892aF01...492bC");

  const transactions = [
    {
      id: "TX-49201",
      date: "Nov 12, 2026",
      method: "USDC (Solana)",
      amount: "$3,400.00",
      status: "Settled",
      hash: "5Kp9...3zQ",
    },
    {
      id: "TX-49200",
      date: "Nov 08, 2026",
      method: "Bank Wire (ACH)",
      amount: "$12,500.00",
      status: "Settled",
      hash: "ACH-984210",
    },
    {
      id: "TX-49199",
      date: "Nov 01, 2026",
      method: "USDC (Ethereum)",
      amount: "$5,000.00",
      status: "Settled",
      hash: "0x44a...92f",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-black text-white tracking-tight">Withdraw Host Earnings</h1>
        <p className="text-xs text-slate-400 mt-1">
          Disburse accumulated tournament creator fees, rake, and sponsorship royalties.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 1. Wallet Balance Card */}
        <div data-tutorial="wallet-balance-card">
          <CardShell className="p-6 space-y-5 bg-gradient-to-br from-slate-900 via-primary-950/30 to-slate-900 border-primary/30">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-400">
                Host Treasury Balance
              </span>
              <div className="p-2 rounded-xl bg-primary/20 text-primary border border-primary/30">
                <Wallet className="w-4 h-4" />
              </div>
            </div>

            <div>
              <div className="text-3xl font-black text-white font-mono">$18,450.80</div>
              <p className="text-xs text-slate-400 mt-1">Available for immediate withdrawal</p>
            </div>

            <div className="space-y-2 pt-2 text-xs border-t border-slate-800">
              <div className="flex justify-between text-slate-400">
                <span>Platform Security Reserve:</span>
                <span className="text-slate-200 font-mono">$1,500.00</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Settlement Fee:</span>
                <span className="text-emerald-400 font-mono">0.00% (Host tier)</span>
              </div>
            </div>
          </CardShell>
        </div>

        {/* 2. Withdrawal Form */}
        <div data-tutorial="withdrawal-form" className="lg:col-span-2">
          <CardShell className="p-6 space-y-4">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-primary/20 text-primary border border-primary/30">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Initiate Withdrawal Request</h3>
                <p className="text-xs text-slate-400">Funds arrive within seconds for crypto or 1 day for ACH.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">Settlement Method</label>
                <select
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-primary"
                >
                  <option>USDC (Solana / Ethereum)</option>
                  <option>Bank Wire (ACH Direct Transfer)</option>
                  <option>SEPA Euro Settlement</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">Amount (USD)</label>
                <div className="relative">
                  <DollarSign className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-white focus:outline-none focus:border-primary font-mono"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-300 mb-1.5">
                  Receiving Address / Account Reference
                </label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary font-mono"
                />
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <Button variant="emerald" size="md">
                <span>Confirm & Release ${amount}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </CardShell>
        </div>
      </div>

      {/* 3. Past Transactions History */}
      <CardShell data-tutorial="withdrawal-history">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Table className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-bold text-white">Disbursement Audit Log</h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">Immutable ledger audit</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/60 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="px-5 py-3 uppercase tracking-wider font-semibold">Reference ID</th>
                <th className="px-5 py-3 uppercase tracking-wider font-semibold">Date</th>
                <th className="px-5 py-3 uppercase tracking-wider font-semibold">Method</th>
                <th className="px-5 py-3 uppercase tracking-wider font-semibold">Amount</th>
                <th className="px-5 py-3 uppercase tracking-wider font-semibold">Proof Hash</th>
                <th className="px-5 py-3 uppercase tracking-wider font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-5 py-3.5 font-mono text-primary-400 font-semibold">{tx.id}</td>
                  <td className="px-5 py-3.5 text-slate-400">{tx.date}</td>
                  <td className="px-5 py-3.5 font-semibold text-white">{tx.method}</td>
                  <td className="px-5 py-3.5 font-mono font-bold text-emerald-400">{tx.amount}</td>
                  <td className="px-5 py-3.5 font-mono text-slate-500">{tx.hash}</td>
                  <td className="px-5 py-3.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" />
                      {tx.status}
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
