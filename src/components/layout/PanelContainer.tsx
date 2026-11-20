"use client";

import React from "react";
import { TutorialProvider } from "@/components/tutorial/TutorialProvider";
import FastFingerTutorial from "@/components/tutorial/fast-finger";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export default function PanelContainer({ children }: { children: React.ReactNode }) {
  return (
    <TutorialProvider>
      <div className="min-h-screen bg-[#090d16] text-slate-100 flex">
        {/* Sidebar Nav */}
        <Sidebar />

        {/* Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <Topbar />
          <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto overflow-y-auto">
            {children}
          </main>
        </div>

        {/* Floating Tutorial Spotlight Overlay & Welcome Toast */}
        <FastFingerTutorial />
      </div>
    </TutorialProvider>
  );
}
