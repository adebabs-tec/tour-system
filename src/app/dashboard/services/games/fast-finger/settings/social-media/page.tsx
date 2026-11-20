"use client";

import React, { useState } from "react";
import { Share2, Settings, Link as LinkIcon, CheckCircle2, Copy } from "lucide-react";
import { CardShell } from "@/components/ui/CardShell";
import { Button } from "@/components/ui/Button";

export default function SocialMediaSettingsPage() {
  const [copied, setCopied] = useState(false);
  const inviteLink = "https://fastfinger.arena/join?code=GRANDPRIX26";

  const handleCopy = () => {
    navigator.clipboard?.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-black text-white tracking-tight">Social Media & Broadcast Integrations</h1>
        <p className="text-xs text-slate-400 mt-1">
          Automate match countdown alerts, viral referral invites, and winner hall-of-fame posts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 1. Connected Channels */}
        <CardShell data-tutorial="social-accounts" className="p-6 space-y-4">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-800">
            <Share2 className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-bold text-white">Linked Channels & Bots</h3>
          </div>

          <div className="space-y-3">
            {[
              { name: "X (formerly Twitter)", handle: "@FastFingerArena", status: "Connected", active: true },
              { name: "Discord Webhook Bot", handle: "#tournament-announcements", status: "Connected", active: true },
              { name: "Telegram Channel", handle: "@FastFingerPrizes", status: "Connected", active: true },
            ].map((acc, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs"
              >
                <div>
                  <div className="font-semibold text-white">{acc.name}</div>
                  <span className="text-[11px] text-slate-400 font-mono">{acc.handle}</span>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  {acc.status}
                </span>
              </div>
            ))}
          </div>
        </CardShell>

        {/* 2. Automated Winner Announcements */}
        <CardShell data-tutorial="social-announcements" className="p-6 space-y-4">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-800">
            <Settings className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-bold text-white">Automated Broadcast Rules</h3>
          </div>

          <div className="space-y-3 text-xs">
            <label className="flex items-center gap-2.5 text-slate-300">
              <input type="checkbox" defaultChecked className="rounded bg-slate-900 border-slate-700 text-primary" />
              <span>Post instant winner announcement when prize pot exceeds $500</span>
            </label>
            <label className="flex items-center gap-2.5 text-slate-300">
              <input type="checkbox" defaultChecked className="rounded bg-slate-900 border-slate-700 text-primary" />
              <span>Broadcast 15-minute countdown alerts prior to major tournament starts</span>
            </label>
            <label className="flex items-center gap-2.5 text-slate-300">
              <input type="checkbox" defaultChecked className="rounded bg-slate-900 border-slate-700 text-primary" />
              <span>Auto-tag co-branded partner sponsors in podium celebration images</span>
            </label>
          </div>
        </CardShell>

        {/* 3. Viral Share Links */}
        <div data-tutorial="share-links-card" className="lg:col-span-2">
          <CardShell className="p-6 space-y-3">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
              <LinkIcon className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-bold text-white">Sharable Arena Invite Link</h3>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="text"
                readOnly
                value={inviteLink}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-primary-300 font-mono focus:outline-none"
              />
              <Button
                variant="primary"
                size="md"
                onClick={handleCopy}
                className="shrink-0 w-full sm:w-auto"
              >
                {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied Link!" : "Copy Invite Link"}</span>
              </Button>
            </div>
          </CardShell>
        </div>
      </div>
    </div>
  );
}
