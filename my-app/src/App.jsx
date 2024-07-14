import React from 'react';
import Alert from './components/Alert';

function App() {
  return  <div className="container mt-4">
  <h1>Alert Examples</h1>
    <Alert text="This is a primary alert!" type="primary" />
    <Alert text="This is a secondary alert!" type="secondary" />
    <Alert text="This is a success alert!" type="success" />
    <Alert text="This is a danger alert!" type="danger" />
    <Alert text="This is a warning alert!" type="warning" />
    <Alert text="This is an info alert!" type="info" />
    <Alert text="This is a light alert!" type="light" />
    <Alert text="This is a dark alert!" type="dark" />
</div>;
}

export default App;
