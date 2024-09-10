// src/app/page.tsx
import React from 'react';
import SeoContent from './home/SeoContent';
import FilterContent from './home/FilterContent';
import TableData from './home/TableData';
import RobuxBlock from './home/RobuxBlock';

const HomePage: React.FC = () => {
  return (
    <div className="main-container">
     <SeoContent/>
     <FilterContent/>
     <TableData/>
     <RobuxBlock/>
    </div>
  );
};

export default HomePage;
