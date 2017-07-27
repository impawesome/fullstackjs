import React from 'react';

class CommentInput extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  onClick() {
    this.props.addComment(
      this.state.input
    );

    this.setState({
      input: ''
    });
  }

  render() {
    return (
      <div>
        <input onChange={ this.onChange } value={this.state.input}/>
        <button onClick={ this.onClick }>Add comment</button>
      </div>
    );
  }
}

export default CommentInput;
