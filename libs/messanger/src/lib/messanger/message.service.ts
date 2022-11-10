import { BehaviorSubject } from 'rxjs';

import { Message } from './message.class';

export class MessageService {
  readonly messages$ = new BehaviorSubject<Message[]>([]);

  loadMessages(messages: Message[]) {
    this.messages$.next(messages);
  }

  send(msg: Message) {
    this.messages$.next([...this.messages$.getValue(), msg]);
  }
}
