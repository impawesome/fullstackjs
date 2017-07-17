import React from 'react';
import ReactDom from 'react-dom';
import TodoForm from './components/todo_form';

class App extends React.Component {
  render() {
    const data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
    return <TodoForm data={this.props.data}/>
  }
}

export default App;
