"use client";

import React from "react";
import Link from "next/link";
import { Search, Bell, Plus, ShieldCheck, Flame } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Topbar() {
  return (
    <header className="h-16 border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-xl px-4 sm:px-6 flex items-center justify-between gap-3 sm:gap-4 sticky top-0 z-10">
      {/* Search Input */}
      <div className="flex-1 min-w-[140px] max-w-xs lg:max-w-sm xl:max-w-md">
        <div className="relative w-full">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search sessions, questions, or tags..."
            className="w-full h-9 bg-slate-900/80 border border-slate-800 rounded-xl pl-9 pr-3.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
          />
        </div>
      </div>

      {/* Topbar Actions */}
      <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 shrink-0">
        {/* System Status Pill */}
        <div className="hidden lg:flex items-center gap-1.5 h-8 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-400 whitespace-nowrap shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="hidden xl:inline">Lobbies Active (42 Rooms)</span>
          <span className="xl:hidden">42 Rooms Active</span>
        </div>

        {/* Prize Pool Turnover Highlight */}
        <div className="hidden md:flex items-center gap-1.5 h-8 px-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-semibold text-amber-400 whitespace-nowrap shrink-0">
          <Flame className="w-3.5 h-3.5 fill-current shrink-0" />
          <span>Pool: $24,850</span>
        </div>

        {/* Create Quiz Button (Tutorial Target) */}
        <Link
          href="/dashboard/services/games/fast-finger/game-sessions/quizzes"
          className="shrink-0"
        >
          <Button
            data-tutorial="topbar-create-quiz"
            variant="primary"
            size="sm"
            className="h-9 px-3.5 rounded-xl font-bold text-xs shadow-md shadow-primary-950/40 whitespace-nowrap"
          >
            <Plus className="w-4 h-4 stroke-[2.5] shrink-0" />
            <span>Create Quiz</span>
          </Button>
        </Link>

        {/* Notifications */}
        <button
          className="relative h-9 w-9 shrink-0 flex items-center justify-center rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
        </button>

        {/* User Profile Pill */}
        <div className="flex items-center gap-2.5 pl-2.5 border-l border-slate-800 shrink-0">
          <div className="w-8 h-8 shrink-0 rounded-xl bg-gradient-to-tr from-primary via-accent-violet to-accent-emerald flex items-center justify-center text-white font-bold text-xs ring-2 ring-primary/30">
            FF
          </div>
          <div className="hidden sm:flex flex-col justify-center text-left leading-tight whitespace-nowrap">
            <div className="text-xs font-bold text-white flex items-center gap-1">
              <span>Admin Host</span>
              <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" />
            </div>
            <span className="text-[10px] text-slate-400 font-mono">ID: #9482</span>
          </div>
        </div>
      </div>
    </header>
  );
}
