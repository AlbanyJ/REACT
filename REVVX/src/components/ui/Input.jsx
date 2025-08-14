import React from 'react';

const Input = ({ 
  placeholder, 
  value, 
  onChange, 
  type = 'text', 
  className = '',
  disabled = false,
  required = false,
  name
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      className={`
        w-full px-4 py-3 
        bg-gray-50 dark:bg-gray-800 
        border border-gray-200 dark:border-gray-700 
        rounded-xl 
        focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent 
        transition-all duration-200
        placeholder-gray-500 dark:placeholder-gray-400
        text-gray-900 dark:text-gray-100
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    />
  );
};

export default Input;