import React from 'react';
import Logo from '../../../assets/svg/logo.svg'; 
import Link from 'next/link';
import Tg from "../../../assets/svg/tg.svg";
import Discord from "../../../assets/svg/discord.svg";
import Vk from "../../../assets/svg/vk.svg";
import Youtube from "../../../assets/svg/youtube.svg";
import "./style.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <section className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-info">
              <Logo className="footer__logo" />
              <p>&copy; 2024 STARVELL, лучший маркетплейс цифровых товаров и услуг</p>
              <p>Дизайн сделан в <a href="">0xHearts.com</a></p>
            </div>
            <div className="footer-support">
              <h2>Поддержка</h2>
              <ul className="footer-links">
                <li>
                  <Link href="">Написать в поддержку</Link>
                </li>
                <li>
                  <Link href="">Политика конфиденциальности</Link>
                </li>
                <li>
                  <Link href="">Пользовательское соглашение</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-social">
            <a href="" className="footer-social-link">
              <Tg />
            </a>
            <a href="" className="footer-social-link">
              <Discord />
            </a>
            <a href="" className="footer-social-link">
              <Vk />
            </a>
            <a href="" className="footer-social-link">
              <Youtube />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
