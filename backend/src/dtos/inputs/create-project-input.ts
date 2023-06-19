import { Field, InputType } from "type-graphql";

@InputType()
export class CreateProjectInput {
  @Field()
  userId: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  category: string;
}