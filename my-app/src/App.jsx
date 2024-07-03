import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card title="hi" />
      <hr />
      <Card text="how are you?" />
      <hr />
      <Card title="hi" text="how are you?" />
      <hr />
    </div>
  );
}

export default App;
