function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background decoration */}
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>
      <div className="glow glow-three"></div>

      <div className="grid-background"></div>

      <div className="floating-shape shape-one"></div>
      <div className="floating-shape shape-two"></div>
      <div className="floating-shape shape-three"></div>

      <div className="hero-content">

        <div className="availability">
          <span className="status-dot"></span>
          Available for opportunities
        </div>

        <p className="hero-intro">
          Hi, I'm
        </p>

        <h1>
          Kevali
          <span>Kanagale</span>
        </h1>

        <h2>
          <span className="gradient-text">MERN Stack Developer</span>
          <br />
          <span className="and">&amp;</span> DevOps Enthusiast
        </h2>

        <p className="hero-description">
          I build modern full-stack web applications and explore
          cloud, automation, containerization and deployment
          technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Work
            <span>↗</span>
          </a>

          <a href="#contact" className="secondary-btn">
            Let's Connect
          </a>
        </div>

        <div className="social-links">
          <a href="#" aria-label="GitHub">GH</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Email">@</a>
        </div>

      </div>

      <div className="scroll-indicator">
        <span></span>
        Scroll to explore
      </div>

    </section>
  );
}

export default Hero;