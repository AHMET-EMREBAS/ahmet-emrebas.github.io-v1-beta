import {
  EntitySubscriberInterface,
  EventSubscriber,
} from 'typeorm';

@EventSubscriber()
export class SampleSubscriber implements EntitySubscriberInterface {}
