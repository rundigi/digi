import * as React from "react";

interface EmptyStateProps {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description?: string;
  action?: string;
  onAction?: () => void;
}

export function EmptyState({ icon: Icon, title, description, action, onAction }: EmptyStateProps) {
  return (
    <div className="bg-[#111] border border-white/[0.08] rounded-xl p-10 text-center">
      {Icon && (
        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="w-6 h-6 text-white/30" />
        </div>
      )}
      <p className="text-sm font-medium text-white/60">{title}</p>
      {description && (
        <p className="text-xs text-white/30 mt-1">{description}</p>
      )}
      {action && onAction && (
        <button
          onClick={onAction}
          className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
        >
          {action}
        </button>
      )}
    </div>
  );
}
