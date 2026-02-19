import { type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, id, className = "", ...props }: InputProps) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-neutral-400">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full rounded-xl border bg-white/5 px-4 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition ${
          error
            ? "border-red-500/50 focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30"
            : "border-white/10 focus:border-blue-500/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-blue-500/30"
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
