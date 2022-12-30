export type EventDescription<EventArguments> = {
  name: string;
  handle: (response: EventArguments) => Error | void;
};

export abstract class Event<EventArguments> {
  protected name: string;
  protected handle: (response: EventArguments) => Error | void;

  abstract callback(): Promise<Error | void>;
  constructor(event: EventDescription<EventArguments>) {
    this.name = event.name;
    this.handle = event.handle;
  }

  public on(): Promise<Error | void> {
    return this.callback();
  }
}

export class On<OnEventArguments> extends Event<OnEventArguments> {
  callback(): Promise<Error | void> {
    return new Promise((resolve) =>
      on(this.name, (args: OnEventArguments) => resolve(this.handle(args))),
    );
  }
}

export class OnNet<OnNetEventArguments> extends Event<OnNetEventArguments> {
  callback(): Promise<Error | void> {
    return new Promise((resolve) =>
      onNet(this.name, (args: OnNetEventArguments) => resolve(this.handle(args))),
    );
  }
}

export class OnKey<OnKeyEventResponse> extends Event<OnKeyEventResponse> {
  private label: string;

  constructor(name: string, label: string, handle: (args: OnKeyEventResponse) => Error) {
    super({ name, handle });
    this.label = label;
  }

  callback(): Promise<Error | void> {
    RegisterKeyMapping(this.name, this.label, 'keyboard', '');
    return new Promise((resolve) => {
      RegisterCommand(
        this.name,
        (args: OnKeyEventResponse) => {
          resolve(this.handle(args));
        },
        false,
      );
    });
  }
}
