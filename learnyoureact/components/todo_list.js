import React from 'react';
import Todo from './todo';

class TodoList extends React.Component {
  render() {
    const todo = this.props.data.map((obj) => <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>)
    return (
      <div className="todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
