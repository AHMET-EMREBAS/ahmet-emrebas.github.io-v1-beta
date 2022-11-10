import { EntityOp } from '@ngrx/data';

export function isVariantActionType(actionType: string, checkType: EntityOp) {
  return actionType.endsWith(checkType);
}
