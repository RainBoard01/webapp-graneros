import React from 'react';
import { GraphQL, GraphQLProvider } from 'graphql-react';
import './index.css';

import NavBar from './components/NavBar';
import RecordsList from './components/RecordsList';
import MainSection from './components/MainSection';
import InputRecord from './components/InputRecord';
import OptionsSection from './components/OptionsSection';

const graphql = new GraphQL();

const App = () => {
  return (
    <GraphQLProvider graphql={ graphql }>
      <div className='App'>
        <NavBar/>
        <div className='dashboard'>
          <MainSection/>
          <InputRecord/>
          <OptionsSection/>
          <RecordsList/>
        </div>
      </div>  
    </GraphQLProvider>
  );
}

export default App;