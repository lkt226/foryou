import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import supabase from "../database";

import { CreateUserInput } from "../dtos/inputs/create-user-input";
import { UserModel } from "../dtos/models/user-model";
import { ProjectModel } from "../dtos/models/project-model";

@Resolver(() => UserModel)
export class UsersResolver {
  @Query(() => [UserModel])
  async users() {
    try {
      const table = supabase.from('users')

      const { data, error } = await table.select('*');
      if (error) throw new Error(error.message);

      return data || error;

    } catch (err) {
      console.log(err);
    }
  }

  @Query(() => UserModel)
  async user(@Arg('id') id: string) {
    try {
      const table = supabase.from('users')

      const { data, error } = await table.select('*').eq('id', id).single();
      if (error) throw new Error(error.message);

      return data || error;

    } catch (err) {
      console.log(err);
    }
  }

  @Mutation(() => UserModel)
  async createUser(@Arg('data') { username, email }: CreateUserInput) {
    try {
      const table = supabase.from('users')
      const users = table.select('*')

      const wasExitsEmail = await users.eq('email', email).single();
      if (wasExitsEmail.data) throw new Error('Email ja foi utilizado');
      const wasExitsUsername = await users.eq('username', username).single();
      if (wasExitsUsername.data) throw new Error('Username ja foi utilizado');

      const { data, error } = await table.insert({ username, email }).select();
      if (error) throw new Error(error.message);

      return data[0] || data || error;

    } catch (err) {
      console.log(err);
    }
  }

  @FieldResolver(() => [ProjectModel])
  async projects(@Root() user: UserModel) {
    try {
      const { id } = user;
      const table = supabase.from('projects')

      const { data, error } = await table.select('*').eq('userId', id);
      if (error) throw new Error(error.message);

      return data || error;

    } catch (err) {
      console.log(err);
    }
  }
}