import React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  icon: LucideIcon;
  subtext?: string;
  className?: string;
}

export function StatCard({
  title,
  value,
  change,
  isPositive = true,
  icon: Icon,
  subtext,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-slate-900/80 border border-slate-800 p-5 shadow-lg backdrop-blur-md relative overflow-hidden group hover:border-slate-700 transition-all",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          {title}
        </span>
        <div className="p-2.5 rounded-xl bg-slate-800/80 text-primary border border-slate-700/60 group-hover:scale-110 transition-transform">
          <Icon className="w-4 h-4" />
        </div>
      </div>

      <div className="mt-3 flex items-baseline gap-2.5">
        <span className="text-2xl font-black text-white tracking-tight">{value}</span>
        {change && (
          <span
            className={cn(
              "px-2 py-0.5 rounded-full text-[11px] font-bold",
              isPositive
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
            )}
          >
            {change}
          </span>
        )}
      </div>

      {subtext && <p className="mt-1 text-xs text-slate-400">{subtext}</p>}
    </div>
  );
}
