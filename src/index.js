import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { TOKEN } from "./variables"
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from "react-apollo";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache
} from "apollo-boost";
import Toolbar from './components/toolbar';

const client = new ApolloClient ({
  link: new HttpLink ({uri: "http://40.112.162.226/graphql"}),
  cache: new InMemoryCache()
 });

const token = localStorage.getItem(TOKEN);
const App =
<ApolloProvider client={client}>
  <Toolbar token={token}/>
  <Routes />
</ApolloProvider>

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
