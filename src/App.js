import React from 'react';
import { GraphQL, GraphQLProvider } from 'graphql-react';
import './index.css';
import NavBar from './components/NavBar';
import RecordsList from './components/RecordsList';

const graphql = new GraphQL();

const App = ({ children }) => {
  return (
    <GraphQLProvider graphql={ graphql }>
      <div className='App'>
        <NavBar/>
        <div className='dashboard'>
          <RecordsList/>
        </div>
      </div>  
    </GraphQLProvider>
  );
}

export default App;