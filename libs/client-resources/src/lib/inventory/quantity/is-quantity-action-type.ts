import { EntityOp } from '@ngrx/data';

export function isQuantityActionType(actionType: string, checkType: EntityOp) {
  return actionType.endsWith(checkType);
}
