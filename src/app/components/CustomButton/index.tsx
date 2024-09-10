'use client'; // Mark this file as a client component

import React from 'react';
import './CustomButton.scss'; // Import your SCSS styles

interface CustomButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'btn-link';  
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  className = '',
  variant = 'primary',
}) => {
  return (
    <button
      onClick={onClick}
      className={`custom-button ${variant} ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
