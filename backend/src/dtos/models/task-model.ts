import { Field, ObjectType } from "type-graphql";

@ObjectType()
class RecurrenceItem {
  @Field()
  startDate?: string;

  @Field()
  estimatedTime?: number;

  @Field()
  completed?: boolean;
}

// MODEL
@ObjectType()
export class TaskModel {
  @Field()
  id: string;

  @Field()
  parentId: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  estimatedTime: number;

  @Field(() => [RecurrenceItem], { defaultValue: [] })
  recurrence: RecurrenceItem;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}