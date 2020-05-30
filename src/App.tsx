import React from 'react';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/link-context";
import Sku from './sku';
import './App.css';

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(
    new HttpLink({
      uri: "/graphql",
    })
  ),
});

const App : React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Sku />
    </ApolloProvider>
  );
}

export default App;
