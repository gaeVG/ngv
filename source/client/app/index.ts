import { SDKAdaptater } from '../interfaces/sdk.interface';
import { AppModule } from './app.module';
import { Core } from './core';

export class App extends AppModule {
  constructor(sdk: SDKAdaptater) {
    super(sdk);
  }

  start() {
    Core.modules.onStart.bind(this);
  }
}
