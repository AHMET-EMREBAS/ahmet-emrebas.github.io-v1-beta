import { EntityOp } from '@ngrx/data';

export function isFeatureActionType(actionType: string, checkType: EntityOp) {
  return actionType.endsWith(checkType);
}
