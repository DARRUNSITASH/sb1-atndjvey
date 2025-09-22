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
    sm: 'p-5',
    md: 'p-7',
    lg: 'p-9'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={clsx(
        'bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-700/50 transition-all duration-300',
        hover && 'hover:shadow-2xl hover:border-primary-200 dark:hover:border-primary-700',
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </motion.div>
  );
};