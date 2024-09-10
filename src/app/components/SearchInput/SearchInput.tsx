import React from 'react';
import './searchInput.scss';

interface SearchInputProps {
  icon: React.ReactNode;
  placeholder?: string;
  iconPosition?: 'left' | 'right'; // 
}

const SearchInput: React.FC<SearchInputProps> = ({ icon, placeholder, iconPosition = 'left' }) => {
  return (
    <div className={`search-input-container ${iconPosition}`}>
      {iconPosition === 'left' && (
        <button className="search-button">
          {icon}  
        </button>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className="search-input"
      />
      {iconPosition === 'right' && (
        <button className="search-button">
          {icon}  
        </button>
      )}
    </div>
  );
};

export default SearchInput;
