import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  onClick,
  hover = true 
}) => {
  return (
    <div 
      onClick={onClick}
      className={`
        bg-white dark:bg-gray-900 
        rounded-2xl 
        shadow-lg 
        ${hover ? 'hover:shadow-xl' : ''}
        transition-all duration-300 
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;