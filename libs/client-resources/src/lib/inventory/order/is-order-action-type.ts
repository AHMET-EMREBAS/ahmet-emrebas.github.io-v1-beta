import { EntityOp } from '@ngrx/data';

export function isOrderActionType(actionType: string, checkType: EntityOp) {
  return actionType.endsWith(checkType);
}
