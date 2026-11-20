"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  LayoutDashboard,
  Menu,
  Zap,
  Gamepad2,
  HelpCircle,
  BookOpen,
  Search,
  Plus,
  List,
  FileText,
  Trophy,
  Filter,
  Table,
  BarChart3,
  TrendingUp,
  PieChart,
  Sparkles,
  Wallet,
  Info,
  Globe,
  Layers,
  Upload,
  CalendarDays,
  Eye,
  Archive,
  Copy,
  Link as LinkIcon,
  Share2,
  Settings,
  X,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { useTutorial } from "./TutorialProvider";
import type { TooltipPlacement, TutorialStep } from "./types";
import { cn } from "@/lib/utils";

export const ICON_MAP: Record<string, LucideIcon> = {
  LayoutDashboard,
  Menu,
  Zap,
  Gamepad2,
  HelpCircle,
  BookOpen,
  Search,
  Plus,
  List,
  FileText,
  Trophy,
  Filter,
  Table,
  BarChart3,
  TrendingUp,
  PieChart,
  Sparkles,
  Wallet,
  Info,
  Globe,
  Layers,
  Upload,
  CalendarDays,
  Eye,
  Archive,
  Copy,
  Link: LinkIcon,
  Share2,
  Settings,
};

const SPOTLIGHT_PAD = 10;
const TOOLTIP_GAP = 14;
const TOOLTIP_MAX_W = 380;
const TOOLTIP_MIN_W = 280;
const VIEWPORT_INSET = 8;

interface RectData {
  top: number;
  left: number;
  width: number;
  height: number;
  bottom: number;
  right: number;
}

function parseMarkdownBold(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function TutorialOverlay() {
  const {
    isActive,
    activeFlow,
    currentStep,
    totalSteps,
    nextStep,
    prevStep,
    skipTutorial,
  } = useTutorial();

  const [mounted, setMounted] = useState<boolean>(false);
  const [targetRect, setTargetRect] = useState<RectData | null>(null);
  const [isCenteredFallback, setIsCenteredFallback] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [tooltipDimensions, setTooltipDimensions] = useState<{ width: number; height: number }>({
    width: 340,
    height: 220,
  });

  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const step: TutorialStep | undefined = activeFlow?.steps[currentStep];

  // Measure and scroll to target
  const measureTarget = useCallback(() => {
    if (!step) return;

    const el = document.querySelector(step.target);
    if (!el) {
      if (step.skipIfMissing) {
        nextStep();
        return;
      }
      setIsCenteredFallback(true);
      setTargetRect(null);
      setVisible(true);
      return;
    }

    setIsCenteredFallback(false);
    const rect = el.getBoundingClientRect();
    setTargetRect({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      bottom: rect.bottom,
      right: rect.right,
    });
    setVisible(true);
  }, [step, nextStep]);

  // Initial step transition and delay
  useEffect(() => {
    if (!isActive || !step) {
      setVisible(false);
      setTargetRect(null);
      return;
    }

    setVisible(false);
    const delay = step.delayMs ?? 100;
    const timer = setTimeout(() => {
      const el = document.querySelector(step.target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
        requestAnimationFrame(() => {
          measureTarget();
        });
      } else {
        measureTarget();
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [isActive, currentStep, step, measureTarget]);

  // Keep target rect updated on scroll and resize
  useEffect(() => {
    if (!isActive) return;

    const handleScrollOrResize = () => {
      if (!step) return;
      const el = document.querySelector(step.target);
      if (el) {
        const rect = el.getBoundingClientRect();
        setTargetRect({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          bottom: rect.bottom,
          right: rect.right,
        });
      }
    };

    window.addEventListener("resize", handleScrollOrResize, { passive: true });
    window.addEventListener("scroll", handleScrollOrResize, { capture: true, passive: true });

    return () => {
      window.removeEventListener("resize", handleScrollOrResize);
      window.removeEventListener("scroll", handleScrollOrResize, true);
    };
  }, [isActive, step]);

  // Update measured tooltip dimensions
  useEffect(() => {
    if (tooltipRef.current) {
      const rect = tooltipRef.current.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setTooltipDimensions({
          width: rect.width,
          height: rect.height,
        });
      }
    }
  }, [visible, currentStep, step]);

  // Keyboard navigation
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        skipTutorial();
      } else if (e.key === "ArrowRight" || e.key === "Enter") {
        e.preventDefault();
        nextStep();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevStep();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive, nextStep, prevStep, skipTutorial]);

  if (!mounted || !isActive || !step) {
    return null;
  }

  // Calculate tooltip placement
  const computeTooltipPos = () => {
    const vpW = window.innerWidth;
    const vpH = window.innerHeight;
    const tW = Math.min(Math.max(tooltipDimensions.width, TOOLTIP_MIN_W), TOOLTIP_MAX_W);
    const tH = tooltipDimensions.height || 220;

    if (isCenteredFallback || !targetRect) {
      return {
        top: Math.max(VIEWPORT_INSET, vpH / 2 - tH / 2),
        left: Math.max(VIEWPORT_INSET, vpW / 2 - tW / 2),
        width: tW,
        actualPlacement: "center",
      };
    }

    const preferred: TooltipPlacement = step.placement ?? "bottom";
    const candidates: TooltipPlacement[] = [preferred, "bottom", "top", "right", "left"];
    const uniqueCandidates = Array.from(new Set(candidates));

    const positions: Record<TooltipPlacement, { top: number; left: number; fits: boolean }> = {
      bottom: {
        top: targetRect.bottom + SPOTLIGHT_PAD + TOOLTIP_GAP,
        left: targetRect.left + targetRect.width / 2 - tW / 2,
        fits: targetRect.bottom + SPOTLIGHT_PAD + TOOLTIP_GAP + tH <= vpH - VIEWPORT_INSET,
      },
      top: {
        top: targetRect.top - SPOTLIGHT_PAD - TOOLTIP_GAP - tH,
        left: targetRect.left + targetRect.width / 2 - tW / 2,
        fits: targetRect.top - SPOTLIGHT_PAD - TOOLTIP_GAP - tH >= VIEWPORT_INSET,
      },
      right: {
        top: targetRect.top + targetRect.height / 2 - tH / 2,
        left: targetRect.right + SPOTLIGHT_PAD + TOOLTIP_GAP,
        fits: targetRect.right + SPOTLIGHT_PAD + TOOLTIP_GAP + tW <= vpW - VIEWPORT_INSET,
      },
      left: {
        top: targetRect.top + targetRect.height / 2 - tH / 2,
        left: targetRect.left - SPOTLIGHT_PAD - TOOLTIP_GAP - tW,
        fits: targetRect.left - SPOTLIGHT_PAD - TOOLTIP_GAP - tW >= VIEWPORT_INSET,
      },
    };

    let chosenPlacement: TooltipPlacement = "bottom";
    for (const p of uniqueCandidates) {
      if (positions[p].fits) {
        chosenPlacement = p;
        break;
      }
    }

    let { top, left } = positions[chosenPlacement];

    // Clamp inside viewport
    left = Math.max(VIEWPORT_INSET, Math.min(left, vpW - tW - VIEWPORT_INSET));
    top = Math.max(VIEWPORT_INSET, Math.min(top, vpH - tH - VIEWPORT_INSET));

    return { top, left, width: tW, actualPlacement: chosenPlacement };
  };

  const tooltipPos = computeTooltipPos();
  const IconComponent = step.icon && ICON_MAP[step.icon] ? ICON_MAP[step.icon] : HelpCircle;
  const isLastStep = currentStep === totalSteps - 1;

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-[9999] overflow-hidden select-none transition-opacity duration-200",
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-modal="true"
      role="dialog"
    >
      {/* Clickable dark backdrop for fallback or full dismissal */}
      <div
        className="absolute inset-0 bg-transparent cursor-pointer"
        onClick={() => skipTutorial()}
        title="Click anywhere to skip tour"
      />

      {/* Spotlight cutout element with 9999px spread box-shadow */}
      {targetRect && !isCenteredFallback && (
        <>
          {/* Spotlight box */}
          <div
            className="tutorial-spotlight-box fixed rounded-2xl"
            style={{
              top: targetRect.top - SPOTLIGHT_PAD,
              left: targetRect.left - SPOTLIGHT_PAD,
              width: targetRect.width + SPOTLIGHT_PAD * 2,
              height: targetRect.height + SPOTLIGHT_PAD * 2,
              boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.68)",
            }}
          />

          {/* Concentric pulse ring */}
          <div
            className="tutorial-pulse-ring fixed rounded-2xl pointer-events-none border-2 border-primary/50 animate-pulse"
            style={{
              top: targetRect.top - SPOTLIGHT_PAD - 4,
              left: targetRect.left - SPOTLIGHT_PAD - 4,
              width: targetRect.width + SPOTLIGHT_PAD * 2 + 8,
              height: targetRect.height + SPOTLIGHT_PAD * 2 + 8,
            }}
          />
        </>
      )}

      {/* Fallback full screen backdrop if target element not found */}
      {(!targetRect || isCenteredFallback) && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm pointer-events-auto"
          onClick={() => skipTutorial()}
        />
      )}

      {/* Tooltip Card */}
      <div
        ref={tooltipRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          top: tooltipPos.top,
          left: tooltipPos.left,
          maxWidth: tooltipPos.width,
        }}
        className={cn(
          "fixed pointer-events-auto w-full transition-all duration-200 ease-out",
          "rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl backdrop-blur-md",
          "p-5 text-slate-200 z-10"
        )}
      >
        {/* Card Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary border border-primary/30">
              <IconComponent className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700/80 text-xs font-medium text-slate-300">
              <span>Step</span>
              <span className="text-primary font-semibold">{currentStep + 1}</span>
              <span className="text-slate-500">of</span>
              <span>{totalSteps}</span>
            </div>
          </div>

          <button
            onClick={() => skipTutorial()}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            title="Skip tour (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Card Body */}
        <div className="py-3.5 space-y-2">
          <h4 className="text-base font-semibold text-white tracking-tight leading-snug">
            {step.title}
          </h4>
          <div className="text-sm text-slate-300/90 leading-relaxed space-y-1.5">
            {step.description.split("\n").map((para, i) => (
              <p key={i}>{parseMarkdownBold(para)}</p>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center gap-1.5 py-2">
          {Array.from({ length: totalSteps }).map((_, idx) => {
            const isCompleted = idx < currentStep;
            const isCurrent = idx === currentStep;

            return (
              <div
                key={idx}
                className={cn(
                  "h-1.5 transition-all duration-200 rounded-full",
                  isCurrent
                    ? "w-6 bg-primary"
                    : isCompleted
                    ? "w-2.5 bg-primary/60"
                    : "w-2 bg-slate-700"
                )}
              />
            );
          })}
        </div>

        {/* Card Footer Controls */}
        <div className="flex items-center justify-between pt-3 mt-1 border-t border-slate-800/80">
          <button
            onClick={() => skipTutorial()}
            className="text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors px-1.5 py-1"
          >
            Skip
          </button>

          <div className="flex items-center gap-2">
            {currentStep > 0 && (
              <button
                onClick={() => prevStep()}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            )}

            <button
              onClick={() => nextStep()}
              className={cn(
                "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold shadow-md transition-all",
                isLastStep
                  ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/40"
                  : "bg-primary hover:bg-primary-600 text-white shadow-primary-950/40"
              )}
            >
              <span>{isLastStep ? "Got it!" : "Next"}</span>
              {isLastStep ? (
                <Sparkles className="w-3.5 h-3.5" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
