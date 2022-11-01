import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { EmailEvents } from './email-events.enum';

export interface EmailData {
  to: string;
  subject: string;
  message: string;
  link?: string;
}

@Injectable()
export class EmailService {
  constructor(private readonly emailService: MailerService) {}

  send(options: EmailData): void {
    this.emailService
      .sendMail({
        to: options.to,
        from: `"Ahmet Emrebas" <${process.env.EMAIL}>`,
        subject: options.subject,
        text: options.message,
        template: 'message',
        context: {
          subject: options.subject,
          message: options.message,
          link: options.link,
        },
      })
      .then((r) => {
        console.log(r);
      });
  }

  @OnEvent(EmailEvents.WELCOME)
  welcomeEmail(email: string) {
    this.send({ subject: 'Welcome', message: 'Welcome', to: email });
  }

  @OnEvent(EmailEvents.LOGIN_LINK)
  loginLink(options: { email: string; link: string }) {
    this.send({
      subject: 'Login Link',
      message: 'Please click to link below to login',
      to: options.email,
      link: options.link,
    });
  }
}
