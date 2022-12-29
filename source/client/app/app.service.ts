// import { ModuleRegister } from "registers/modules";

// const moduleRegister = ModuleRegister.getInstance();

import { LogService, LogData } from '@core/log.service';

const log: LogData = {
  location: 'AppService',
  message: '',
};

export class AppService {
  onClientResourceStart(resourceName: string) {
    if (resourceName === GetCurrentResourceName()) {
      LogService.confirm({
        ...log,
        message: 'app.onResourceStart',
        isOrphan: true,
      });
    }
  }
}
