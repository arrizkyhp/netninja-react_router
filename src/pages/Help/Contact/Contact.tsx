import { Form, redirect, useActionData } from 'react-router-dom';

import Button from '@/components/base/button';
import type { DataContactType } from '@/pages/Help/Contact/Contact.type';

import './Contact.css';

const Contact = () => {
  const data = useActionData() as DataContactType;

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label htmlFor="email">
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label htmlFor="message">
          <span>Your message:</span>
          <textarea name="message" required />
        </label>
        <Button />

        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
};

export const contactAction = async ({ request }: { request: Request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get('email'),
    message: data.get('message'),
  };

  if (!submission.message || submission.message.length < 10) {
    return { error: 'Message must be over 10 chars long.' };
  }

  return redirect('/');
};
export default Contact;
