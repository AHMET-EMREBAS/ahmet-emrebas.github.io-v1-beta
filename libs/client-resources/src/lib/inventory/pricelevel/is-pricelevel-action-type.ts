import { EntityOp } from '@ngrx/data';

export function isPricelevelActionType(
  actionType: string,
  checkType: EntityOp
) {
  return actionType.endsWith(checkType);
}
