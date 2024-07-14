import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from './components/ListGroup';

function App() {
  return (
    <div className="container mt-4">
      <h1>List Group</h1>
      <ListGroup>
        <p>one</p>
        <p>two</p>
      </ListGroup>
    </div>
  );
}
export default App;
