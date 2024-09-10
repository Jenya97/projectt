
'use client'

 import React, { useState, ReactNode } from 'react';
import './customSwitch.scss';

interface CustomSwitchProps {
  label: string;
  icon?: ReactNode;   
}

const  CustomSwitch: React.FC< CustomSwitchProps> = ({ label, icon }) => {
  const [checked, setChecked] = useState(false);

  const handleSwitchToggle = () => {
    setChecked(!checked);
  };

  return (
    <div className="online-sellers-switch">
      {icon && <span className="icon">{icon}</span>}  
      <label className="label">{label}</label>
      <div className={`switch ${checked ? 'switch-on' : 'switch-off'}`} onClick={handleSwitchToggle}>
        <div className={`handle ${checked ? 'handle-on' : 'handle-off'}`} />
      </div>
    </div>
  );
};

export default  CustomSwitch;
