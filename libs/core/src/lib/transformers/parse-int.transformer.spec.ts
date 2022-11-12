import { parseIntOrDefault } from './parse-int.transformer';

describe('ParseIntOrDefault', () => {
  it('should parse int', () => {
    expect(parseIntOrDefault('10')).toBe(10);
    expect(parseIntOrDefault('0.100', 10)).toBe(0);
    expect(parseIntOrDefault('asdfbdfg', 10)).toBe(10);
    expect(parseIntOrDefault(100, 10)).toBe(100);
    expect(
      parseIntOrDefault(
        'als;dj;flasueroiwueroiwuerijasdklfnaweijnidvnueuirnfiuwehtwiuehtweiuio'
      )
    ).toBe(undefined);
  });
});
