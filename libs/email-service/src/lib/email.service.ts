import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

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
}
