// apolloClient.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql', // Reemplaza con tu endpoint de GraphQL https://kprhmg14-3000.usw3.devtunnels.ms/
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
