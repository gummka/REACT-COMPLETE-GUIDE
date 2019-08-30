import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I m react app</h1>
      <Person />
    </div>
  );

  //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I\' m react app'));
}

export default App;
