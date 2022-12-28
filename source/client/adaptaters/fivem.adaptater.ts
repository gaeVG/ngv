import { SDKAdaptater } from '../interfaces/sdk.interface';
// import { Events } from '@ngv-source/native-client';

export class FiveMAdaptater implements SDKAdaptater {
  private static _instance: FiveMAdaptater = new FiveMAdaptater();
  private constructor() {
    if (FiveMAdaptater._instance) {
      throw new Error(
        'Error: Instantiation failed: Use FiveMAdaptater.Instance instead of new.'
      );
    }
    FiveMAdaptater._instance = this;
  }

  _construct(): SDKAdaptater {
    return FiveMAdaptater.Instance;
  }

  public static get Instance(): FiveMAdaptater {
    return this._instance;
  }

  on(event: string, callback: (data: any) => void): void {
    // new Events().on(event, callback);
  }
  onNet(event: string, callback: (data: any) => void): void {
    // new Events().onNet(event, callback);
  }
  emit(event: string, data: any): void {
    throw new Error('Method not implemented.');
  }
  emitNet(event: string, data: any): void {
    throw new Error('Method not implemented.');
  }
}
