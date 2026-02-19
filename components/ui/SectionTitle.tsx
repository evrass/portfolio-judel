import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '' }) => {
  return (
    <motion.div
      className={`mb-12 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="bg-linear-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-1 w-20 bg-linear-to-r from-primary to-transparent rounded-full" />
    </motion.div>
  );
};