import { AppService } from './app.service';
import { Core } from './core';

export class AppController extends Core {
  constructor(protected appService = new AppService()) {
    super();
    Core.sdk.on('onClientResourceStart', this.appService.onClientResourceStart);
  }
}
