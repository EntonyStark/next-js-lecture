import { createElement, useState, useEffect } from 'react';
import { FormContext, useField } from 'easy-ctx-form';
import { Notification } from 'components/notifications/notification';

import styles from './contact-form.module.css';

const sendData = async (v) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(v),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
};

const Input = ({
  name, value, type, id, label, as = 'input', ...rest
}) => {
  const { getInputProps, getMeta } = useField(name, { value, type });
  const { error, touched } = getMeta();

  return (
    <div className={styles.control}>
      <label htmlFor={id}>
        {label}
        {createElement(as, { ...getInputProps({ id, ...rest }) })}
      </label>
      {touched && error && <span>{error}</span>}
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.message) {
    errors.message = 'Required';
  }
  return errors;
};

export const ContactForm = () => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (notification && notification.status !== 'pending') {
      const timer = setInterval(() => setNotification(null), 3000);
      return () => clearInterval(timer);
    }
    return false;
  }, [notification]);

  const removeNotification = () => setNotification(null);

  const submit = async (v) => {
    setNotification({
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message its on a way.',
    });

    try {
      await sendData(v);
      setNotification({
        status: 'success',
        title: 'Success!',
        message: 'Message send successfully',
      });
    } catch (error) {
      setNotification({
        status: 'error',
        title: 'Error!',
        message: error.message,
      });
    }
  };
  return (
    <section className={styles.contact}>
      <h1>How can I help you ?</h1>

      <FormContext
        className={styles.form}
        validate={validate}
        onSubmit={submit}
        resetAfterSubmit
      >
        {() => (
          <>
            <div className={styles.controls}>
              <Input name="email" type="email" id="email" label="Your Email" />
              <Input name="name" id="name" label="Your Name" />
            </div>

            <Input name="message" id="message" label="Your Message" as="textarea" row="5" />

            <div className={styles.actions}>
              <button type="submit">Send Message</button>
            </div>
          </>
        )}
      </FormContext>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
          removeNotification={removeNotification}
        />
      )}
    </section>
  );
};
