import {
  Exclude,
  Expose,
  Transform,
} from 'class-transformer';
import {
  IsJSON,
  IsOptional,
} from 'class-validator';

@Exclude()
export class WhereDTO {
  @Expose()
  @IsOptional()
  @IsJSON()
  @Transform(({ value }) => {
    if (value) {
      return JSON.parse(value);
    }

    return undefined;
  })
  where: Record<string, Record<string, string>>;
}
