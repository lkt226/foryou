import 'reflect-metadata'
require('dotenv').config();

import path from 'path'
import './database';

import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'

import { UsersResolver } from './resolvers/users-resolver'
import { ProjectsResolver } from './resolvers/projects-resolver';
import { TasksResolver } from './resolvers/tasks-resolver';

const bootstrap = async () => {
  const PORT = process.env.PORT || 4001

  const schema = await buildSchema({
    resolvers: [
      UsersResolver,
      ProjectsResolver,
      TasksResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await server.listen(PORT)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

bootstrap()