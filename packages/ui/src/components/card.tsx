import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export function Card({ glass = false, children, className = "", ...props }: CardProps) {
  const base = glass
    ? "rounded-2xl border border-white/8 bg-white/[0.03] shadow-2xl shadow-black/40 backdrop-blur-xl"
    : "rounded-xl border border-white/5 bg-white/[0.02]";
  return (
    <div className={`${base} ${className}`} {...props}>
      {children}
    </div>
  );
}
