import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, createHttpLink, HttpLink, InMemoryCache,split } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

const link = createHttpLink({
  uri: 'https://swapi.apis.guru/'
});


const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});
ReactDOM.render(
  <>
      <BrowserRouter>
  <ApolloProvider client = {client}>
    <App />
  </ApolloProvider>
  </BrowserRouter>
  </>
  ,
  document.getElementById('root')
);

reportWebVitals();
