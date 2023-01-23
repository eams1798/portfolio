import './styles/PFContact.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { send } from 'emailjs-com';

const PFContact = () => {
  const [tC, ] = useTranslation("Contact");
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const submitMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    send(
      'service_o4c66ii',
      'template_ockc0he',
      toSend,
      'obUpiW6HUGkFkC9j6'
    ).then((response) => {
      alert(tC("success-message"));
    }).catch((err) => {
      alert(err);
    })
  }

  return (
    <div id="Contact" className="Contact-container">
      <h1 className="text-color2">{tC("contact")}</h1>
      <form onSubmit={submitMessage} className="Contact-form">
        <label htmlFor="reply_to" className="Contact-label text-color2">Email</label>
        <input
          type="email"
          id="reply_to"
          name="reply_to"
          className="Contact-input"
          placeholder="mail@example.com"
          required
          onChange={handleChange} />
        <label htmlFor="from_name" className="Contact-label text-color2">{tC("name")}</label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          className="Contact-input"
          placeholder={tC("name-placeholder") as string}
          required
          onChange={handleChange} />
        <label htmlFor="message" className="Contact-label text-color2">{tC("message")}</label>
        <textarea
          id="message"
          name="message"
          className="Contact-input"
          placeholder={tC("message-placeholder") as string}
          required
          onChange={handleChange} />
        <div className="Contact-button-container">
          <button className="Contact-button" type="submit">{tC("send")}</button>
        </div>
      </form>
    </div>
  );
}

export default PFContact;
