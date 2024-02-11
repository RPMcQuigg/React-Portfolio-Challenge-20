import '../styles/Contact.css'

function Contact() {
  return (
    <div id="contact">
      <h2>Contact Me!</h2>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
      </form>
        <div>
      <form>
        <label>
          Message:
          <textarea></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default Contact;
