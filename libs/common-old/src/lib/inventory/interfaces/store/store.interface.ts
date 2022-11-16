import { BaseInterface } from '../../../base';

export interface IStore<Pricelevel> extends BaseInterface {
  name: string;

  pricelevel?: Pricelevel;
}
