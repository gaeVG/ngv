import { LogData, LogService } from '@core/log.service';
import { ModuleRegister } from '@core/modules';
import { AppModule } from './app.module';

type ApplicationConfig = {
  modules?: string[];
};

const moduleRegister = ModuleRegister.getInstance();

const log: LogData = {
  location: 'ApplicationFactory',
  message: undefined,
};

export class ApplicationFactory extends AppModule {
  private static _instance: ApplicationFactory;

  private constructor(private config: ApplicationConfig = {}) {
    super();
  }

  public static create(config: ApplicationConfig): ApplicationFactory {
    if (!ApplicationFactory._instance) {
      ApplicationFactory._instance = new ApplicationFactory(config);
    }
    return ApplicationFactory._instance;
  }

  public start() {
    this.onStart();

    if (this.config.modules !== undefined && this.config.modules.length > 0)
      this.loadModules(this.config.modules);
  }

  private async loadModules(modules: string[]) {
    log.location = `${log.location}.loadModules`;
    LogService.debug({ ...log, message: 'app:modules:loading' });
    modules.forEach(async (module, i) => {
      const loadedModule = await moduleRegister.loadModule(module);

      if (loadedModule instanceof Error) {
        LogService.error({ ...log, message: loadedModule.message, isChild: true });
      } else {
        LogService.debug({
          ...log,
          message: {
            name: `app:modules.loadModule`,
            args: { moduleName: module },
          },
          isChild: true,
        });

        loadedModule.init();
      }

      if (i === modules.length - 1) {
        LogService.debug({ ...log, message: 'app:modules.complete', isLast: true });
      }
    });
  }
}
