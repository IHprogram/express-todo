import React, { useEffect, useState } from 'react';
import Form from './components/Form/Form.js';
import Todos from './components/Todos/Todos.js';

function App() {
  const [todo, setTodo] = useState('');

  useEffect(() => {
    // '/api'とは、'http://localhost:3001/api'と同じ
    try {
      fetch('/api')
        .then(res => res.json())
        .then(data => setTodo(data.todo));
    } catch (error) {
      console.log(error)
    }
  }, []);

  return (
    <div className="App">
      <Form />
      <Todos />
      {/* express-todoで「npm start」と、serverディレクトリで「nodemon index.js」を実行することでmessageを正常に表示できる */}
      <p>{todo}</p>
    </div>
  );
}

export default App;
