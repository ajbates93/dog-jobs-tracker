import { gql } from 'apollo-server'

const schema = gql(`
  type Query {
    allPosts: [Post]
    currentUser: User
    postsByUser(userId: String!): [Post]
  }

  type User {
    id: ID!
    username: String!
    fullName: String
    dateOfBirth: Date
    posts: [Post]
  }

  type Post {
    id: ID!
    content: String!
    date: Date!
    userId: ID!
  }

  scalar Date
`);

export { schema }