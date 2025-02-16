// apolloClient.ts
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createHttpLink } from '@apollo/client/link/http'
//import { createUploadLink } from 'apollo-upload-client'
//import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql', // Reemplaza con tu endpoint de GraphQL https://kprhmg14-3000.usw3.devtunnels.ms/
  credentials: 'include', // Envía cookies con cada solicitud
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});


// import { ApolloClient, InMemoryCache } from '@apollo/client'
// import { createUploadLink } from 'apollo-upload-client'

// // Configura el enlace para manejar cargas de archivos
// const uploadLink = createUploadLink({
//   uri: 'http://localhost:3000/graphql', // Reemplaza con tu endpoint de GraphQL https://kprhmg14-3000.usw3.devtunnels.ms/
//   credentials: 'include', // Envía cookies con cada solicitud
// });

// const apolloClient = new ApolloClient({
//   link: uploadLink, // Usa el uploadLink en lugar de createHttpLink
//   cache: new InMemoryCache(),
// });

// export default apolloClient;

