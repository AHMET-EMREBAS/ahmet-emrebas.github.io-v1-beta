import { Component } from '@angular/core';

import { Contact } from '@nativescript/contacts';

import {
  getContacts,
  sendSMS,
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
  async sendGroupSMS(event: any) {
    console.log('Sending group sms');

    const contactList = await getContacts();

    console.log('All Contacts: ', contactList.data);
    console.log('................................');

    if (contactList) {
      for (const c of contactList.data) {
        await sendSMS(c.phoneNumbers[0].value, 'Another message');
      }
    }
  }
}
