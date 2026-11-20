import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Fast Finger | Modern Guided Tour & Gaming Platform",
  description: "A zero-dependency, fully self-contained guided-tour engine with modern gaming UI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#090d16] text-slate-100 antialiased selection:bg-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
