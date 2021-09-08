import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Person } from './components/Person';

const App: React.FC = () => {
  return (
    <Person name={"Christian"} age={31}/>
  );
}

export default App;
