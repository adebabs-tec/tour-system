"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  CheckCircle2,
  Play,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Sliders,
  Trash2,
  Sparkles,
} from "lucide-react";
import { useTutorial } from "./TutorialProvider";
import { ALL_TUTORIALS } from "./fast-finger/steps";
import { cn } from "@/lib/utils";

export default function TutorialToggleCard({ className }: { className?: string }) {
  const {
    tutorialsDisabled,
    setTutorialsDisabled,
    startTutorial,
    resetTutorial,
    resetAllTutorials,
    isTutorialDone,
    isActive,
  } = useTutorial();

  const [expanded, setExpanded] = useState<boolean>(true);

  // Compute stats
  const totalFlows = ALL_TUTORIALS.length;
  const completedCount = ALL_TUTORIALS.filter((flow) => isTutorialDone(flow.id)).length;
  const progressPercent = Math.round((completedCount / totalFlows) * 100);

  return (
    <div
      data-tutorial="tutorial-toggle"
      className={cn(
        "rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl overflow-hidden backdrop-blur-md",
        className
      )}
    >
      {/* Header bar */}
      <div className="p-5 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/20 text-primary border border-primary/30">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white tracking-tight">Interactive Guided Tours</h3>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-primary/20 text-primary-300 border border-primary/30">
                Engine
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Zero-dependency spotlight engine with keyboard navigation and progress caching.
            </p>
          </div>
        </div>

        {/* Global On/Off toggle */}
        <div className="flex items-center gap-3 bg-slate-800/70 px-3.5 py-2 rounded-xl border border-slate-700/60 self-start sm:self-center">
          <div className="flex items-center gap-2">
            <Sliders className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs font-medium text-slate-300">
              {tutorialsDisabled ? "Tours Disabled" : "Tours Active"}
            </span>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={!tutorialsDisabled}
            onClick={() => setTutorialsDisabled(!tutorialsDisabled)}
            className={cn(
              "relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
              !tutorialsDisabled ? "bg-primary" : "bg-slate-700"
            )}
            title={tutorialsDisabled ? "Enable all tours" : "Disable all tours"}
          >
            <span
              className={cn(
                "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
                !tutorialsDisabled ? "translate-x-4" : "translate-x-0"
              )}
            />
          </button>
        </div>
      </div>

      {/* Progress & Overview Strip */}
      <div className="px-5 py-4 bg-slate-950/40 border-b border-slate-800/80">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-slate-400 font-medium">Overall Progress</span>
          <span className="font-semibold text-white">
            <span className="text-primary-400 font-bold">{completedCount}</span> / {totalFlows} Completed ({progressPercent}%)
          </span>
        </div>

        {/* Gradient Progress Bar */}
        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-500 via-accent-violet to-accent-emerald transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Collapsible Trigger */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-5 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-400 hover:text-slate-200 bg-slate-900/60 hover:bg-slate-800/40 transition-colors border-b border-slate-800/60"
      >
        <span className="flex items-center gap-2">
          <span>Tour Directory ({totalFlows} Feature Flows)</span>
        </span>
        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {/* Flows List */}
      {expanded && (
        <div className="divide-y divide-slate-800/60 max-h-96 overflow-y-auto">
          {ALL_TUTORIALS.map((flow) => {
            const done = isTutorialDone(flow.id);

            return (
              <div
                key={flow.id}
                className="px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-800/20 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white tracking-tight">
                      {flow.title}
                    </span>

                    {done ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3" />
                        Completed
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-800 text-slate-400 border border-slate-700">
                        Not started
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-slate-400 line-clamp-1">
                    {flow.description}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
                    <span>{flow.steps.length} steps</span>
                    <span>•</span>
                    <span className="truncate max-w-[240px]">{flow.route}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  {done && (
                    <button
                      onClick={() => resetTutorial(flow.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-colors"
                      title="Reset completion status"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <button
                    onClick={() => startTutorial(flow.id)}
                    disabled={tutorialsDisabled || isActive}
                    className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                      done
                        ? "bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
                        : "bg-primary hover:bg-primary-600 text-white shadow-sm shadow-primary-950/30",
                      (tutorialsDisabled || isActive) && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{done ? "Replay" : "Start"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Card Footer: Reset All */}
      {completedCount > 0 && (
        <div className="p-4 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-primary-400" />
            <span>Need a fresh walkthrough across all pages?</span>
          </div>

          <button
            onClick={() => resetAllTutorials()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-400 hover:text-white bg-rose-500/10 hover:bg-rose-600 border border-rose-500/20 transition-all"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Reset All Tours</span>
          </button>
        </div>
      )}
    </div>
  );
}
