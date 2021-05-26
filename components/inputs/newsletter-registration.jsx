import { useRef } from 'react';

import { useNotificationContext } from 'store/notification-context';

import classes from './newsletter-registration.module.css';

export const NewsletterRegistration = () => {
  const emailRef = useRef();

  const ctx = useNotificationContext();

  function registrationHandler(event) {
    event.preventDefault();

    ctx.showNotification({ title: 'Signing up...', message: 'Registering for newsletter', status: 'pending' });

    fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: emailRef.current.value }),
    })
      .then((r) => r.json())
      .then(() => ctx.showNotification({ title: 'Success', message: 'Successfully registered for newsletter', status: 'success' }))
      .catch(() => ctx.showNotification({ title: 'Fail', message: 'Something went wrong', status: 'error' }));
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
