import { Module } from '@core/modules/modules.factory';
import { LogData, LogService } from '@core/log.service';
import { UserController } from './user.controller';
import localeFR from './locales/fr.json';
import localEN from './locales/en.json';

const log: LogData = {
  location: 'UserModule',
  message: undefined,
};

export class UserModule extends UserController implements Module {
  locales = {
    fr: localeFR,
    en: localEN,
  };

  constructor() {
    super();
  }

  init() {
    log.location = `${log.location}.init`;
    LogService.debug({ ...log, message: 'modules:user.init', isOrphan: true });
  }
}
