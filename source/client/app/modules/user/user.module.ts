import { Module } from '@core/modules/modules.factory';

export class UserModule implements Module {
  init() {
    console.log('chargement du module');
  }
}
