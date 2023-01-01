import { Module } from '@core/modules/modules.factory';
import { LogData, LogService } from '@core/log.service';
import { UserController } from './user.controller';
import localeFR from './locales/fr.json';
import { TranslationService } from '@core/translation.service';

const i18n = TranslationService.getInstance();

const log: LogData = {
  location: 'UserModule',
  message: undefined,
};

export class UserModule extends UserController implements Module {
  locales = { fr: { testVar: 'coucou' } };

  constructor() {
    super();
    i18n.addResourceBundle('fr', 'modules', { user: localeFR });
  }

  init() {
    log.location = `${log.location}.init`;
    LogService.debug({ ...log, message: 'modules:user.init', isOrphan: true });
  }
}
