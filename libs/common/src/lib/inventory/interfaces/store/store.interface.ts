import { BaseInterface } from '../../../base';

export interface IStore<Pricelevel1> extends BaseInterface {
  name: string;

  pricelevel?: Pricelevel1;
}
