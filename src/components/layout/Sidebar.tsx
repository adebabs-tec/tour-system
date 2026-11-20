"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Gamepad2,
  Trophy,
  CalendarDays,
  BookOpen,
  Eye,
  Upload,
  Globe,
  Layers,
  Archive,
  Wallet,
  BarChart3,
  CreditCard,
  Share2,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavGroup {
  label: string;
  items: {
    label: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
}

const navGroups: NavGroup[] = [
  {
    label: "Overview",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard/services/games/fast-finger",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: "Game Sessions",
    items: [
      {
        label: "Create Game",
        href: "/dashboard/services/games/fast-finger/game-sessions/games",
        icon: Gamepad2,
      },
      {
        label: "Quizzes",
        href: "/dashboard/services/games/fast-finger/game-sessions/quizzes",
        icon: Trophy,
      },
      {
        label: "Partner Events",
        href: "/dashboard/services/games/fast-finger/game-sessions/events",
        icon: CalendarDays,
      },
    ],
  },
  {
    label: "Question Bank",
    items: [
      {
        label: "Drafts",
        href: "/dashboard/services/games/fast-finger/my-questions/draft",
        icon: BookOpen,
      },
      {
        label: "Live Monitor",
        href: "/dashboard/services/games/fast-finger/my-questions/live",
        icon: Eye,
      },
      {
        label: "Bulk Import",
        href: "/dashboard/services/games/fast-finger/my-questions/import",
        icon: Upload,
      },
      {
        label: "Browse Public",
        href: "/dashboard/services/games/fast-finger/my-questions/browse-public",
        icon: Globe,
      },
      {
        label: "Bulk Release",
        href: "/dashboard/services/games/fast-finger/my-questions/bulk-release",
        icon: Layers,
      },
      {
        label: "Archived",
        href: "/dashboard/services/games/fast-finger/my-questions/archived",
        icon: Archive,
      },
    ],
  },
  {
    label: "Finance & Analytics",
    items: [
      {
        label: "Reward Payouts",
        href: "/dashboard/services/games/fast-finger/reward-payouts",
        icon: Wallet,
      },
      {
        label: "Analytics Hub",
        href: "/dashboard/services/games/fast-finger/analytics",
        icon: BarChart3,
      },
      {
        label: "Withdraw Earnings",
        href: "/dashboard/services/games/fast-finger/withdraw-earnings",
        icon: CreditCard,
      },
    ],
  },
  {
    label: "Configuration",
    items: [
      {
        label: "Social Media",
        href: "/dashboard/services/games/fast-finger/settings/social-media",
        icon: Share2,
      },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      data-tutorial="sidebar-nav"
      className="w-64 shrink-0 bg-slate-950/80 border-r border-slate-800/80 flex flex-col h-screen sticky top-0 backdrop-blur-xl z-20"
    >
      {/* Brand Logo Header */}
      <div className="h-16 px-6 flex items-center gap-3 border-b border-slate-800/80">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary-600 via-primary-500 to-accent-violet flex items-center justify-center text-white shadow-lg shadow-primary-950/50">
          <Zap className="w-5 h-5 fill-current" />
        </div>
        <div>
          <div className="text-sm font-black tracking-tight text-white flex items-center gap-1.5">
            <span>FAST FINGER</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded font-mono bg-primary/20 text-primary-300 border border-primary/30">
              v2.4
            </span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium">Tournaments & Quizzes</p>
        </div>
      </div>

      {/* Nav Link Groups */}
      <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-6">
        {navGroups.map((group) => (
          <div key={group.label} className="space-y-1">
            <div className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              {group.label}
            </div>
            <div className="space-y-0.5 mt-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-150 group",
                      isActive
                        ? "bg-primary text-white shadow-md shadow-primary-950/40"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/80"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-4 h-4 transition-transform group-hover:scale-110",
                        isActive ? "text-white" : "text-slate-500 group-hover:text-slate-300"
                      )}
                    />
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="p-4 border-t border-slate-800/80 bg-slate-950/40">
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Arena Ready
          </span>
          <span className="font-mono">99.98% SLA</span>
        </div>
      </div>
    </aside>
  );
}
