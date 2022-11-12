import { parseBoolean } from './parse-boolean.transformer';

describe('ParseBoolean', () => {
  it('should parse booleaen', () => {
    expect(parseBoolean('true')).toBe(true);
    expect(parseBoolean('')).toBe(false);
    expect(parseBoolean('123')).toBe(false);
    expect(parseBoolean('false')).toBe(false);
    expect(parseBoolean(true)).toBe(true);
    expect(parseBoolean(false)).toBe(false);
  });
});
