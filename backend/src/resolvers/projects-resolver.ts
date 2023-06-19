import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import supabase from "../database";

import { ProjectModel } from "../dtos/models/project-model";
import { CreateProjectInput } from "../dtos/inputs/create-project-input";
import { UserModel } from "../dtos/models/user-model";
import { TaskModel } from "../dtos/models/task-model";

@Resolver(() => ProjectModel)
export class ProjectsResolver {
  @Query(() => [ProjectModel])
  async projects() {
    try {
      const table = supabase.from('projects')

      const { data, error } = await table.select('*');
      if (error) throw new Error(error.message);

      return data || error;

    } catch (err) {
      console.log(err);
    }
  }

  @Query(() => ProjectModel)
  async project(@Arg('id') id: string) {
    try {
      const table = supabase.from('projects')

      const { data, error } = await table.select('*').eq('id', id).single();
      if (error) throw new Error(error.message);

      return data || error;

    } catch (err) {
      console.log(err);
    }
  }

  @Mutation(() => ProjectModel)
  async createProject(@Arg('data') { name, description, category, userId }: CreateProjectInput) {
    try {
      const table = supabase.from('projects')

      const { data, error } = await table.insert({ name, description, category, userId }).select();
      if (error) throw new Error(error.message);
      return data[0] || data || error;
''
    } catch (err) {
      console.log(err);
    }
  }

  @FieldResolver(() => UserModel)
  async user(@Root() project: ProjectModel) {
    try {
      const { userId } = project;
      const table = supabase.from('users')

      const { data, error } = await table.select('*').eq('id', userId).single();
      if (error) throw new Error(error.message);

      return data || error;

    } catch (err) {
      console.log(err);
    }
  }

  @FieldResolver(() => [TaskModel])
  async tasks(@Root() project: ProjectModel) {
    try {
      const { id } = project;
      const table = supabase.from('tasks')

      const { data, error } = await table.select('*').eq('parentId', id);
      if (error) throw new Error(error.message);

      return data || error;

    } catch (err) {
      console.log(err);
    }
  }
}