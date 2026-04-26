"use client";

import { clsx } from "clsx";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "featured" | "glass";
}

export function Card({ className, children, variant = "default" }: CardProps) {
  const variants = {
    default: "bg-slate border border-ash",
    featured: "bg-slate border border-phela-purple shadow-glow-purple",
    glass: "glass",
  };

  return (
    <div className={clsx("rounded-2xl p-6", variants[variant], className)}>
      {children}
    </div>
  );
}

interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
}

export function GlassCard({ className, children }: GlassCardProps) {
  return (
    <div
      className={clsx(
        "glass rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/15",
        className
      )}
    >
      {children}
    </div>
  );
}