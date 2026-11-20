"use client";

import React, { useState } from "react";
import { Upload, FileText, Table, CheckCircle2, Download, AlertCircle } from "lucide-react";
import { CardShell } from "@/components/ui/CardShell";
import { Button } from "@/components/ui/Button";

export default function ImportQuestionsPage() {
  const [fileName, setFileName] = useState("trivia_batch_nov_2026.csv");

  const parsedSample = [
    {
      row: 1,
      question: "What is the primary currency of Japan?",
      category: "Economics",
      correctOption: "Japanese Yen (JPY)",
      status: "Valid",
    },
    {
      row: 2,
      question: "Which planet is known as the Red Planet?",
      category: "Astronomy",
      correctOption: "Mars",
      status: "Valid",
    },
    {
      row: 3,
      question: "Who developed the theory of General Relativity?",
      category: "Physics",
      correctOption: "Albert Einstein",
      status: "Valid",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-white tracking-tight">Bulk Import Questions</h1>
          <p className="text-xs text-slate-400 mt-1">
            Upload large question banks via CSV or JSON format with automatic schema validation.
          </p>
        </div>

        {/* 2. Download Template Button */}
        <Button
          data-tutorial="btn-download-template"
          variant="outline"
          size="md"
        >
          <Download className="w-4 h-4" />
          <span>Download CSV Template (.csv)</span>
        </Button>
      </div>

      {/* 1. Drag and Drop Upload Zone */}
      <div
        data-tutorial="import-dropzone"
        className="rounded-3xl border-2 border-dashed border-primary/40 bg-slate-900/40 hover:bg-slate-900/60 transition-all p-10 flex flex-col items-center justify-center text-center cursor-pointer group"
      >
        <div className="w-14 h-14 rounded-2xl bg-primary/20 text-primary border border-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Upload className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-white">Drag & drop your question spreadsheet here</h3>
        <p className="text-xs text-slate-400 mt-1 max-w-sm">
          Supports CSV, XLSX, and JSON files up to 10MB. Questions will be validated against syntax and duplicate checks.
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs font-mono text-primary-300 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
          <span>Active File: {fileName}</span>
        </div>
      </div>

      {/* 3. Live Parsing Preview */}
      <CardShell data-tutorial="import-preview-table">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Table className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-bold text-white">Parsed File Preview (3 of 3 Loaded)</h3>
          </div>
          <Button variant="emerald" size="sm">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Commit 3 Questions to Drafts</span>
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/60 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="px-5 py-3 font-semibold uppercase">Row</th>
                <th className="px-5 py-3 font-semibold uppercase">Question Text</th>
                <th className="px-5 py-3 font-semibold uppercase">Category</th>
                <th className="px-5 py-3 font-semibold uppercase">Target Correct Option</th>
                <th className="px-5 py-3 font-semibold uppercase">Validation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {parsedSample.map((item) => (
                <tr key={item.row} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-5 py-3.5 font-mono text-slate-500 font-bold">#{item.row}</td>
                  <td className="px-5 py-3.5 font-semibold text-white">{item.question}</td>
                  <td className="px-5 py-3.5 text-slate-400">{item.category}</td>
                  <td className="px-5 py-3.5 font-mono text-emerald-400">{item.correctOption}</td>
                  <td className="px-5 py-3.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" />
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
