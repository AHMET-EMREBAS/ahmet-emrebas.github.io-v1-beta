import { EntityOp } from '@ngrx/data';

export function isDepartmentActionType(
  actionType: string,
  checkType: EntityOp
) {
  return actionType.endsWith(checkType);
}
