"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Search, Plus, List, CheckCircle, Clock, Tag } from "lucide-react";
import { CardShell } from "@/components/ui/CardShell";
import { Button } from "@/components/ui/Button";

export default function QuestionsDraftPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const sampleDrafts = [
    {
      id: "Q-901",
      question: "Which data structure uses LIFO (Last In, First Out) ordering?",
      category: "Computer Science",
      difficulty: "Medium",
      correct: "Stack",
      options: ["Queue", "Stack", "Binary Heap", "Linked List"],
      status: "Verified",
    },
    {
      id: "Q-902",
      question: "What is the capital city of Australia?",
      category: "Geography",
      difficulty: "Easy",
      correct: "Canberra",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      status: "Needs Review",
    },
    {
      id: "Q-903",
      question: "Which consensus algorithm is used by Ethereum after The Merge?",
      category: "Blockchain",
      difficulty: "Hard",
      correct: "Proof of Stake (PoS)",
      options: ["Proof of Work", "Proof of Stake (PoS)", "Proof of History", "Raft"],
      status: "Verified",
    },
    {
      id: "Q-904",
      question: "What does CSS stand for in web development?",
      category: "Programming",
      difficulty: "Easy",
      correct: "Cascading Style Sheets",
      options: ["Cascading Style Sheets", "Computer System Syntax", "Creative Style System", "Color Spread Sheets"],
      status: "Verified",
    },
  ];

  const filteredDrafts = sampleDrafts.filter(
    (d) =>
      d.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* 1. Category Tabs */}
      <div
        data-tutorial="questions-tabs"
        className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto text-xs font-semibold"
      >
        <Link
          href="/dashboard/services/games/fast-finger/my-questions/draft"
          className="px-4 py-2 rounded-xl bg-primary text-white shadow-md shadow-primary-950/40"
        >
          Draft Questions (34)
        </Link>
        <Link
          href="/dashboard/services/games/fast-finger/my-questions/live"
          className="px-4 py-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
        >
          Live Arena Questions (180)
        </Link>
        <Link
          href="/dashboard/services/games/fast-finger/my-questions/import"
          className="px-4 py-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
        >
          Bulk Import CSV
        </Link>
        <Link
          href="/dashboard/services/games/fast-finger/my-questions/browse-public"
          className="px-4 py-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
        >
          Community Vault
        </Link>
        <Link
          href="/dashboard/services/games/fast-finger/my-questions/bulk-release"
          className="px-4 py-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
        >
          Bulk Release
        </Link>
        <Link
          href="/dashboard/services/games/fast-finger/my-questions/archived"
          className="px-4 py-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
        >
          Archived
        </Link>
      </div>

      {/* 2. Search & Filter Bar + Add Question Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div data-tutorial="questions-search" className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions by text, tag, or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-primary"
          />
        </div>

        <Button
          data-tutorial="btn-add-question"
          variant="primary"
          size="md"
          className="shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add Single Question</span>
        </Button>
      </div>

      {/* 3. Drafts Queue List */}
      <CardShell data-tutorial="questions-draft-list">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/40">
          <div className="flex items-center gap-2 text-xs font-bold text-white">
            <List className="w-4 h-4 text-primary" />
            <span>Drafts Queue ({filteredDrafts.length} questions)</span>
          </div>
          <span className="text-[11px] text-slate-500">Auto-saved 2 minutes ago</span>
        </div>

        <div className="divide-y divide-slate-800/80">
          {filteredDrafts.map((item) => (
            <div key={item.id} className="p-5 hover:bg-slate-800/20 transition-colors space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-primary-400 font-bold">{item.id}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                      {item.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {item.difficulty}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-white">{item.question}</h4>
                </div>

                <div className="shrink-0">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                      item.status === "Verified"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    }`}
                  >
                    {item.status === "Verified" ? (
                      <CheckCircle className="w-3 h-3" />
                    ) : (
                      <Clock className="w-3 h-3" />
                    )}
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Choices Preview */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {item.options.map((opt, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded-lg border text-center transition-colors ${
                      opt === item.correct
                        ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300 font-semibold"
                        : "bg-slate-950/60 border-slate-800 text-slate-400"
                    }`}
                  >
                    {opt}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardShell>
    </div>
  );
}
