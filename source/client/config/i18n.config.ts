// Dependencies
import { default as i18n } from 'i18next';
// Locales files
import en from '../locales/en.json';
import fr from '../locales/fr.json';

// Init i18n module
i18n.init({
  lng: 'fr',
  debug: process.env.EXECUTION_MODE === 'safemode',
  resources: {
    en: { ...en },
    fr: { ...fr },
  },
});

export default i18n;