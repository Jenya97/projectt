"use client"; 

import React from 'react';
import Link from 'next/link';
import Logo from '../../../assets/svg/logo.svg'; 
import CustomSelect from '../CustomSelect';
import SearchInput from '../SearchInput/SearchInput';
import Loop from "../../../assets/svg/loop.svg";
import CustomButton from '../CustomButton';
import "./header.scss"

const Header: React.FC = () => {
  const supportOptions = [
    { value: 'support1', label: 'Поддержка' },
    { value: 'support2', label: 'Поддержка2' },
    { value: 'support3', label: 'Поддержка3' }
  ];

  const languageOptions = [
    { value: 'russian', label: 'Русский' },
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Español' }
  ];

  const currencyOptions = [
    { value: 'rub', label: 'RUB' },
    { value: 'usd', label: 'USD' },
    { value: 'eur', label: 'EUR' },
  ];

  return (
    <header className="header">
      <section className="header_container container">
        <div className="header__logo-and-search">
          <Link href="/" className="header__logo-link">
            <Logo  className="header__logo" />
          </Link>
          <SearchInput icon={<Loop />} placeholder="Поиск игр и приложений..."  />
        </div>

        <div className="header__options">
          <div className="header__selects">
            <CustomSelect options={supportOptions} placeholder="Select Support..."   />
            <CustomSelect options={languageOptions} placeholder="Select Language..."  />
            <CustomSelect options={currencyOptions} placeholder="Select Currency..."  />
          </div>

          <div className="header__buttons">
            <CustomButton className="header__button" variant='secondary' >Вход</CustomButton>
            <CustomButton className="header__button">Регистрация</CustomButton>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
