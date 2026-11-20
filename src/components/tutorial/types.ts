export type TooltipPlacement = "top" | "bottom" | "left" | "right";

export interface TutorialStep {
  target: string;
  title: string;
  description: string;
  placement?: TooltipPlacement;
  icon?: string;
  skipIfMissing?: boolean;
  delayMs?: number;
  preAction?: string;
}

export interface TutorialFlow {
  id: string;
  title: string;
  description: string;
  steps: TutorialStep[];
  route: string;
}

export interface TutorialCacheEntry {
  completed: boolean;
  skippedAt?: number;
  completedAt?: number;
}

export type TutorialCache = Record<string, TutorialCacheEntry>;

export interface TutorialContextValue {
  startTutorial: (id: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  skipTutorial: () => void;
  completeTutorial: () => void;
  resetTutorial: (id: string) => void;
  resetAllTutorials: () => void;
  isTutorialDone: (id: string) => boolean;
  tutorialsDisabled: boolean;
  setTutorialsDisabled: (v: boolean) => void;
  activeTutorialId: string | null;
  currentStep: number;
  totalSteps: number;
  activeFlow: TutorialFlow | null;
  isActive: boolean;
  isHydrated: boolean;
}
