import { EntityOp } from '@ngrx/data';

export function isUserActionType(actionType: string, checkType: EntityOp) {
  return actionType.endsWith(checkType);
}
