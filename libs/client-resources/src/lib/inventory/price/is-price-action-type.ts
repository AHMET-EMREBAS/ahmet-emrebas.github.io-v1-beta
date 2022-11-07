import { EntityOp } from '@ngrx/data';

export function isPriceActionType(actionType: string, checkType: EntityOp) {
  return actionType.endsWith(checkType);
}
