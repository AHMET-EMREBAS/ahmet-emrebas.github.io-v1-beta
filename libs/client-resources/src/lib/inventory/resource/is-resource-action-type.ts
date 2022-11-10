import { EntityOp } from '@ngrx/data';

export function isResourceActionType(actionType: string, checkType: EntityOp) {
  return actionType.endsWith(checkType);
}
