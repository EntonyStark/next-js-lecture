import { useState } from 'react';

import { CommentList } from './comment-list';
import { NewComment } from './new-comment';

import classes from './comments.module.css';

export const Comments = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    fetch(`/api/comment/${eventId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    }).then((r) => r.json()).then((r) => console.log('r', r));
  }

  return (
    <section className={classes.comments}>
      <button type="button" onClick={toggleCommentsHandler}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList eventId={eventId} />}
    </section>
  );
};

export default Comments;
