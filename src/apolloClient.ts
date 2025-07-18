import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const apolloClient = new ApolloClient({
  link: createUploadLink({
    uri: "http://localhost:3000/graphql",
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});

export default apolloClient;
