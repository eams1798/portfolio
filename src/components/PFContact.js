import './styles/PFContact.css'

const PFContact = () => {
  return (
    <div id="Contact" className="Contact-container">
      <h1>Contact</h1>
      <form className="Contact-form">
        <label htmlFor="email" className="Contact-label">Email</label>
        <input type="email" id="email" name="email" className="Contact-input" placeholder="mail@example.com" />
        <label htmlFor="name" className="Contact-label">Name</label>
        <input type="text" id="name" name="name" className="Contact-input" placeholder="put your name here" />
        <label htmlFor="message" className="Contact-label">Message</label>
        <textarea id="message" name="message" className="Contact-input" placeholder="put your message here" />
        {/* <input type="text" id="message" name="message" className="Contact-input" placeholder="put your message here" /> */}
        <div className="Contact-button-container">
          <button className="Contact-button" type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default PFContact;
