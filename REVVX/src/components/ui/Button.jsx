import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = 'font-medium transition-all duration-200 rounded-full flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black',
    ghost: 'text-white hover:bg-white/10',
    secondary: 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${className} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      {children}
    </button>
  );
};

export default Button;