import React from 'react';

const CommentList = ({ comments }) => (
  <div>
    {
      comments.map(comment =>
        <div>{ comment }</div>)
    }
  </div>
);

export default CommentList;
