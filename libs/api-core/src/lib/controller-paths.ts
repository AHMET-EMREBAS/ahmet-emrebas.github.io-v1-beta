/**
 *
 * @param SINGULAR_PATH sample
 * @param PLURAL_PATH samples
 * @returns
 */
export function entityConsts(SINGULAR_PATH: string, PLURAL_PATH: string) {
  const ID_PATH = SINGULAR_PATH + '/:id';
  const MANY_RELATION_PATH =
    SINGULAR_PATH + '/many/:id/:relationName/:relationId';

  const DELETE_ONE_RELATION_PATH = SINGULAR_PATH + '/:id/:relationName';
  const ONE_RELATION_PATH = DELETE_ONE_RELATION_PATH + '/:relationId';
  const INCREMENT_PATH = ID_PATH + '/increment';
  const DESCREMENT_PATH = ID_PATH + '/decrement';

  return {
    SINGULAR_PATH,
    PLURAL_PATH,
    ID_PATH,
    MANY_RELATION_PATH,
    DELETE_ONE_RELATION_PATH,
    ONE_RELATION_PATH,
    INCREMENT_PATH,
    DESCREMENT_PATH,
  };
}
