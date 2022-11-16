import { IPrice } from './price.interface';

import { IReadSku } from '../sku';

import { IReadPricelevel } from '../pricelevel';

export type IReadPrice = IPrice<IReadSku, IReadPricelevel>;
