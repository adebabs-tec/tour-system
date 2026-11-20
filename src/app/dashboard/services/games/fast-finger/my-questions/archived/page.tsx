"use client";

import React from "react";
import { Archive, Plus, Trash2, RotateCcw, AlertOctagon } from "lucide-react";
import { CardShell } from "@/components/ui/CardShell";
import { Button } from "@/components/ui/Button";

export default function ArchivedQuestionsPage() {
  const archivedItems = [
    {
      id: "ARC-101",
      question: "Which team won the 2018 FIFA World Cup in Russia?",
      category: "Sports",
      archivedDate: "Oct 14, 2026",
      reason: "Seasonal Tournament End",
    },
    {
      id: "ARC-102",
      question: "What was the codename for Android 4.4 release?",
      category: "Tech History",
      archivedDate: "Sep 28, 2026",
      reason: "High Exposure Saturation",
    },
    {
      id: "ARC-103",
      question: "Who was the first female Prime Minister of the United Kingdom?",
      category: "History",
      archivedDate: "Aug 11, 2026",
      reason: "Periodic Rotation",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-white tracking-tight">Archived Questions Vault</h1>
          <p className="text-xs text-slate-400 mt-1">
            Questions retired from active rotation. Restore back to drafts anytime or permanently purge.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* 2. Restore Action Button */}
          <Button
            data-tutorial="btn-restore-archive"
            variant="primary"
            size="md"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Restore All to Drafts</span>
          </Button>

          {/* 3. Purge Action Button */}
          <Button
            data-tutorial="btn-purge-archive"
            variant="danger"
            size="md"
          >
            <Trash2 className="w-4 h-4" />
            <span>Permanently Purge Vault</span>
          </Button>
        </div>
      </div>

      {/* 1. Archive Storage Table */}
      <CardShell data-tutorial="archived-table">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Archive className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-bold text-white">Cold Storage Archive (3 Items)</h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">Retained securely in cold storage</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/60 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="px-5 py-3 uppercase tracking-wider font-semibold">Archive ID</th>
                <th className="px-5 py-3 uppercase tracking-wider font-semibold">Question Text</th>
                <th className="px-5 py-3 uppercase tracking-wider font-semibold">Category</th>
                <th className="px-5 py-3 uppercase tracking-wider font-semibold">Retired Date</th>
                <th className="px-5 py-3 uppercase tracking-wider font-semibold">Retirement Reason</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {archivedItems.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-5 py-3.5 font-mono text-primary-400 font-semibold">{item.id}</td>
                  <td className="px-5 py-3.5 font-semibold text-white">{item.question}</td>
                  <td className="px-5 py-3.5 text-slate-400">{item.category}</td>
                  <td className="px-5 py-3.5 text-slate-500 font-mono">{item.archivedDate}</td>
                  <td className="px-5 py-3.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                      {item.reason}
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
