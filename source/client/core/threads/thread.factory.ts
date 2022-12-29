import { EventEmitter } from 'events';

export abstract class Thread {
  abstract update(): void;
}

export class ThreadFactory {
  public static createThread(isDUI = false): Thread {
    return isDUI ? new DUIThread() : new NativeThread();
  }
}

export class NativeThread extends Thread {
  private _stopEvent: EventEmitter;

  constructor() {
    super();
    this._stopEvent = new EventEmitter();
  }

  public run(): void {
    // Code du thread
  }

  public stop(): void {
    this._stopEvent.emit('stop');
  }

  public update(): void {
    this._stopEvent.on('stop', () => {
      return;
    });
    this.run();
  }
}
export class DUIThread extends Thread {
  private _stopEvent: EventEmitter;

  constructor() {
    super();
    this._stopEvent = new EventEmitter();
  }

  public run(): void {
    // Code du thread
  }

  public stop(): void {
    this._stopEvent.emit('stop');
  }

  public update(): void {
    this._stopEvent.on('stop', () => {
      return;
    });
    this.run();
  }
}
