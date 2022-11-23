import { Component } from '@angular/core';

import { requestPermissions } from 'nativescript-permissions';

import {
  Contact,
  Contacts,
} from '@nativescript/contacts';

import {
  sendSms,
  sendTextMessageQuite,
  setStatusBarColor,
} from '../../../utils';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'Any App';
  message = '';

  contact!: Contact;
  async ngOnInit() {
    setStatusBarColor('dark', '#97d9e9');
  }

  async selectContact(event: any) {
    const granted = await requestPermissions(
      [android.Manifest.permission.READ_CONTACTS],
      'I need these permissions!'
    );

    if (granted) {
      const response = await Contacts.getContact();

      this.contact = response.data;

      console.log(response);
      this.message = 'Contact Permission is granted!';
    } else {
      this.message = 'Contact Permission is denied!';
    }
  }

  async sendQuiteMessage(event: any) {
    const granted = await requestPermissions(
      [android.Manifest.permission.SEND_SMS],
      'I need these permissions!'
    );

    console.log('Granted : ', granted);
    if (granted) {
      console.log('Sending quite messages');
      await sendTextMessageQuite(
        this.contact.phoneNumbers[0].value,
        'Quite Message'
      );
    }
  }

  async sendMessageWithIntent(event) {
    const granted = await requestPermissions(
      [android.Manifest.permission.SEND_SMS],
      'I need these permissions!'
    );

    console.log('Granted : ', granted);
    if (granted) {
      console.log('Sending quite messages');
      await sendSms(this.contact.phoneNumbers[0].value, 'Intent Message');
    }
  }
}
