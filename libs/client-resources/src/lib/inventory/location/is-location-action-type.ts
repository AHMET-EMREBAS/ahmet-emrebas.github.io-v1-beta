import { EntityOp } from '@ngrx/data';

export function isLocationActionType(actionType: string, checkType: EntityOp) {
  return actionType.endsWith(checkType);
}
