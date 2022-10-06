import {
  Exclude,
  Expose,
  Transform,
} from 'class-transformer';

@Exclude()
export class QueryDTO {
  @Expose()
  @Transform(({ value }) => {
    if (value === true || value === 'true') {
      return true;
    } else {
      return false;
    }
  })
  withDeleted: boolean;

  @Expose()
  @Transform(({ value }) => {
    const v = parseInt(value);
    if (v > 0) {
      return v;
    }
    return 0;
  })
  skip: number;

  @Expose()
  @Transform(({ value }) => {
    const v = parseInt(value);
    if (v > 100) {
      return 100;
    } else if (v <= 0) {
      return 20;
    }
    return v;
  })
  take: number;
}
