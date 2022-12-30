import { AppService } from './app.service';
import { EventDispatcher, On } from '@core/events';

const eventDispatcher = EventDispatcher.getInstance();

export class AppController {
  constructor(protected appService = new AppService()) {
    eventDispatcher.addEventListener(
      new On<{ resourceName: string }>({
        name: 'onClientResourceStart',
        handle: this.appService.onClientResourceStart,
      }),
    );
  }
}
