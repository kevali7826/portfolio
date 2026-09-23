function About() {
  return (
    <section className="about-section" id="about">

      <div className="section-heading">
        <p className="section-label">// ABOUT ME</p>

        <h2>
          Building things,
          <span> learning constantly.</span>
        </h2>
      </div>

      <div className="about-grid">

        {/* About Text */}
        <div className="about-content">

          <p className="about-intro">
            I'm a Computer Science graduate focused on
            full-stack development and DevOps.
          </p>

          <p>
            I enjoy building web applications using the MERN
            stack and exploring how applications can be
            containerized, automated and deployed using
            modern DevOps practices.
          </p>

          <p>
            My experience includes frontend development,
            REST API integration, CI/CD automation,
            Docker, Kubernetes and AWS.
          </p>

          <div className="about-buttons">
            <a href="#projects" className="about-btn">
              Explore my work ↗
            </a>

            <a href="#contact" className="about-link">
              Let's connect →
            </a>
          </div>

        </div>


        {/* Right Side */}
        <div className="about-card">

          <div className="card-top">
            <span>01</span>
            <span>PROFILE</span>
          </div>

          <div className="profile-icon">
            KK
          </div>

          <h3>Software Engineer</h3>

          <p>
            Full-Stack (MERN) & DevOps
          </p>

          <div className="profile-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>Docker</span>
            <span>AWS</span>
          </div>

        </div>

      </div>


      {/* Quick Stats */}

      <div className="about-stats">

        <div className="stat">
          <strong>2026</strong>
          <span>CS Graduate</span>
        </div>

        <div className="stat">
          <strong>MERN</strong>
          <span>Full-Stack</span>
        </div>

        <div className="stat">
          <strong>DevOps</strong>
          <span>Cloud & CI/CD</span>
        </div>

        <div className="stat">
          <strong>AWS</strong>
          <span>Cloud Platform</span>
        </div>

      </div>

    </section>
  );
}

export default About;