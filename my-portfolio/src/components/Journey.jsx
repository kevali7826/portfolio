function Journey() {
  const journey = [
    {
      year: "2026",
      title: "Computer Science Graduate",
      description:
        "Completed my Computer Science journey with a strong focus on software development, full-stack technologies and DevOps."
    },
    {
      year: "2025",
      title: "Software Engineer Intern",
      description:
        "Worked as a Frontend Developer at Zenomyindex Pvt Ltd, building responsive interfaces and integrating REST APIs."
    },
    {
      year: "2025",
      title: "Exploring DevOps",
      description:
        "Built hands-on experience with Docker, Jenkins, Kubernetes and AWS by creating an end-to-end CI/CD pipeline."
    },
    {
      year: "2024",
      title: "Full-Stack Development",
      description:
        "Started building full-stack applications using the MERN stack and developed projects focused on real-world use cases."
    }
  ];

  return (
    <section className="journey-section" id="journey">
      <div className="section-heading">
        <p className="section-label">// MY JOURNEY</p>

        <h2>
          Learning,
          <span> building & growing.</span>
        </h2>

        <p className="journey-intro">
          A timeline of my journey from learning software
          development to building full-stack applications
          and exploring DevOps.
        </p>
      </div>

      <div className="journey-list">
        {journey.map((item, index) => (
          <div className="journey-item" key={item.year + item.title}>
            <div className="journey-year">
              {item.year}
            </div>

            <div className="journey-marker">
              <span></span>
            </div>

            <div className="journey-content">
              <p className="journey-number">
                0{index + 1}
              </p>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;