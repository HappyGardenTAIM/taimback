import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar DateTime

  type User {
    id: Int!
    createdAt: DateTime!
    email: String!
    name: String
    role: Role!
    journeys: [Journey!]!
  }

  type Journey {
    id: Int!
    startedAt: DateTime!
    updatedAt: DateTime!
    user: User!
  }

  enum Role {
    USER
    ADMIN
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
    journeys: [Journey!]!
    journey(id: Int!): Journey
  }

  type Mutation {
    createUser(data: CreateUserInput!): User!
    createJourney(data: CreateJourneyInput!): Journey!
  }

  input CreateUserInput {
    email: String!
    name: String
    role: Role
  }

  input CreateJourneyInput {
    startedAt: DateTime!
    updatedAt: DateTime!
    userId: Int!
  }
`;

export default typeDefs;