import React from 'react';
import DefinitionsList from './components/Definitions';

const definitions = [
  { dt: 'one', dd: 'two', id: 1 },
  { dt: 'another term', dd: 'another description', id: 2 },
  { dt: 'Coffee', dd: 'Black hot drink', id: 3 },
  { dt: 'Milk', dd: 'White cold drink', id: 4 }
];

function App() {
  return <DefinitionsList data={definitions} />;
}

export default App;
