"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { Sparkles, X, Clock, HelpCircle, ArrowRight } from "lucide-react";
import { useTutorial } from "./TutorialProvider";
import { dashboardTutorial, getTutorialsForRoute } from "./fast-finger/steps";
import type { TutorialFlow } from "./types";
import { cn } from "@/lib/utils";

export default function TutorialWelcome() {
  const pathname = usePathname();
  const { isHydrated, tutorialsDisabled, isActive, isTutorialDone, startTutorial } = useTutorial();

  const [mounted, setMounted] = useState<boolean>(false);
  const [pendingFlow, setPendingFlow] = useState<TutorialFlow | null>(null);
  const [dismissed, setDismissed] = useState<boolean>(false);
  const [slideIn, setSlideIn] = useState<boolean>(false);

  const lastAutoCheckedPathRef = useRef<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // When pathname changes, reset toast state and either prompt (dashboard) or auto-start (other pages)
  useEffect(() => {
    setDismissed(false);
    setSlideIn(false);
    setPendingFlow(null);

    if (!isHydrated || tutorialsDisabled || isActive || !pathname) {
      return;
    }

    if (lastAutoCheckedPathRef.current === pathname) {
      return;
    }

    const settleTimer = setTimeout(() => {
      lastAutoCheckedPathRef.current = pathname;

      const candidates = getTutorialsForRoute(pathname);
      const firstUndone = candidates.find((f) => !isTutorialDone(f.id));

      if (!firstUndone) return;

      if (firstUndone.id === dashboardTutorial.id) {
        // First page (Dashboard): show optional toast so users can opt in
        setPendingFlow(firstUndone);
      } else {
        // Every other page: auto-start spotlight tour on first visit
        startTutorial(firstUndone.id);
      }
    }, 500);

    return () => clearTimeout(settleTimer);
  }, [pathname, isHydrated, tutorialsDisabled, isActive, isTutorialDone, startTutorial]);

  // Trigger slide-up animation after pending flow is set
  useEffect(() => {
    if (pendingFlow && !dismissed && !isActive) {
      const animTimer = setTimeout(() => {
        setSlideIn(true);
      }, 50);
      return () => clearTimeout(animTimer);
    } else {
      setSlideIn(false);
    }
  }, [pendingFlow, dismissed, isActive]);

  if (!mounted || !pendingFlow || dismissed || isActive || tutorialsDisabled) {
    return null;
  }

  const estimatedMinutes = Math.max(1, Math.ceil(pendingFlow.steps.length * 0.4));

  const handleStart = () => {
    const id = pendingFlow.id;
    setPendingFlow(null);
    setSlideIn(false);
    startTutorial(id);
  };

  const handleDismiss = () => {
    setSlideIn(false);
    setTimeout(() => {
      setDismissed(true);
      setPendingFlow(null);
    }, 250);
  };

  return createPortal(
    <div
      className={cn(
        "fixed bottom-6 right-6 z-[9990] max-w-sm w-[calc(100vw-3rem)] pointer-events-auto",
        "transition-all duration-300 ease-out",
        slideIn
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      )}
    >
      <div className="relative rounded-2xl bg-slate-900/95 border border-primary/30 p-5 shadow-2xl backdrop-blur-xl text-slate-200 overflow-hidden group">
        {/* Subtle decorative top glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-accent-violet to-primary-600" />

        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary border border-primary/30 shrink-0">
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-400">
                Guided Tour Available
              </span>
              <h4 className="text-sm font-bold text-white tracking-tight">
                {pendingFlow.title}
              </h4>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors shrink-0"
            title="Dismiss for now"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Description */}
        <p className="mt-2.5 text-xs text-slate-300 leading-relaxed line-clamp-2">
          {pendingFlow.description}
        </p>

        {/* Step count & estimated time */}
        <div className="mt-3 flex items-center gap-3 text-[11px] text-slate-400 font-medium">
          <div className="flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
            <span>{pendingFlow.steps.length} interactive steps</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>~{estimatedMinutes} min</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex items-center justify-end gap-2 pt-3 border-t border-slate-800/80">
          <button
            onClick={handleDismiss}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 transition-colors"
          >
            Maybe later
          </button>

          <button
            onClick={handleStart}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-primary hover:bg-primary-600 text-white shadow-md shadow-primary-950/40 transition-all hover:gap-2"
          >
            <span>Start Tour</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
