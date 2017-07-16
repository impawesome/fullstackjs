import React from 'react';
import TodoList from './todo_list';

class TodoForm extends React.Component {
  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList />
      <div className="todoForm">I am a TodoForm.</div>
      </div>
    );
  }
}

export default TodoForm;
