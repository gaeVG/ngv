import { Module, ModuleFactory } from './modules.factory';

class ModuleNotFoundError extends Error {
  constructor(moduleName: string) {
    super(`Module ${moduleName} not found`);
  }
}

export class ModuleRegister {
  private static _instance: ModuleRegister;

  private constructor(private modules = new Map<string, ModuleFactory>()) {}

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

      const moduleFactory = new importedModule.default();
      this.modules.set(moduleName, moduleFactory);

      return moduleFactory.createModule();
    } catch (error) {
      switch (error.code) {
        case 'MODULE_NOT_FOUND':
          return new ModuleNotFoundError(moduleName);
        default:
          return error;
      }
    }
  }

  get Modules(): Map<string, ModuleFactory> {
    return this.modules;
  }
}

export { Module, ModuleFactory };
