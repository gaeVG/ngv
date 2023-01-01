import { UserService } from './user.service';
import { EventDispatcher, On } from '@core/events';
import { OnClientEvent } from '@core/native';

const eventDispatcher = EventDispatcher.getInstance();

export class UserController {
  private onClientEvents = [
    {
      name: OnClientEvent.CEventNetworkJoinSession,
      handle: this.userService.startSession,
    },
  ];

  constructor(private userService = new UserService()) {
    this.onClientEvents.forEach((event) =>
      eventDispatcher.addEventListener(new On({ name: event.name, handle: event.handle })),
    );
  }
}
