'use client'; // Mark this file as a client component

import React, { useState, useEffect } from 'react';
import './CustomSelect.scss'; // Import your SCSS styles

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Set the initial selectedOption to the first option if available
  useEffect(() => {
    if (options.length > 0) {
      setSelectedOption(options[0].value);
    }
  }, [options]);

  const handleSelect = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <div
        className="custom-select__header"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? options.find(option => option.value === selectedOption)?.label : placeholder}
<button className="arrow_btn">
          <span className={`custom-select__arrow ${isOpen ? 'open' : ''}`}>
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.11988 1.55994L3.99988 4.43994L6.87988 1.55994" stroke="#666D80" strokeWidth="1.2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>

          </span>
</button>  
    </div>
      {isOpen && (
        <div className="custom-select__options">
          {options.map(option => (
            <div
              key={option.value}
              className="custom-select__option"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
