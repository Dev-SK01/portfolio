import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowOnHover?: boolean;
  borderAccent?: 'cyan' | 'purple' | 'emerald' | 'none';
}

export const Card: React.FC<CardProps> = ({
  children,
  glowOnHover = true,
  borderAccent = 'none',
  className,
  ...props
}) => {
  const accentStyles = {
    none: '',
    cyan: 'border-l-4 border-l-cyan-400',
    purple: 'border-l-4 border-l-purple-500',
    emerald: 'border-l-4 border-l-emerald-400',
  };

  return (
    <div
      className={twMerge(
        clsx(
          'glass-card rounded-2xl p-6 relative overflow-hidden',
          glowOnHover && 'hover:border-cyan-500/30 hover:shadow-glow',
          accentStyles[borderAccent],
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
