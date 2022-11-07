import { EntityOp } from '@ngrx/data';

export function isProductActionType(actionType: string, checkType: EntityOp) {
  return actionType.endsWith(checkType);
}
