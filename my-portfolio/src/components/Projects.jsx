function Projects() {
  const projects = [
    {
      number: "01",
      category: "DEVOPS / CLOUD",
      title: "End-to-End CI/CD Pipeline",
      description:
        "Built an automated CI/CD pipeline to build, test, containerize and deploy an application using modern DevOps tools.",

      technologies: [
        "Docker",
        "Jenkins",
        "Kubernetes",
        "AWS",
        "Git"
      ],

      highlights: [
        "Automated build and deployment workflow",
        "Containerized application using Docker",
        "Configured Kubernetes deployment",
        "Integrated AWS for cloud deployment"
      ],

      github: "#",
      demo: "#"
    },

    {
      number: "02",
      category: "FULL-STACK / MERN",
      title: "Grillish Glow",
      description:
        "A full-stack e-commerce application built with the MERN stack featuring authentication, product management and REST API integration.",

      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "REST API"
      ],

      highlights: [
        "Built responsive React frontend",
        "Implemented REST APIs",
        "Added user authentication",
        "Created admin panel for product management"
      ],

      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="projects-section" id="projects">

      {/* Heading */}

      <div className="section-heading projects-heading">

        <p className="section-label">
          // SELECTED WORK
        </p>

        <h2>
          Things I've
          <span> built.</span>
        </h2>

        <p className="projects-intro">
          A selection of projects where I applied my
          development and DevOps skills to build
          practical solutions.
        </p>

      </div>


      {/* Projects */}

      <div className="projects-list">

        {projects.map((project) => (

          <article
            className="project-card"
            key={project.number}
          >

            {/* Project Header */}

            <div className="project-header">

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-category">
                {project.category}
              </div>

            </div>


            {/* Project Title */}

            <div className="project-main">

              <div className="project-title-area">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

              </div>


              {/* Project Buttons */}

              <div className="project-actions">

                <a
                  href={project.github}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href={project.demo}
                  className="project-demo"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>

              </div>

            </div>


            {/* Project Details */}

            <div className="project-details">

              <div className="project-highlights">

                <p className="details-label">
                  WHAT I BUILT
                </p>

                {project.highlights.map((highlight, index) => (

                  <div
                    className="highlight"
                    key={index}
                  >
                    <span>→</span>

                    <p>
                      {highlight}
                    </p>
                  </div>

                ))}

              </div>


              {/* Technologies */}

              <div className="project-technologies">

                <p className="details-label">
                  TECHNOLOGIES
                </p>

                <div className="tech-list">

                  {project.technologies.map((technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;