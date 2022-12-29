import { Module, ModuleFactory } from './modules.factory';

export class ModuleRegister {
  private static _self: ModuleRegister;
  private constructor(private _modules: Module[] = []) {}

  public static getInstance(): ModuleRegister {
    if (!ModuleRegister._self) {
      ModuleRegister._self = new ModuleRegister();
    }
    return ModuleRegister._self;
  }

  public async loadModule(type: string): Promise<Module> {
    const module = await ModuleFactory.loadModule(type);
    this._modules.push(module);
    return module;
  }

  public start(): void {
    this._modules.forEach((module) => {
      module.start();
    });
  }

  public stop(): void {
    this._modules.forEach((module) => {
      module.stop();
    });
  }
}