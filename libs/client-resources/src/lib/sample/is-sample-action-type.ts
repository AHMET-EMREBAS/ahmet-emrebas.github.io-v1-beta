import { EntityOp } from '@ngrx/data';

export function isSampleActionType(actionType: string, checkType: EntityOp) {
  return actionType.endsWith(checkType);
}
