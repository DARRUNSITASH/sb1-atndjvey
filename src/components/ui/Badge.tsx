import React from 'react';
import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className
}) => {
  const variants = {
    default: 'bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200',
    success: 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 dark:from-green-900 dark:to-emerald-900 dark:text-green-200',
    warning: 'bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 dark:from-yellow-900 dark:to-amber-900 dark:text-yellow-200',
    error: 'bg-gradient-to-r from-red-100 to-rose-100 text-red-800 dark:from-red-900 dark:to-rose-900 dark:text-red-200',
    info: 'bg-gradient-to-r from-primary-100 to-sky-100 text-primary-800 dark:from-primary-900 dark:to-sky-900 dark:text-primary-200'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm'
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center font-semibold rounded-full shadow-sm',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
};