import i18next from 'i18next';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

export class TranslationService {
  private static _instance: TranslationService;
  private constructor(private i18n = i18next) {}

  public static getInstance(): TranslationService {
    if (!TranslationService._instance) {
      const service = new TranslationService();
      service.i18n.init({
        lng: process.env.LOCALE,
        debug: process.env.EXECUTION_MODE === 'safemode',
        resources: {
          en: { ...en },
          fr: { ...fr },
        },
      });

      TranslationService._instance = service;
    }

    return TranslationService._instance;
  }

  public t(key: string, options?: Record<string, unknown>): string {
    return this.i18n.t(key, options);
  }

  public addResourceBundle(locale: string, namespace: string, resources: Record<string, unknown>) {
    this.i18n.addResourceBundle(locale, namespace, resources, true);
  }
}
