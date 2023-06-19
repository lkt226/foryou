import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import supabase from "../database";

import { CreateTaskInput } from "../dtos/inputs/create-task-input";
import { TaskModel } from "../dtos/models/task-model";
import { ProjectModel } from "../dtos/models/project-model";

@Resolver(() => TaskModel)
export class TasksResolver {
  @Query(() => [TaskModel])
  async tasks() {
    try {
      const table = supabase.from('tasks')

      const { data, error } = await table.select('*');
      if (error) throw new Error(error.message);

      return data || error;

    } catch (err) {
      console.log(err);
    }
  }

  @Query(() => TaskModel)
  async task(@Arg('id') id: string) {
    try {
      const table = supabase.from('tasks')

      const { data, error } = await table.select('*').eq('id', id).single();
      if (error) throw new Error(error.message);

      return data || error;

    } catch (err) {
      console.log(err);
    }
  }

  @Mutation(() => TaskModel)
  async createTask(@Arg('data') { name, description, estimatedTime, parentId, recurrence }: CreateTaskInput) {
    try {
      const table = supabase.from('tasks')

      const { data, error } = await table.insert({ 
        parentId,
        name,
        description,
        estimatedTime,
        recurrence
       }).select();
      if (error) throw new Error(error.message);

      return data[0] || data || error;

    } catch (err) {
      console.log(err);
    }
  }

  @FieldResolver(() => (ProjectModel || TaskModel))
  async parent(@Root() task: TaskModel) {
    try {
      const { parentId } = task;
      const projects = supabase.from('projects')
      const tasks = supabase.from('tasks')

      const projectResponse = await projects.select('*').eq('id', parentId).single();
      if (projectResponse.data) return projectResponse.data;

      const taskResponse = await tasks.select('*').eq('id', parentId).single();
      if (taskResponse.data) return taskResponse.data;

      throw new Error('Parent not found');

    } catch (err) {
      console.log(err);
    }
  }

  @FieldResolver(() => [TaskModel])
  async children(@Root() task: TaskModel) {
    try {
      const { id } = task;
      const table = supabase.from('tasks')

      const { data, error } = await table.select('*').eq('parentId', id);
      if (error) throw new Error(error.message);

      return data || error;

    } catch (err) {
      console.log(err);
    }
  }
}