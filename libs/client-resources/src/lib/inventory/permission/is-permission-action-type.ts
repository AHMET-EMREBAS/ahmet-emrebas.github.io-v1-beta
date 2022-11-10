import { EntityOp } from '@ngrx/data';

export function isPermissionActionType(
  actionType: string,
  checkType: EntityOp
) {
  return actionType.endsWith(checkType);
}
