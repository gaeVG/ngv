export type EventDescription<EventResponse> = {
  name: string;
  type?: 'client' | 'ui' | 'server';
  handle: (response: EventResponse) => void;
};

export abstract class Event<EventResponse> {
  protected name: string;
  protected handle: (response: EventResponse) => void;

  abstract callback(): Promise<EventResponse>;
  constructor(event: EventDescription<EventResponse>) {
    this.name = event.name;
    this.handle = event.handle;
  }

  public on(): void {
    this.callback();
  }
}

export class On<OnEventResponse> extends Event<OnEventResponse> {
  callback(): Promise<OnEventResponse> {
    return new Promise((resolve) => {
      on(this.name, (...args: []) => resolve(this.handle(...args)));
    });
  }
}

export class OnNet<OnNetEventResponse> extends Event<OnNetEventResponse> {
  callback(): Promise<OnNetEventResponse> {
    return new Promise((resolve) => {
      onNet(this.name, (...args: unknown[]) => resolve(this.handle(...args)));
    });
  }
}

export class OnKey<OnKeyEventResponse> extends Event<OnKeyEventResponse> {
  private label: string;

  constructor(name: string, label: string, handle: (...args: unknown[]) => OnKeyEventResponse) {
    super({ name, handle });
    this.label = label;
  }

  callback(): Promise<OnKeyEventResponse> {
    RegisterKeyMapping(this.name, this.label, 'keyboard', '');
    return new Promise((resolve) => {
      RegisterCommand(
        this.name,
        (...args: unknown[]) => {
          resolve(this.handle(...args));
        },
        false,
      );
    });
  }
}
