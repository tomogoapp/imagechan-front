// apolloClient.ts
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { createHttpLink } from '@apollo/client/link/http';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql', // Reemplaza con tu endpoint de GraphQL https://kprhmg14-3000.usw3.devtunnels.ms/
  credentials: 'include', // Envía cookies con cada solicitud
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
