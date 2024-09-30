const Contact = () => {
  return (
    <section className="section-contact" id="contact">
      <div className="section-title">
        <h2>
          Contact <span>us</span>
        </h2>
      </div>
      <div className="section-center contact-center">
        <form action="#" className="contact-form">
          <input
            type="text"
            placeholder="Name"
            required
            className="contact-inp"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="contact-inp"
          />
          <input
            type="tel"
            placeholder="Phone"
            required
            className="contact-inp"
          />
          <textarea
            placeholder="Message"
            required
            className="contact-inp"
          ></textarea>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
