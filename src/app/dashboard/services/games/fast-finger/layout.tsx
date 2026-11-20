"use client";

import React from "react";
import PanelContainer from "@/components/layout/PanelContainer";

export default function FastFingerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PanelContainer>{children}</PanelContainer>;
}
