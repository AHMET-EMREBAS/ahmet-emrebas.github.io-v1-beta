import { getNativeApplication } from '@nativescript/core/application';

export async function sendSms(phoneNumber: string, message: string) {
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

export async function sendTextMessageQuite(
  phoneNumber: string,
  message: string
) {
  return new Promise(function (res, rej) {
    const smsService = android.telephony.SmsManager.getDefault();
    if (!smsService) {
      console.log('SmsManager is not found!');
    }
    try {
      smsService.sendTextMessage(phoneNumber, null, message, null, null);
      res('Message is send!');
    } catch (err) {
      rej('Something went wrong sending message!');
    }
  });
}
