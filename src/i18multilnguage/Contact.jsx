import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return <h1>{t('greeting')}</h1>;
};

export default Contact;
