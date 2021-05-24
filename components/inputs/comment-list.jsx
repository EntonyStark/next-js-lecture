/* eslint-disable no-underscore-dangle */
import { useState, useEffect, Fragment } from 'react';

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
      <li>
        {comments.map((el) => (
          <Fragment key={el._id}>
            <p>{el.text}</p>
            <div>
              By
              {' '}
              <address>{el.name}</address>
            </div>
          </Fragment>
        ))}
      </li>
    </ul>
  );
};
