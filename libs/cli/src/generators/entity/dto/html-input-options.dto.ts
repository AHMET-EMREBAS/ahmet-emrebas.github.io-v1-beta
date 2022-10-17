import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { AutoCompleteList } from './autocomplete.type';
import { InputTypeList } from './inputtype.type';

@Exclude()
export class HtmlInputOptions {
  @Expose()
  @IsOptional()
  @IsString()
  id: string;

  @Exclude()
  @IsOptional()
  @IsIn(InputTypeList)
  inputType: string;

  @Expose()
  @IsOptional()
  @IsString()
  name: string;

  @Expose()
  @IsOptional()
  @IsString()
  placeholder: string;

  @Expose()
  @IsOptional()
  @IsString()
  @IsIn(AutoCompleteList)
  autocomplete: string;

  @Expose()
  @IsOptional()
  @IsNumber()
  required: boolean;

  @Expose()
  @IsOptional()
  @IsNumber()
  min: number;

  @Expose()
  @IsOptional()
  @IsNumber()
  max: number;

  @Expose()
  @IsOptional()
  @IsNumber()
  minLength: number;

  @Expose()
  @IsOptional()
  @IsNumber()
  maxLength: number;
}
