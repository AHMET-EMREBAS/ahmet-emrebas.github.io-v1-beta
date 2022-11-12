/**
 * Pars the value to int or return default value
 * @param value
 * @param defaultValue
 * @returns
 */
export function parseIntOrDefault(
  value: string | number | undefined,
  defaultValue?: number
): number {
  try {
    if (typeof value === 'string') {
      const parsed = parseInt(value);
      if (isNaN(parsed)) {
        return defaultValue;
      }
      return parsed;
    }
    return value || defaultValue;
  } catch (err) {
    // Ignore error
  }

  return defaultValue;
}
