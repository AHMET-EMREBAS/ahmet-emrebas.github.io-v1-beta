import {
  Exclude,
  Expose,
  Transform,
} from 'class-transformer';

@Exclude()
export class WhereDTO {
  @Expose()
  @Transform(({ value }) => value && JSON.parse(value))
  where: Record<string, Record<string, string>>;
}
