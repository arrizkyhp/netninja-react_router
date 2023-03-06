import Button from '@/components/base/button';

import './Contact.css';

const Contact = () => (
  <div className="contact">
    <h3>Contact Us</h3>
    <form>
      <label htmlFor="email">
        <span>Your email:</span>
        <input type="email" name="email" required />
      </label>
      <label htmlFor="message">
        <span>Your message:</span>
        <textarea name="message" required />
      </label>
      <Button />
    </form>
  </div>
);

export default Contact;
