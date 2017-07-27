import React from 'react';
import ReactDOM from 'react-dom';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends React.Component {
  constructor() {
    super();

    this.state = {
      comments: [
        'Comment1',
        'Comment2'
      ]
    }

    this.addComment = this.addComment.bind(this);
  }

  addComment(comment) {
    this.setState({
      comments: [
        ...this.state.comments,
        comment
      ],
    });
  }

  render() {
    return (
      <div>
        <CommentInput title="Add comment" addComment={this.addComment}/>
        <CommentList
          comments={ this.state.comments }
        />
      </div>
    )
  }
}

export default CommentApp;
