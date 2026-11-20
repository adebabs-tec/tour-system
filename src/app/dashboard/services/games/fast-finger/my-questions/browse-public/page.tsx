"use client";

import React from "react";
import { Globe, BookOpen, Copy, Star, CheckCircle, Search } from "lucide-react";
import { CardShell } from "@/components/ui/CardShell";
import { Button } from "@/components/ui/Button";

export default function BrowsePublicPage() {
  const categories = [
    { name: "Science & Technology", count: "1,420 Questions", icon: "🚀" },
    { name: "World History", count: "890 Questions", icon: "🏛️" },
    { name: "Pop Culture & Cinema", count: "2,150 Questions", icon: "🎬" },
    { name: "Coding & Web3", count: "640 Questions", icon: "💻" },
    { name: "Sports & Athletics", count: "1,100 Questions", icon: "⚽" },
  ];

  const publicFeed = [
    {
      id: "PUB-501",
      author: "@TriviaWizard",
      rating: "4.9 ★ (182 reviews)",
      category: "Science & Technology",
      question: "What is the speed of light in vacuum to the nearest thousand km/s?",
      answer: "299,792 km/s",
    },
    {
      id: "PUB-502",
      author: "@CodeMaster_Dan",
      rating: "4.8 ★ (95 reviews)",
      category: "Coding & Web3",
      question: "Which HTTP status code signifies 'I'm a teapot' (RFC 2324)?",
      answer: "418 I'm a teapot",
    },
    {
      id: "PUB-503",
      author: "@CinemaFanatic",
      rating: "5.0 ★ (310 reviews)",
      category: "Pop Culture & Cinema",
      question: "Which movie won the first Academy Award for Best Animated Feature in 2002?",
      answer: "Shrek",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-black text-white tracking-tight">Public Community Question Vault</h1>
        <p className="text-xs text-slate-400 mt-1">
          Explore curated trivia packs from top educators and fork them directly into your personal repository.
        </p>
      </div>

      {/* 1. Community Categories */}
      <div data-tutorial="community-categories" className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-white">
          <Globe className="w-4 h-4 text-primary" />
          <span>Trending Curated Categories</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-primary/50 cursor-pointer transition-all group"
            >
              <div className="text-2xl mb-1.5">{cat.icon}</div>
              <div className="text-xs font-bold text-white group-hover:text-primary transition-colors">
                {cat.name}
              </div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">{cat.count}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Public Questions Feed & 3. Fork Button */}
      <CardShell data-tutorial="public-questions-list">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-bold text-white">Community Question Feed</h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">Verified Trivia Guild</span>
        </div>

        <div className="divide-y divide-slate-800/80">
          {publicFeed.map((item, idx) => (
            <div key={item.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-800/20 transition-colors">
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-mono text-primary-400 font-bold">{item.id}</span>
                  <span className="text-slate-400 font-medium">{item.author}</span>
                  <span className="text-amber-400 text-[11px] font-semibold">{item.rating}</span>
                </div>
                <h4 className="text-sm font-semibold text-white">{item.question}</h4>
                <p className="text-xs text-emerald-400 font-mono">Answer: {item.answer}</p>
              </div>

              {/* Fork Action Button (Targeted by step) */}
              <Button
                data-tutorial={idx === 0 ? "btn-fork-question" : undefined}
                variant="primary"
                size="sm"
                className="shrink-0"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Fork to My Drafts</span>
              </Button>
            </div>
          ))}
        </div>
      </CardShell>
    </div>
  );
}
