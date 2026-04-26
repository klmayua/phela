"use client";

import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-display font-semibold transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "phela-gradient text-white hover:shadow-glow-purple rounded-r",
    secondary: "bg-transparent border border-ash text-white hover:border-vivid-cyan hover:shadow-glow-cyan rounded-xl",
    ghost: "bg-transparent text-text-secondary hover:text-white",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm rounded-lg",
    md: "h-12 px-6 text-base rounded-xl",
    lg: "h-14 px-8 text-lg rounded-2xl",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}