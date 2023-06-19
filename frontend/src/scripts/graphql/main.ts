import { gql_query } from "./index";

export const getInUser = async (id: string, fields: Array<any>) => {
  const query = `
    query {
      user(id: "${id}") {
        ${fields.join("\n")}
      }
    }
  `
  const data = await gql_query(query)
  return data
}

export const getInProject = async (id: string, fields: Array<any>) => {
  const query = `
    query {
      project(id: "${id}") {
        ${fields.join("\n")}
      }
    }
  `
  const data = await gql_query(query)
  return data
}

export const getAllTasksInProject = async (id: string, fields: Array<any>) => {
  const query = `
    query {
      project(id: "${id}") {
        tasks {
          ${fields.join("\n")}
          
          children {
            ${fields.join("\n")}
          }
        }
      }
    }
  `
  const data = await gql_query(query)
  return data
}