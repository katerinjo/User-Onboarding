import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import Form from './components/Form';

function App() {
  const [users, setUsers] = useState([]);

  function addUser({ name, email }) {
    setUsers([...users, {header: name, description: email}])
  }

  return (
    <div className="App">
      <Form subFun={addUser} />
      <Card.Group items={users} />
    </div>
  );
}

export default App;
