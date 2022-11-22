export class Message {
  readonly from?: boolean | undefined;
  readonly message: string;
  readonly time: Date;
  readonly read?: boolean;

  constructor(msg: Message) {
    this.from = msg.from;
    this.message = msg.message;
    this.time = msg.time;
    this.read = msg.read;
  }
}
