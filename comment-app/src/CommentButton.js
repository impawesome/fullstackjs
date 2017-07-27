import React from 'react';

const CommentButton = ({ title, addComment }) =>
  <button onClick={ addComment }>{title}</button>

export default CommentButton;
