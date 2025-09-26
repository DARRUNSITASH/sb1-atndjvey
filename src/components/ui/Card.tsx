import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  padding = 'md'
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -2, shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' } : {}}
      className={clsx(
        'bg-slate-900/90 backdrop-blur-lg border border-slate-700/50 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-slate-600/50',
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </motion.div>
  );
};