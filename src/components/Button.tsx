import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-gradient-to-r from-[#1a472a] to-[#2d6e4b] text-white hover:from-[#2d6e4b] hover:to-[#1a472a] focus:ring-[#1a472a] shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-[#d4a574] to-[#c89356] text-white hover:from-[#c89356] hover:to-[#b67d3e] focus:ring-[#d4a574] shadow-lg hover:shadow-xl',
    outline: 'border-2 border-[#1a472a] text-[#1a472a] hover:bg-[#1a472a] hover:text-white focus:ring-[#1a472a]',
    ghost: 'text-[#1a472a] hover:bg-[#f5f5f0] focus:ring-[#1a472a]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
      {children}
    </button>
  );
};
