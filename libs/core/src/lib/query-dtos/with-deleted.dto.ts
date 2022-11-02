import { BooleanProperty } from 'swagger-property';

export class WithDeletedDto {
  @BooleanProperty({ nullable: true })
  withDeleted?: boolean;
}
