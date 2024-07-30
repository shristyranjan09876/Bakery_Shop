import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          greeting: "Hello, welcome to the page",
        },
      },
      hi: {
        translation: {
          greeting: "नमस्ते पेज पर आपका स्वागत है",
        },
      },
      fr: {
        translation: {
          greeting: "Bonjour, bienvenue sur la page",
        },
      },
    },
  });

export default i18n;








































// import i18n from 'i18next'
// import { initReactI18next } from 'react-i18next'
// import LanguageDetevtor from 'i18next-browser-languagedetector'

// i18n
// .use(LanguageDetevtor).use(initReactI18next)
// .init({
//     debug:true,
//     fallbackLng:'en',
//     interpolation:{escapeValue:false},
//     resources:{
//         en:{
//             translation:{
//                greeting:"Hello welcome to the page"
//             }
//         },
//         hi:{
//             translation:{
//                 greeting:"Bonjour bienvenue sur la page"
//             }
//         },
//         fr:{
//             translation:{
//                 greeting:"नमस्ते पेज पर आपका स्वागत है"
//             }

//         },
//     }

//     }
// )


