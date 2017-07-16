import React from 'react';
import ReactDom from 'react-dom';

import Todo from './components/todo';
import TodoForm from './components/todo_form';
import TodoList from './components/todo_list';

class App extends React.Component {
  render() {
    return <TodoForm />
  }
}

export default App;
