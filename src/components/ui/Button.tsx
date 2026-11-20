import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "emerald";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary hover:bg-primary-600 text-white shadow-md shadow-primary-950/40",
      secondary: "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700",
      outline: "bg-transparent hover:bg-slate-800 text-slate-300 border border-slate-700",
      ghost: "bg-transparent hover:bg-slate-800/80 text-slate-300",
      danger: "bg-rose-500/10 hover:bg-rose-600 text-rose-400 hover:text-white border border-rose-500/20",
      emerald: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-950/40",
    };

    const sizes = {
      sm: "px-2.5 py-1.5 text-xs font-medium rounded-lg gap-1.5",
      md: "px-3.5 py-2 text-xs font-semibold rounded-xl gap-2",
      lg: "px-5 py-2.5 text-sm font-semibold rounded-xl gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap shrink-0 transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
