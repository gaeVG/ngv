import i18next from '../config/i18n.config';

export class TranslationService {
  private static _self: TranslationService;

  private constructor(private i18n = i18next) {}

  public static getInstance(): TranslationService {
    if (!TranslationService._self) {
      TranslationService._self = new TranslationService();
    }
    return TranslationService._self;
  }

  public translate(key: string, options?: unknown): string {
    return this.i18n.t(key, options);
  }
  public info(key: string, options?: unknown): string {
    return this.translate(key, options);
  }
  public confirm(key: string, options?: unknown): string {
    return this.i18n.t(key, options);
  }
  public warning(key: string, options?: unknown): string {
    return this.translate(key, options);
  }
  public error(key: string, options?: unknown): string {
    return this.translate(key, options);
  }

  public changeLanguage(language: string): void {
    this.i18n.changeLanguage(language);
  }

  public loadModuleResources(namespace: string, resources: unknown): void {
    this.i18n.addResources(namespace, 'translation', resources);
  }
}
