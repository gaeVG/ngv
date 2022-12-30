import { Event, On, OnNet } from './event.factory';
import { LogService } from '@core/log.service';

export class EventDispatcher {
  private static $self: EventDispatcher;
  private constructor(private eventHandlers = new Map<string, Set<Event<unknown>>>()) {}

  private getEventType = (constructor: unknown) => {
    switch (constructor) {
      case On:
        return 'client';
      case OnNet:
        return 'server';
      default:
        return 'client';
    }
  };

  public static getInstance(): EventDispatcher {
    if (!EventDispatcher.$self) {
      EventDispatcher.$self = new EventDispatcher();
    }
    return EventDispatcher.$self;
  }

  addEventListener(event: Event<unknown>) {
    const eventType = this.getEventType(event.constructor);

    let handlers = this.eventHandlers.get(eventType);
    if (!handlers) {
      handlers = new Set<Event<unknown>>();
      this.eventHandlers.set(eventType, handlers);
    }

    const onEvent = event.on();
    handlers.add(event);

    onEvent.then((error) => {
      if (error) {
        LogService.error({
          message: 'core.events.handling.error',
          location: 'EventDispatcher.addEventListener()',
        });

        this.removeEventListener(event);
      }
    });
  }

  removeEventListener(event: Event<unknown>) {
    const handlers = this.eventHandlers.get(this.getEventType(event.constructor));
    if (handlers) {
      handlers.delete(event);
    }
  }

  async dispatchEvent(event: Event<unknown>) {
    const handlers = this.eventHandlers.get(this.getEventType(event.constructor));
    if (handlers) {
      for (const handler of handlers) {
        await handler.callback();
      }
    }
  }
}

export { On, OnNet };
