import { EntityOp } from '@ngrx/data';

export function isCategoryActionType(actionType: string, checkType: EntityOp) {
  return actionType.endsWith(checkType);
}
