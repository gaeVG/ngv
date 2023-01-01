import { TranslationService } from '@core/translation.service';
import { LogService } from '..';
import { Module, ModuleFactory } from './modules.factory';

const i18n = TranslationService.getInstance();

class ModuleNotFoundError extends Error {
  constructor(moduleName: string) {
    super(`Module ${moduleName} not found`);
  }
}

export class ModuleRegister {
  private static _instance: ModuleRegister;

  private constructor(private modules = new Map<string, Module>()) {}

  private setLocaleModule(moduleName: string) {
    const module = this.modules.get(moduleName);
    Object.keys(module.locales).forEach((locale) =>
      i18n.addResourceBundle(locale, `${moduleName}`, {
        module: module.locales[locale],
      }),
    );
  }

  public static getInstance(): ModuleRegister {
    if (!ModuleRegister._instance) {
      ModuleRegister._instance = new ModuleRegister();
    }
    return ModuleRegister._instance;
  }

  async loadModule(moduleName: string): Promise<Module | Error> {
    const factory = this.modules.get(moduleName);
    if (factory) {
      throw new Error(`Module ${moduleName} found yet in registry`);
    }

    try {
      const importedModule = await import(`../../app/modules/${moduleName}`);

      const moduleFactory = new importedModule.default() as ModuleFactory;
      const module = moduleFactory.createModule();

      this.modules.set(moduleName, module);
      // this.setLocaleModule(moduleName);

      return module;
    } catch (error) {
      switch (error.code) {
        case 'MODULE_NOT_FOUND':
          return new ModuleNotFoundError(moduleName);
        default:
          return error;
      }
    }
  }

  get Modules(): Map<string, Module> {
    return this.modules;
  }
}

export { Module, ModuleFactory };
