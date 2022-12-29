import { Thread, ThreadFactory } from './thread.factory';

export class ThreadRegister {
  private static _self: ThreadRegister;

  private constructor(private _threads: Thread[] = []) {}

  public static getInstance(): ThreadRegister {
    if (!ThreadRegister._self) {
      ThreadRegister._self = new ThreadRegister();
    }
    return ThreadRegister._self;
  }

  public addThread(thread: Thread): void {
    console.log(thread);
  }

  public get Threads(): Thread[] {
    return this._threads;
  }

  public removeThread(thread: Thread): void {
    this._threads = this._threads.filter((t) => t !== thread);
  }

  public update(): void {
    this._threads.forEach((thread) => {
      thread.update();
    });
  }
}

export { Thread, ThreadFactory };
