"use client";

import React from "react";
import { Layers, Info, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";
import { CardShell } from "@/components/ui/CardShell";
import { Button } from "@/components/ui/Button";

export default function BulkReleasePage() {
  const stagingItems = [
    {
      id: "STG-101",
      category: "Science",
      title: "Atmospheric Layers & Ozone Concentrations",
      questionsCount: 25,
      qcScore: "100%",
    },
    {
      id: "STG-102",
      category: "Sports",
      title: "World Cup Finals Matchups (1990 - 2022)",
      questionsCount: 30,
      qcScore: "98%",
    },
    {
      id: "STG-103",
      category: "Coding",
      title: "TypeScript 5.x & React 19 Trivia",
      questionsCount: 20,
      qcScore: "100%",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-white tracking-tight">Bulk Question Release Pipeline</h1>
          <p className="text-xs text-slate-400 mt-1">
            Stage vetted question sets and promote them seamlessly into active live tournament pools.
          </p>
        </div>

        {/* 3. One-Click Publish Button */}
        <Button
          data-tutorial="btn-publish-all"
          variant="emerald"
          size="md"
        >
          <Sparkles className="w-4 h-4" />
          <span>Publish 75 Questions to Live Arena</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 1. Staging Queue */}
        <div data-tutorial="staging-queue" className="lg:col-span-2">
          <CardShell className="p-6 space-y-4">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-800">
              <Layers className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-bold text-white">Staging Pipeline Queue (3 Batches)</h3>
            </div>

            <div className="space-y-3">
              {stagingItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-primary-400 font-bold">{item.id}</span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-semibold text-[10px]">
                        {item.category}
                      </span>
                    </div>
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      {item.questionsCount} Questions in Batch
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" />
                      QC: {item.qcScore}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardShell>
        </div>

        {/* 2. Quality Control Checklist */}
        <div data-tutorial="qc-status">
          <CardShell className="p-6 space-y-4">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-800">
              <Info className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-bold text-white">QC Standard Compliance</h3>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    Zero Ambiguity Check
                  </span>
                  <span className="font-mono text-slate-400">Passed</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    Timer Length Calibration
                  </span>
                  <span className="font-mono text-slate-400">Passed</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    Plagiarism / AI Novelty
                  </span>
                  <span className="font-mono text-slate-400">Passed</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed">
                Releasing batches triggers hot reload on all lobby nodes without disconnecting active tournaments.
              </p>
            </div>
          </CardShell>
        </div>
      </div>
    </div>
  );
}
