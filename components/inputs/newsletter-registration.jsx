import { useRef } from 'react';
import classes from './newsletter-registration.module.css';

export const NewsletterRegistration = () => {
  const emailRef = useRef();
  function registrationHandler(event) {
    event.preventDefault();

    fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: emailRef.current.value }),
    }).then((r) => r.json()).then((r) => console.log('r', r));
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button type="submit">Register</button>
        </div>
      </form>
    </section>
  );
};
