import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.scss';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const currentLang = i18n.language.toUpperCase();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className={`header ${isSticky ? 'sticky' : ''}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="header__container">
        <div className="header__logo">MADIYOR DEV</div>

        <div className="header__burger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>

        <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="header__menu">
            <li><a href="/" onClick={toggleMenu}>{t('home')}</a></li>
            <li><a href="/about" onClick={toggleMenu}>{t('about')}</a></li>
            <li><a href="/projects" onClick={toggleMenu}>{t('projects')}</a></li>
            <li><a href="/contact" onClick={toggleMenu}>{t('contact')}</a></li>
          </ul>
        </nav>

        <div className="header__lang">
          <button className={currentLang === 'EN' ? 'active' : ''} onClick={() => changeLanguage('EN')}>EN</button>
          <button className={currentLang === 'UZ' ? 'active' : ''} onClick={() => changeLanguage('UZ')}>UZ</button>
          <button className={currentLang === 'RU' ? 'active' : ''} onClick={() => changeLanguage('RU')}>RU</button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
