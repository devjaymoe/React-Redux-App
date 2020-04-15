import React from 'react';
import Form from './components/Form';
import CharacterCards from './components/CharacterCards';

import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty(mostly just rick...)</h1>
      <Form />
      <CharacterCards />
    </div>
  );
}

export default App;
