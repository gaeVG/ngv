import { ModuleNotFoundError } from '@errors';
import { EventEmitter } from 'events';
import { TranslationService } from '../../services/translation.service';

const translationService = TranslationService.getInstance();

export abstract class Module {
  protected _stopEvent: EventEmitter;

  constructor() {
    this._stopEvent = new EventEmitter();
  }

  abstract clone(): Module;
  abstract onLoad(): void;
  
  abstract start(): void;
  public stop(): void {
    this._stopEvent.emit('stop');
  }
}

export class ModuleFactory {
  private static _self: ModuleFactory;
  private static _modules: { [key: string]: Module } = {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): ModuleFactory {
    if (!ModuleFactory._self) {
      ModuleFactory._self = new ModuleFactory();
    }
    return ModuleFactory._self;
  }

  public static async loadModule(moduleName: string): Promise<Module> {
    let prototype = ModuleFactory._modules[moduleName];
    if (!prototype) {
      try {
        const module = await import(`./modules/${moduleName}`) as Module;

        if (!module) {
          throw new ModuleNotFoundError(moduleName)
        }
        prototype = new module.onLoad();
        ModuleFactory._modules[moduleName] = prototype;
      } catch (error) {
        translationService.translate('error.moduleNotFound', { moduleName });
      }
    }

    return prototype.clone();
  }
}
