import { Core } from './core';
import { ModulesManager, ThreadManager } from '@core';
import { AppController } from './app.controller';
import { SDKAdaptater } from '../interfaces/sdk.interface';


export class AppModule extends AppController {
  modules = [];

  constructor(sdk: SDKAdaptater) {
    Core.sdk = sdk;

    Core.threads = new ThreadManager();
    Core.modules = new ModulesManager();

    super();
  }
}
