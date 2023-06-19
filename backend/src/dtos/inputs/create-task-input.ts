import { Field, InputType } from "type-graphql";

@InputType()
class RecurrenceCreateItem {
  @Field(() => Date, { defaultValue: new Date() })
  startDate?: string;

  @Field(() => Number, { nullable: true })
  estimatedTime?: number;

  @Field(() => Boolean, { defaultValue: false })
  completed?: boolean;
}

// MODEL
@InputType()
export class CreateTaskInput {
  @Field()
  parentId: string;

  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Number, { defaultValue: 1 })
  estimatedTime?: number;

  @Field(() => [RecurrenceCreateItem], { defaultValue: [{ startDate: new Date() }] })
  recurrence?: RecurrenceCreateItem[];
}