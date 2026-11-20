import React from "react";
import { cn } from "@/lib/utils";

interface CardShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function CardShell({ children, className, ...props }: CardShellProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-slate-900/80 border border-slate-800/90 shadow-xl backdrop-blur-md overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
