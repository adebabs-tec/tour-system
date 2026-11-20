import type { TutorialCache, TutorialCacheEntry } from "./types";

export const CACHE_KEY = "ff_tutorial_cache";
export const DISABLED_KEY = "ff_tutorials_disabled";

function isSSR(): boolean {
  return typeof window === "undefined";
}

export function readCache(): TutorialCache {
  if (isSSR()) return {};
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    return raw ? (JSON.parse(raw) as TutorialCache) : {};
  } catch (err) {
    console.warn("[TutorialSystem] Error reading tutorial cache:", err);
    return {};
  }
}

export function writeCache(cache: TutorialCache): void {
  if (isSSR()) return;
  try {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch (err) {
    console.warn("[TutorialSystem] Error writing tutorial cache:", err);
  }
}

export function markCompleted(id: string): void {
  if (isSSR()) return;
  const cache = readCache();
  cache[id] = {
    ...cache[id],
    completed: true,
    completedAt: Date.now(),
  };
  writeCache(cache);
}

export function markSkipped(id: string): void {
  if (isSSR()) return;
  const cache = readCache();
  cache[id] = {
    ...cache[id],
    completed: false,
    skippedAt: Date.now(),
  };
  writeCache(cache);
}

export function isDone(id: string): boolean {
  if (isSSR()) return false;
  const entry = getEntry(id);
  if (!entry) return false;
  return entry.completed === true || typeof entry.skippedAt === "number";
}

export function getEntry(id: string): TutorialCacheEntry | null {
  if (isSSR()) return null;
  const cache = readCache();
  return cache[id] ?? null;
}

export function resetEntry(id: string): void {
  if (isSSR()) return;
  const cache = readCache();
  delete cache[id];
  writeCache(cache);
}

export function resetAll(): void {
  if (isSSR()) return;
  try {
    window.localStorage.removeItem(CACHE_KEY);
  } catch (err) {
    console.warn("[TutorialSystem] Error clearing tutorial cache:", err);
  }
}

export function isGloballyDisabled(): boolean {
  if (isSSR()) return false;
  try {
    return window.localStorage.getItem(DISABLED_KEY) === "true";
  } catch {
    return false;
  }
}

export function setGloballyDisabled(v: boolean): void {
  if (isSSR()) return;
  try {
    if (v) {
      window.localStorage.setItem(DISABLED_KEY, "true");
    } else {
      window.localStorage.removeItem(DISABLED_KEY);
    }
  } catch (err) {
    console.warn("[TutorialSystem] Error setting globally disabled:", err);
  }
}
