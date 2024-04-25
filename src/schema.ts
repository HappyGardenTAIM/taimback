import {  PlantType, PrismaClient } from '@prisma/client';
import { GraphQLDateTime } from 'graphql-scalars';
interface ResolverContext {
  prisma: PrismaClient;
}

const resolvers = {
    DateTime: GraphQLDateTime,
  Query: {
    users: async (_, __, { prisma }: ResolverContext) => {
      return await prisma.user.findMany();
    },
    user: async (_, { id }, { prisma }: ResolverContext) => {
      return await prisma.user.findUnique({ where: { id } });
    },
    journeys: async (_, __, { prisma }: ResolverContext) => {
      return await prisma.journey.findMany();
    },
    journey: async (_, { id }, { prisma }: ResolverContext) => {
      return await prisma.journey.findUnique({ where: { id } });
    },
    journeyTypes: () => {
      return Object.values(PlantType);
    },
    plantList: async (_, __, { prisma }: ResolverContext) => { 
      return await prisma.plant.findMany();
    },
    plants: async (_, { type }, { prisma }: ResolverContext) => {
      let plants;
      if (type === 'SPROUT') {
        plants = await prisma.sprout.findMany({
          include: { plant: true }
        });
        return plants.map((sprout) => ({ ...sprout, __typename: 'Sprout' }));
      } else if (type === 'FOOD') {
        plants = await prisma.food.findMany({
          include: { plant: true }
        });
        return plants.map((food) => ({ ...food, __typename: 'Food' }));
      } else if (type === 'FLOWER') {
        plants = await prisma.flower.findMany({
          include: { plant: true }
        });
        return plants.map((flower) => ({ ...flower, __typename: 'Flower' }));
      } else {
        return [];
      }
    }    
  },
  
  Mutation: {
    createUser: async (_, { data }, { prisma }: ResolverContext) => {
      return await prisma.user.create({ data });
    },
    createJourney: async (_, { data }, { prisma }: ResolverContext) => {
      return await prisma.journey.create({ data });
    },
    createTask: async (_, { data }, { prisma }: ResolverContext) => {
      return await prisma.task.create({
        data: {
          lastDone: data.lastDone,
          journeyId: data.journeyId,
          taskDetailId: data.taskDetailId
        },
        include: { taskDetail: true, journey: true}
      })
    },
  },

  User: {
    journeys: async (parent, _, { prisma }: ResolverContext) => {
      return await prisma.user
        .findUnique({ where: { id: parent.id } })
        .journeys();
    },
  },

  Journey: {
    user: async (parent, _, { prisma }: ResolverContext) => {
      return await prisma.journey
        .findUnique({ where: { id: parent.id } })
        .user();
    },
    plant: async (parent, _, { prisma }: ResolverContext) => {
      return await prisma.journey
        .findUnique({ where: { id: parent.id } })
        .plant();
    },
    status: async (parent, _, { prisma }: ResolverContext) => {
      return (await prisma.journey
        .findUnique({ where: { id: parent.id } }))
        .status;
    },
    phase: async (parent, _, { prisma }: ResolverContext) => {
      return (await prisma.journey
        .findUnique({ where: { id: parent.id } }))
        .phase;
    },
    tasks: async (parent, _, { prisma }: ResolverContext) => {
      return await prisma.journey
        .findUnique({ where: { id: parent.id } })
        .tasks();
    },
    taskDetails: async (parent, _, { prisma }: ResolverContext) => {
      const journey = await prisma.journey.findUnique({
        where: { id: parent.id },
        include: { 
          plant: {
            include: {
              sprout: true,
              food: true,
              flower: true
            }
          }
        }
      });
      
      if (!journey) {
        throw new Error('Journey not found');
      }
      
      const type = parent.type;
      
      let typeTasksToAdd;
      if (type === 'SPROUT') {
        typeTasksToAdd = await prisma.sproutToTaskDetail.findMany({
          where: {sproutId: journey.plant.sprout.id}, 
          include: { taskDetail: true }});
          typeTasksToAdd = typeTasksToAdd.map(task => ({
            ...task,
            __typename: 'SproutToTaskDetail'
          }));
      } else if (type === 'FOOD') {  
        typeTasksToAdd = await prisma.foodToTaskDetail.findMany({
          where: {foodId: journey.plant.food.id}, 
          include: { taskDetail: true }});
          typeTasksToAdd = typeTasksToAdd.map(task => ({
            ...task,
            __typename: 'FoodToTaskDetail'
          }));
      } else if (type === 'FLOWER') {
        typeTasksToAdd = await prisma.flowerToTaskDetail.findMany({
          where: {flowerId: journey.plant.flower.id }, 
          include: { taskDetail: true }});
          typeTasksToAdd = typeTasksToAdd.map(task => ({
            ...task,
            __typename: 'FlowerToTaskDetail'
          }));
      } else {
        typeTasksToAdd = null;
      }
      
      return {
        plantTasks: prisma.plantToTaskDetail.findMany({ 
          where: { plantId: journey.plant.id },
          include: { taskDetail: true }
        }),
        typeTasks: typeTasksToAdd,
        doneTasks: prisma.journey
        .findUnique({ where: { id: parent.id } })
        .tasks({include: { taskDetail: true }})
      }
    },
  },
};

export default resolvers;