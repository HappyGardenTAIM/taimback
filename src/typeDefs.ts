import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar DateTime

  type User {
    id: Int!
    createdAt: DateTime!
    email: String
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
    journeyTasks: [JourneyTask!]!
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
    taskDetails: [PlantToTaskDetail!]!
  }

  type Sprout {
    id: Int!
    plant: Plant!
    sproutLength: Int!
    usage: String
    benefits: String
    taskDetails: [SproutToTaskDetail!]!
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
    taskDetails: [FoodToTaskDetail!]!
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
    taskDetails: [FlowerToTaskDetail!]!
  }

  type Task {
    id: Int!
    journeys: [Journey!]!
    taskType: TaskType!
    status: TaskStatus!
    lastDone: DateTime!
    taskDetail: TaskDetail
  }

  type TaskDetail {
  id: Int!
  picture: String
  description: String!
  taskType: TaskType!
  difficulty: Difficulty!
  phase: Phase!
  plants: [PlantToTaskDetail!]!
  sprouts: [SproutToTaskDetail!]!
  flowers: [FlowerToTaskDetail!]!
  tasks: [Task!]!
  foodToTaskDetails: [FoodToTaskDetail!]!
}

type JourneyTask {
  journey: Journey!
  journeyId: Int!
  task: Task!
  taskId: Int!
  status: TaskStatus!
  lastDone: DateTime!
}

type PlantToTaskDetail {
  plantId: Int!
  taskDetailId: Int!
  order: Int!
  plant: Plant!
  taskDetail: TaskDetail!
}

type SproutToTaskDetail {
  sproutId: Int!
  taskDetailId: Int!
  order: Int!
  sprout: Sprout!
  taskDetail: TaskDetail!
}

type FoodToTaskDetail {
  foodId: Int!
  taskDetailId: Int!
  order: Int!
  food: Food!
  taskDetail: TaskDetail!
}

type FlowerToTaskDetail {
  flowerId: Int!
  taskDetailId: Int!
  order: Int!
  flower: Flower!
  taskDetail: TaskDetail!
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
    # email: String
    name: String
    role: Role
  }

  input CreateJourneyInput {
    userId: Int!
    plantId: Int!
  }
`;

export default typeDefs;