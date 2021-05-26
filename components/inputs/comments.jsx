import { useState } from 'react';

import { useNotificationContext } from 'store/notification-context';
import { CommentList } from './comment-list';
import { NewComment } from './new-comment';

import classes from './comments.module.css';

export const Comments = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);

  const ctx = useNotificationContext();

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    ctx.showNotification({ title: 'Sending a comment', message: '', status: 'pending' });

    fetch(`/api/comment/${eventId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
      .then((r) => r.json())
      .then(() => ctx.showNotification({ title: 'Success', message: 'Comment added successfully', status: 'success' }))
      .catch(() => ctx.showNotification({ title: 'Fail', message: 'Something went wrong', status: 'error' }));
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
