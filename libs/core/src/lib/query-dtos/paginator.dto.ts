import { PositiveIntProperty } from 'swagger-property';

export class PaginatorQueryDto {
  @PositiveIntProperty({ nullable: true })
  skip?: number;

  @PositiveIntProperty({ nullable: true })
  take?: number;
}

export class StrictPaginatorQueryDto {
  @PositiveIntProperty({ nullable: true, default: 0 })
  skip?: number;

  @PositiveIntProperty({ maximum: 100, nullable: true, default: 20 })
  take?: number;
}
