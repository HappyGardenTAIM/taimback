import { ApolloServer } from 'apollo-server';
import resolvers from './schema';
import typeDefs from './typeDefs';

const port = process.env.PORT || 4000;

const server = new ApolloServer({ resolvers, typeDefs });

server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}`));