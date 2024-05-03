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
    completedJourneys: [Journey!]
    inProgressJourneys: [Journey!]
  }

  type Journey {
    id: Int!
    startedAt: DateTime!
    updatedAt: DateTime!
    type: PlantType!  
    user: User!
    plant: Plant!
    status: JourneyStatus!
    phase: Phase!
    tasks: [Task]
    taskDetails: TaskDetails!
    endDate: DateTime
  }

  type Plant {
    id: Int!          
    name: String!
    image: String       
    minGrowthTime: Int!          
    maxGrowthTime: Int!          
    difficulty: Difficulty!   
    maintenance: String!         
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
    journey: Journey!
    status: TaskStatus
    lastDone: DateTime!
    taskDetail: TaskDetail!
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
  foods: [FoodToTaskDetail!]!
  tasks: [Task]
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
    taskDetalId: Int!
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

  type TaskDetails {
    plantTasks: [PlantToTaskDetail!]!
    typeTasks: [TypeTaskDetail]
    doneTasks: [Task]
  }

  union TypeTaskDetail = SproutToTaskDetail | FoodToTaskDetail | FlowerToTaskDetail
  
  type Query {
    users: [User!]!
    user(id: Int!): User
    journeys: [Journey!]!
    journey(id: Int!): Journey
    journeyTypes: [PlantType!]!
    plantList: [Plant!]!
    taskDetails: TaskDetails
    plants(type: PlantType!): [PlantUnion]!
  }

  union PlantUnion = Sprout | Food | Flower
 
  type Mutation {
    createUser(data: CreateUserInput!): User!
    createJourney(data: CreateJourneyInput!): Journey!
    createTask(data: CreateTaskInput!): Task!
    updateJourneyDate(data: UpdateJourneyDateInput!): Journey!
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
    PREP
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


  input CreateUserInput {
    # email: String
    name: String
    role: Role
  }

  input CreateJourneyInput {
    userId: Int!
    plantId: Int!
    type: PlantType!
  }

  input CreateTaskInput {
    journeyId: Int!
    lastDone: DateTime!
    taskDetailId: Int!
  }

  input UpdateJourneyDateInput {
    journeyId: Int!
    endDate: DateTime!
  }
`;

export default typeDefs;