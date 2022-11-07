import { EntityOp } from '@ngrx/data';

export function isStoreActionType(actionType: string, checkType: EntityOp) {
  return actionType.endsWith(checkType);
}
