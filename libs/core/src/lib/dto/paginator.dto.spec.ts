import { plainToInstance } from 'class-transformer';

import { PaginatorDto } from './paginator.dto';

describe('PaginatorDto', () => {
  it.each`
    value                                                                                               | result
    ${{ orderBy: 'name', orderDir: 'ASC', take: 20, skip: 5, withDeleted: true }}                       | ${{ take: 20, skip: 5, withDeleted: true, order: { name: 'ASC' } }}
    ${{ orderBy: 'name', orderDir: 'ASC', take: '20', skip: '5', withDeleted: 'true' }}                 | ${{ take: 20, skip: 5, withDeleted: true, order: { name: 'ASC' } }}
    ${{ orderBy: 'name', orderDir: 'ASC', take: '120', skip: '5', withDeleted: 'true' }}                | ${{ take: 19, skip: 5, withDeleted: true, order: { name: 'ASC' } }}
    ${{ orderBy: 'name', orderDir: 'ASC', take: '-20', skip: '5', withDeleted: 'true' }}                | ${{ take: -20, skip: 5, withDeleted: true, order: { name: 'ASC' } }}
    ${{ orderBy: 'name', orderDir: 'ASC', take: 'asldjf', skip: 'asdfjalsjkdf', withDeleted: 'aswer' }} | ${{ take: 20, skip: 0, withDeleted: false, order: { name: 'ASC' } }}
  `('should transform $value into $result', ({ value, result }) => {
    const v = plainToInstance(PaginatorDto, value, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    });

    expect(v.take).toBe(result.take);
    expect(v.skip).toBe(result.skip);
    expect(v.withDeleted).toBe(result.withDeleted);
    expect(v.orderBy).toBeFalsy();
    expect(v.orderDir).toBeFalsy();
    expect(v.order.name).not.toBeFalsy();
    expect(v.order.name).toBe(result.order.name);
  });
});
