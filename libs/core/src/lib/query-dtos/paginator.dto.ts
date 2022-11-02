import { PositiveIntProperty } from 'swagger-property';

export class PaginatorQueryDto {
  @PositiveIntProperty({ nullable: true })
  skip?: number;

  @PositiveIntProperty({ nullable: true })
  take?: number;
}
