// apolloClient.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql', // Reemplaza con tu endpoint de GraphQL
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
