import { useRef, useState } from 'react';

export default function Home() {
  const emailRef = useRef();
  const feedBackRef = useRef();

  const [fb, setFb] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({
        email: emailRef.current.value,
        text: feedBackRef.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((r) => r.json()).then((r) => setFb((ps) => ps.concat(r)));
  };

  const loadFeedbacks = () => {
    fetch('/api/feedback').then((r) => r.json()).then((r) => setFb(r.feedback));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">
            Your email address
            <input type="email" id="email" ref={emailRef} />
          </label>
        </div>
        <div>
          <label htmlFor="feedback">
            Your Feedback
            <textarea id="feedback" rows="5" ref={feedBackRef} />
          </label>
        </div>

        <button type="submit">Send feedback</button>
      </form>

      <hr />
      <button type="button" onClick={loadFeedbacks}>Load Feedbacks</button>

      <ul>
        {fb.map((e) => <li key={e.id}>{`${e.email} - ${e.text}`}</li>)}
      </ul>
    </div>
  );
}
