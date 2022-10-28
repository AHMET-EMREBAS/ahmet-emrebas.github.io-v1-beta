import { Injectable } from '@nestjs/common';

export interface EmailData {
  title: string;
  message: string;
  link?: string;
}

@Injectable()
export class EmailService {
  send(options: EmailData): void {
    console.log('Sending email');
  }
}
