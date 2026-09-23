function Experience() {
  return (
    <section className="experience-section" id="experience">

      {/* Section Heading */}
      <div className="section-heading">
        <p className="section-label">// EXPERIENCE</p>

        <h2>
          Where I've
          <span> worked.</span>
        </h2>
      </div>


      {/* Experience Timeline */}
      <div className="experience-timeline">

        <div className="timeline-line"></div>

        <div className="experience-item">

          {/* Timeline Dot */}
          <div className="timeline-dot">
            <span></span>
          </div>


          {/* Date */}
          <div className="experience-date">
            JUL 2025 — OCT 2025
          </div>


          {/* Experience Card */}
          <div className="experience-card">

            <div className="experience-top">

              <div>
                <p className="experience-type">
                  INTERNSHIP
                </p>

                <h3>
                  Software Engineer Intern
                </h3>

                <h4>
                  Frontend Developer · Zenomyindex Pvt Ltd
                </h4>
              </div>

              <div className="experience-number">
                01
              </div>

            </div>


            <p className="experience-description">
              Worked as part of the frontend team to build
              responsive user interfaces and integrate
              REST APIs with web applications.
            </p>


            {/* Responsibilities */}
            <div className="experience-points">

              <div className="experience-point">
                <span>01</span>
                <p>
                  Developed responsive UI components using
                  HTML, CSS, JavaScript and React.
                </p>
              </div>

              <div className="experience-point">
                <span>02</span>
                <p>
                  Collaborated with backend developers to
                  integrate REST APIs and display dynamic data.
                </p>
              </div>

              <div className="experience-point">
                <span>03</span>
                <p>
                  Fixed UI bugs and improved responsiveness
                  across different devices.
                </p>
              </div>

              <div className="experience-point">
                <span>04</span>
                <p>
                  Participated in code reviews and daily
                  stand-ups while following Git workflows.
                </p>
              </div>

            </div>


            {/* Technologies */}
            <div className="experience-tech">

              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>REST API</span>
              <span>Git</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;