"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import type { TutorialContextValue, TutorialFlow } from "./types";
import {
  isGloballyDisabled,
  setGloballyDisabled as saveGloballyDisabled,
  markCompleted,
  markSkipped,
  isDone,
  resetEntry,
  resetAll,
} from "./cache";
import { TUTORIAL_MAP } from "./fast-finger/steps";

const TutorialContext = createContext<TutorialContextValue | null>(null);

export function TutorialProvider({ children }: { children: React.ReactNode }) {
  const [activeTutorialId, setActiveTutorialId] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [tutorialsDisabled, setTutorialsDisabledState] =
    useState<boolean>(false);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const [tick, setTick] = useState<number>(0);

  useEffect(() => {
    setTutorialsDisabledState(isGloballyDisabled());
    setIsHydrated(true);
  }, []);

  const activeFlow: TutorialFlow | null = useMemo(() => {
    if (!activeTutorialId) return null;
    return TUTORIAL_MAP[activeTutorialId] ?? null;
  }, [activeTutorialId]);

  const totalSteps = activeFlow?.steps.length ?? 0;
  const isActive = activeTutorialId !== null && activeFlow !== null;

  const startTutorial = useCallback(
    (id: string) => {
      if (tutorialsDisabled) return;
      const flow = TUTORIAL_MAP[id];
      if (!flow || flow.steps.length === 0) {
        console.warn(`[TutorialProvider] No flow found with id: ${id}`);
        return;
      }
      setActiveTutorialId(id);
      setCurrentStep(0);
    },
    [tutorialsDisabled],
  );

  const completeTutorial = useCallback(() => {
    if (activeTutorialId) {
      markCompleted(activeTutorialId);
    }
    setActiveTutorialId(null);
    setCurrentStep(0);
    setTick((t) => t + 1);
  }, [activeTutorialId]);

  const skipTutorial = useCallback(() => {
    if (activeTutorialId) {
      markSkipped(activeTutorialId);
    }
    setActiveTutorialId(null);
    setCurrentStep(0);
    setTick((t) => t + 1);
  }, [activeTutorialId]);

  const nextStep = useCallback(() => {
    if (!activeFlow) return;
    if (currentStep >= activeFlow.steps.length - 1) {
      completeTutorial();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  }, [activeFlow, currentStep, completeTutorial]);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  }, []);

  const resetTutorial = useCallback((id: string) => {
    resetEntry(id);
    setTick((t) => t + 1);
  }, []);

  const resetAllTutorials = useCallback(() => {
    resetAll();
    setTick((t) => t + 1);
  }, []);

  const isTutorialDone = useCallback(
    (id: string) => {
      if (!isHydrated) return false;
      void tick;
      return isDone(id);
    },
    [isHydrated, tick],
  );

  const setTutorialsDisabled = useCallback((val: boolean) => {
    saveGloballyDisabled(val);
    setTutorialsDisabledState(val);
    if (val) {
      setActiveTutorialId(null);
      setCurrentStep(0);
    }
  }, []);

  const contextValue: TutorialContextValue = useMemo(
    () => ({
      startTutorial,
      nextStep,
      prevStep,
      skipTutorial,
      completeTutorial,
      resetTutorial,
      resetAllTutorials,
      isTutorialDone,
      tutorialsDisabled,
      setTutorialsDisabled,
      activeTutorialId,
      currentStep,
      totalSteps,
      activeFlow,
      isActive,
      isHydrated,
    }),
    [
      startTutorial,
      nextStep,
      prevStep,
      skipTutorial,
      completeTutorial,
      resetTutorial,
      resetAllTutorials,
      isTutorialDone,
      tutorialsDisabled,
      setTutorialsDisabled,
      activeTutorialId,
      currentStep,
      totalSteps,
      activeFlow,
      isActive,
      isHydrated,
    ],
  );

  return (
    <TutorialContext.Provider value={contextValue}>
      {children}
    </TutorialContext.Provider>
  );
}

export function useTutorial(): TutorialContextValue {
  const context = useContext(TutorialContext);
  if (!context) {
    throw new Error("useTutorial must be used within a <TutorialProvider>");
  }
  return context;
}
