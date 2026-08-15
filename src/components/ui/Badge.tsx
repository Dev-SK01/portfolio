import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'emerald' | 'slate' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'md',
  className,
  icon
}) => {
  const baseStyles = 'inline-flex items-center font-mono font-medium rounded-md border backdrop-blur-md transition-colors';

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
  };

  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:border-cyan-400/50',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/30 hover:border-purple-400/50',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:border-emerald-400/50',
    slate: 'bg-slate-800/80 text-slate-300 border-slate-700/60 hover:border-slate-600',
    outline: 'bg-transparent text-slate-300 border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400',
  };

  return (
    <span className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
