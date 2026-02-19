import * as React from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

export function StatCard({ label, value, change, trend, className = "" }: StatCardProps) {
  return (
    <div
      className={[
        "bg-[#111] border border-white/[0.08] rounded-xl p-5",
        className,
      ].join(" ")}
    >
      <p className="text-xs text-white/40 font-medium uppercase tracking-wider mb-2">
        {label}
      </p>
      <p className="text-2xl font-semibold">{value}</p>
      {change && (
        <p
          className={[
            "text-xs mt-1.5",
            trend === "up" ? "text-green-400" : trend === "down" ? "text-red-400" : "text-white/40",
          ].join(" ")}
        >
          {change}
        </p>
      )}
    </div>
  );
}
