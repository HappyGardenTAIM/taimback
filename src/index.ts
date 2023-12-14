import { ApolloServer } from 'apollo-server';
import resolvers from './schema';
import typeDefs from './typeDefs';
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

const port = process.env.PORT || 4000;

const server = new ApolloServer({ resolvers, typeDefs, context: () => ({ prisma }) });

server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}`));