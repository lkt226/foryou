import { GraphQLClient, gql } from "graphql-request"

const endpoint = "http://localhost:4000"

const graphQLClient = new GraphQLClient(endpoint)
graphQLClient.setHeader("X-GQL-Token", "")

export const getUser = async (id: string) => {
  const query = gql`
    query {
      user(id: "${id}") {
        id
        username
      }
    }
  `
  const data = await graphQLClient.request(query)
  return data
}

export const gql_query = async (query: string, variables?: any) => {
  const data = await graphQLClient.request(query, variables)
  return data
}