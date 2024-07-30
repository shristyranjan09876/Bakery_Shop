// i18multilanguage/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button className='btn' onClick={() => changeLanguage('en')}>English</button>
      <button className='btn' onClick={() => changeLanguage('hi')}>Hindi</button>
      <button className='btn' onClick={() => changeLanguage('fr')}>French</button>
    </div>
  );
};

export default LanguageSwitcher;
