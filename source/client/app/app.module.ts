import { AppController } from './app.controller';
import { LogService } from '@core/log.service';

export class AppModule extends AppController {

  constructor() {
    super();
  }

  protected onStart() {
    LogService.info({ message: 'app.onStart', isOrphan: true });
  }
}
