import { EntityOp } from '@ngrx/data';

export function isSkuActionType(actionType: string, checkType: EntityOp) {
  return actionType.endsWith(checkType);
}
