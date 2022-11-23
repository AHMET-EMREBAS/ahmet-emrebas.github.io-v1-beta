import { requestPermissions } from 'nativescript-permissions';

import {
  Contact,
  Contacts,
} from '@nativescript/contacts';

export async function readContactsPermission() {
  return await requestPermissions(
    [android.Manifest.permission.READ_CONTACTS],
    'I need these permissions!'
  );
}

export async function getContacts(): Promise<{ data: Contact[] } | null> {
  if (await readContactsPermission()) {
    return (await Contacts.getAllContacts()) as { data: Contact[] };
  }
  return null;
}
