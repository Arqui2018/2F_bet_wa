import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from "react-apollo";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache
} from "apollo-boost";
import Toolbar from './components/toolbar';

const client = new ApolloClient ({
  link: new HttpLink ({uri: "http://35.194.70.72:4000/graphql"}),
  cache: new InMemoryCache()
 });

const App =
<ApolloProvider client={client}>
  <Toolbar/>
  <Routes />
</ApolloProvider>

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
