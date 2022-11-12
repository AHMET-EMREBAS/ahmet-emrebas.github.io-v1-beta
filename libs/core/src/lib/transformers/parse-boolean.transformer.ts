export function parseBoolean(value: string | boolean | undefined): boolean {
  if (typeof value === 'boolean') {
    return value;
  }

  if (value === 'true') {
    return true;
  }

  return false;
}
