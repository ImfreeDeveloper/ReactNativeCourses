import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import AppNavigator from './src/navigator/AppNavigator';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/exabstp6gzfn',
  cache: new InMemoryCache(),
  headers: {
    Authorization: 'Bearer QgxmaYatX0Yz6ULOlBD2hE-y6uzeVghJasOZ83l4qgs',
  },
});

const initialState = {
  action: 'closeMenu',
  name: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return {action: 'openMenu'};
    case 'CLOSE_MENU':
      return {action: 'closeMenu'};
    case 'UPDATE_NAME':
      return {name: action.name};
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </ApolloProvider>
);

export default App;
