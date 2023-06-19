import { Field, ObjectType } from "type-graphql";

// MODEL
@ObjectType()
export class ProjectModel {
  @Field()
  id: string;

  @Field()
  userId: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  category: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}