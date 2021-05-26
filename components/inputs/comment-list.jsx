/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';

import classes from './comment-list.module.css';

export const CommentList = ({ eventId }) => {
  const [comments, setComments] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetch(`/api/comment/${eventId}`)
      .then((r) => r.json())
      .then((r) => {
        setIsFetching(false);
        setComments(r.comments);
      });
  }, [eventId]);

  if (isFetching) {
    return (
      <div className={classes.comments}>
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <ul className={classes.comments}>
      {comments.map((el) => (
        <li key={el._id}>
          <p>{el.text}</p>
          <div>
            By
            {' '}
            <address>{el.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
};
