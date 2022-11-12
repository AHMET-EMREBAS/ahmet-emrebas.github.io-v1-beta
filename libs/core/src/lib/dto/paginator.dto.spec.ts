import { plainToInstance } from 'class-transformer';

import { PaginatorDto } from './paginator.dto';

describe('PaginatorDto', () => {
  it.each`
    value                                                             | result
    ${{ take: 20, skip: 5, withDeleted: true }}                       | ${{ take: 20, skip: 5, withDeleted: true }}
    ${{ take: '20', skip: '5', withDeleted: 'true' }}                 | ${{ take: 20, skip: 5, withDeleted: true }}
    ${{ take: '120', skip: '5', withDeleted: 'true' }}                | ${{ take: 19, skip: 5, withDeleted: true }}
    ${{ take: '-20', skip: '5', withDeleted: 'true' }}                | ${{ take: -20, skip: 5, withDeleted: true }}
    ${{ take: 'asldjf', skip: 'asdfjalsjkdf', withDeleted: 'aswer' }} | ${{ take: 20, skip: 0, withDeleted: false }}
  `('should transform $value into $result', ({ value, result }) => {
    const v = plainToInstance(PaginatorDto, value);
    expect(v.take).toBe(result.take);
    expect(v.skip).toBe(result.skip);
    expect(v.withDeleted).toBe(result.withDeleted);
  });
});
