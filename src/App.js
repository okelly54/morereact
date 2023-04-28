import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cat from './components/Cat';
import Counter from './components/Counter';
import Converter from './components/Converter';
import Login from './components/Login';
import cats from './cats.json';
const App = () => {
  return (
    <>
    {cats.map(({id, name, age}) => <Cat key={id} name={name} age={age}/>
    )}

    <Counter/>


    </>
  );
}

export default App;