"use client";

import React from "react";
import { Sparkles, CalendarDays, Trophy, Flame, Users, ArrowUpRight } from "lucide-react";
import { CardShell } from "@/components/ui/CardShell";
import { Button } from "@/components/ui/Button";

export default function PartnerEventsPage() {
  const events = [
    {
      id: "EVT-101",
      title: "Google Cloud Dev Sprint Invitational",
      sponsor: "Google Cloud Ecosystem",
      prize: "$10,000 Boosted Pot",
      startTime: "Tomorrow @ 18:00 UTC",
      registered: "1,240 Players",
      badge: "Official Major",
    },
    {
      id: "EVT-102",
      title: "Solana Superteam Speed Challenge",
      sponsor: "Solana Foundation",
      prize: "50 SOL + Special NFT Badges",
      startTime: "Sunday @ 20:00 UTC",
      registered: "890 Players",
      badge: "Sponsored Arena",
    },
    {
      id: "EVT-103",
      title: "Next.js 15 Fast-Track Trivia Showdown",
      sponsor: "Vercel Partner Network",
      prize: "$5,000 Swag & Credits",
      startTime: "Next Wed @ 15:00 UTC",
      registered: "620 Players",
      badge: "Community Cup",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* 1. Featured Partner Banner */}
      <div
        data-tutorial="partner-banner"
        className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-r from-violet-950 via-slate-900 to-primary-950 border border-violet-500/30 shadow-2xl"
      >
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Co-Branded Global Partner Series</span>
          </div>

          <h1 className="text-3xl font-black text-white tracking-tight">
            Google Cloud & Fast Finger World Grand Prix 2026
          </h1>

          <p className="text-xs text-slate-300 leading-relaxed">
            Co-host custom tournaments with sponsored prizes, verified partner branding, and automated global shout-outs.
          </p>

          <div className="pt-2 flex items-center gap-3">
            <Button variant="emerald" size="md">
              <Flame className="w-4 h-4 fill-current" />
              <span>Register Co-Branded Arena</span>
            </Button>
            <Button variant="outline" size="md">
              <span>Download Brand Kit</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 2. Upcoming Events Schedule */}
        <div data-tutorial="events-schedule" className="lg:col-span-2">
          <CardShell className="p-6 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-primary/20 text-primary border border-primary/30">
                  <CalendarDays className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Upcoming Tournament Calendar</h3>
                  <p className="text-xs text-slate-400">Scheduled partner competitions with automated open gates.</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {events.map((evt) => (
                <div
                  key={evt.id}
                  className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-primary-400 font-bold">{evt.id}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                        {evt.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white">{evt.title}</h4>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span>Sponsor: <strong className="text-slate-200">{evt.sponsor}</strong></span>
                      <span>•</span>
                      <span>{evt.startTime}</span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between shrink-0 gap-2">
                    <span className="text-xs font-mono font-bold text-emerald-400">{evt.prize}</span>
                    <Button variant="secondary" size="sm">
                      <Users className="w-3.5 h-3.5" />
                      <span>{evt.registered}</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardShell>
        </div>

        {/* 3. Sponsor Boosted Rewards */}
        <div data-tutorial="sponsor-rewards">
          <CardShell className="p-6 space-y-4">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Sponsor Prize Matching</h3>
                <p className="text-xs text-slate-400">Partner subsidized treasury boosts.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Total Matched Boosts:</span>
                <span className="font-bold text-white font-mono">$45,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Active Match Ratio:</span>
                <span className="font-bold text-emerald-400 font-mono">2.0x (100% Match)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Next Distribution:</span>
                <span className="text-slate-200">Nov 15, 2026</span>
              </div>
            </div>

            <Button variant="primary" size="md" className="w-full">
              <span>Apply for Match Sponsorship</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </CardShell>
        </div>
      </div>
    </div>
  );
}
