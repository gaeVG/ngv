import { LogService } from '@core/log.service';
import { ModuleRegister } from '@core/modules';

const moduleRegister = ModuleRegister.getInstance();

type ApplicationConfig = {
  modules?: string[];
};

export class ApplicationFactory {
  private static _instance: ApplicationFactory;

  private constructor(private config: ApplicationConfig = {}) {}

  public static create(config: ApplicationConfig): ApplicationFactory {
    if (!ApplicationFactory._instance) {
      ApplicationFactory._instance = new ApplicationFactory(config);
    }
    return ApplicationFactory._instance;
  }

  public start() {
    if (this.config.modules !== undefined && this.config.modules.length > 0)
      this.loadModules(this.config.modules);
  }

  private async loadModules(modules: string[]) {
    modules.forEach(async (module) => {
      const loadedModule = await moduleRegister.loadModule(module);

      if (loadedModule instanceof Error) {
        LogService.error({ message: loadedModule.message });
      } else {
        loadedModule.init();
      }
    });
  }
}
