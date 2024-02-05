import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar DateTime

  type User {
    id: Int!
    createdAt: DateTime!
    email: String!
    name: String!
    role: Role!
    journeys: [Journey!]
  }

  type Journey {
    id: Int!
    startedAt: DateTime!
    updatedAt: DateTime!
    user: User!
    plant: Plant!
    status: JourneyStatus!
    phase: Phase!
    tasks: [Task!]!
  }

  type Plant {
    id: Int!          
    name: String!
    image: String       
    minGrowthTime: Int!          
    maxGrowthTime: Int!          
    difficulty: Difficulty!   
    maintenance: String!       
    type: PlantType!    
    sprout: Sprout      
    food: Food        
    flower: Flower      
    journeys: [Journey!]! 
  }

  type Sprout {
    id: Int!
    plant: Plant!
    sproutLength: Int!
    usage: String
    benefits: String
  }

  type Food {
    id: Int!
    plant: Plant!
    light: Light!
    watering: Int!
    harvesting: Int
    pruning: Int
    maturity: String!
    usage: String
    benefits: String
  }

  type Flower {
    id: Int!
    plant: Plant!
    light: Light!
    watering: Int!
    pruning: Int
    maturity: String!
    appearance: String!
    usage: String
  }

  type Task {
    id: Int!
    journeys: [Journey!]!
    taskType: TaskType!
    status: TaskStatus!
    lastDone: DateTime!
  }

  enum Role {
    USER
    ADMIN
  }

  enum JourneyStatus {
    ACTIVE
    FINISHED
    ABANDONED
  }

  enum Phase {
    PREP
    SOAKING
    GROWING
    HARVESTING
  }

  enum PlantType {
    SPROUT
    FOOD
    FLOWER
  }

  enum Difficulty {
    EASY
    MEDIUM
    HARD
  }

  enum Light {
    FULL_SUN
    PARTIAL_SUN
    SHADE
    INDIRECT_LIGHT
    LOW_LIGHT
  }

  enum TaskType {
    SOAK
    RINSE
    WATER
    FERTILIZE
    PRUNE
    HARVEST
    CHECK
  }

  enum TaskStatus {
    PENDING
    COMPLETED
    SKIPPED
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
    journeys: [Journey!]!
    journey(id: Int!): Journey
    journeyTypes: [PlantType!]!
    plantList(type: PlantType!): [Plant!]!
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