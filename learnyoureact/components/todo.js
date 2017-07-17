import React from 'react';

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checked: false
    }
  }

  handleChange(event){
    this.setState(event.target.checked)
  }

  render() {
    return (
      <tr>
        <td style={style.tableContent}>
            <input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>
        </td>
        <td style={style.tableContent}>{ this.props.title }</td>
        <td style={style.tableContent}>{ this.props.children }</td>
      </tr>
    );
  }
}

Todo.propTypes = {
    title: React.PropTypes.string.isRequired
}

const style = {
    tableContent: {
        border: '1px solid black'
    }
}

export default Todo
