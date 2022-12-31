import { ModuleFactory } from '@core/index';
import { Module } from '@core/modules/modules.factory';
import { UserModule } from './user.module';

class User extends ModuleFactory {
  createModule(): Module {
    return new UserModule();
  }
}

export default User;
