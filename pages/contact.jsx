import { Layout } from 'components/layout';
import { ContactForm } from 'components/contact/contact-form';

export default function ContactPage() {
  return (
    <Layout head={(
      <>
        <title>Contact Me</title>
        <meta name="description" content="Contact me form" />
      </>
    )}
    >
      <ContactForm />
    </Layout>
  );
}
