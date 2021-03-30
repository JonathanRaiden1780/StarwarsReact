import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, createHttpLink, HttpLink, InMemoryCache,split } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { AUTH_TOKEN } from './services/auth';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = createHttpLink({
  uri: 'https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/starwarsapp-gbqiq/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return (
      kind === 'OperationDefinition' &&
      operation === 'subscription'
    );
  },
  authLink.concat(httpLink)
);


const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});
ReactDOM.render(
  <BrowserRouter>
  <ApolloProvider client = {client}>
    <App />
  </ApolloProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

reportWebVitals();
