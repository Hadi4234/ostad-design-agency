import React from 'react';

const Button = ({ onClick, type, children, className, variant }) => {
    const baseClasses = 'font-bold py-2 px-4 rounded';

    let colorClasses = '';
  
    switch (variant) {
      case 'primary':
        colorClasses = 'bg-blue-500 hover:bg-blue-700 text-white';
        break;
      case 'secondary':
        colorClasses = 'bg-gray-500 hover:bg-gray-700 text-white';
        break;
      // Add more color variants as needed
      default:
        colorClasses = 'bg-blue-500 hover:bg-blue-700 text-white';
    }
  return (
    <button
      onClick={onClick || ""}
      type={type || 'button'}
      className={`${baseClasses} ${colorClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
