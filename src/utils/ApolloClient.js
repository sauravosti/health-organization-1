import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:10003/graphql",
  cache: new InMemoryCache(),
});

export default client;
