import { requestPermissions } from 'nativescript-permissions';

import { getNativeApplication } from '@nativescript/core/application';

/**
 * Request SMS permission
 * @returns
 */
async function smsPermission(): Promise<boolean> {
  return await requestPermissions(
    [android.Manifest.permission.SEND_SMS],
    'I need these permissions!'
  );
}

export async function sendSmsWithIntent(phoneNumber: string, message: string) {
  return new Promise(function (resolve, reject) {
    try {
      const intent = new android.content.Intent(
        android.content.Intent.ACTION_VIEW
      );
      intent.setData(android.net.Uri.parse('smsto:' + phoneNumber + ','));
      intent.putExtra('sms_body', message);
      intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);

      const a = getNativeApplication().startActivity(intent);

      console.log('Message Sent.');
      resolve({
        response: 'sent',
        message: 'Message sent.',
      });
    } catch (ex) {
      console.log('Something Failed.');
      reject(Error('Message send failed.'));
    }
  });
}

export async function sendSMS(phoneNumber: string, message: string) {
  if (await smsPermission()) {
    const smsService = android.telephony.SmsManager.getDefault();

    if (!smsService) {
      console.log('Could not get the SmsManager!');
    }

    try {
      smsService.sendTextMessage(phoneNumber, null, message, null, null);
      return true;
    } catch (err) {
      return false;
    }
  }
  return false;
}
