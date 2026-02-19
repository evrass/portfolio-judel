import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// 1. Fusionner avec HTMLMotionProps au lieu de ButtonHTMLAttributes
interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  href,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2";
  
  const variants = {
    primary: "bg-primary text-dark hover:bg-primary-light hover:shadow-lg hover:shadow-primary/50",
    secondary: "bg-dark-lighter text-white hover:bg-dark-border",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-dark",
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        // On cast ici car motion.a et motion.button partagent 99% des props
        {...(props as HTMLMotionProps<"a">)} 
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};