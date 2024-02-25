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
    plantList: async (_, { type}, { prisma }: ResolverContext) => { 
      return await prisma.plant.findMany({
        where: { type },
        include: { sprout: true, food: true, flower: true},
      });
    },
  },

  Mutation: {
    createUser: async (_, { data }, { prisma }: ResolverContext) => {
      return await prisma.user.create({ data });
    },
    createJourney: async (_, { data }, { prisma }: ResolverContext) => {
      return await prisma.journey.create({ data });
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
  },
};

export default resolvers;