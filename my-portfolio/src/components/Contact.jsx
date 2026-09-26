function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow"></div>

      <div className="contact-content">
        <p className="section-label">// LET'S CONNECT</p>

        <h2>
          Have a project
          <span> in mind?</span>
        </h2>

        <p className="contact-description">
          I'm open to opportunities, collaborations and
          interesting projects. Let's build something
          meaningful together.
        </p>

        <a
          href="mailto:your-email@gmail.com"
          className="contact-email"
        >
          kevalikanagale16704@gmail.com
          <span>↗</span>
        </a>

        <div className="contact-links">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="#home">
            Back to top ↑
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;