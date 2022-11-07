import { EntityOp } from '@ngrx/data';

export function isTransactionActionType(
  actionType: string,
  checkType: EntityOp
) {
  return actionType.endsWith(checkType);
}
