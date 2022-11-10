import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { Message } from './message.class';
import { MessageService } from './message.service';

@Component({
  selector: 'ae-messanger',
  templateUrl: './messanger.component.html',
  styleUrls: ['./messanger.component.scss'],
})
export class MessangerComponent {
  @Output() sendMessageEvent = new EventEmitter<Message>();
  @ViewChild('messageInput') messageInput!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('sendButton') sendButton!: ElementRef<HTMLButtonElement>;

  messageInputControl = new FormControl('', []);
  messages$ = this.messgaeService.messages$;

  constructor(private readonly messgaeService: MessageService) {
    this.messgaeService.send({
      message: 'SOme message',
      time: new Date(),
      read: true,
    });
    this.messgaeService.send({
      message: 'SOme message',
      time: new Date(),
      read: false,
      from: true,
    });
    this.messgaeService.send({
      message: 'SOme message',
      time: new Date(),
      read: false,
      from: true,
    });
  }

  send(from?: boolean) {
    const value = this.messageInputControl.value;
    if (value && value.trim().length > 0) {
      const newMessage = {
        message: value,
        time: new Date(),
        from,
      };

      this.messgaeService.send(new Message(newMessage));
      this.sendMessageEvent.emit(newMessage);
      this.messageInputControl.setValue('');
    }
    this.messageInput.nativeElement.focus();
  }

  keypressHandler(event: any) {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (event.shiftKey) {
        this.send(true);
        return;
      }
      this.send();
      return;
    }

    if (event.key == 'Tab') {
      event.preventDefault();
      this.sendButton.nativeElement.focus();
      return;
    }
  }
}
