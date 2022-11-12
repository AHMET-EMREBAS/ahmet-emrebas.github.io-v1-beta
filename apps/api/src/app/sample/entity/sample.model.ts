import {
  Field,
  Int,
  ObjectType,
} from '@nestjs/graphql';

@ObjectType()
export class SampleModel {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;
}
