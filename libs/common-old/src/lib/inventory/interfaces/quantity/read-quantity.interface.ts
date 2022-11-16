import { IQuantity } from './quantity.interface';

import { IReadSku } from '../sku';

import { IReadStore } from '../store';

export type IReadQuantity = IQuantity<IReadSku, IReadStore>;
