import { PrismaClient } from '@prisma/client';
import { GraphQLDateTime } from 'graphql-scalars';

const prisma = new PrismaClient();

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
  },
};

export default resolvers;