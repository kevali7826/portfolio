function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend",
      description: "Building responsive and interactive user interfaces.",
      skills: ["React", "JavaScript", "HTML", "CSS"]
    },

    {
      number: "02",
      title: "Backend",
      description: "Developing APIs and server-side applications.",
      skills: ["Node.js", "Express.js", "REST APIs"]
    },

    {
      number: "03",
      title: "Database",
      description: "Working with relational and NoSQL databases.",
      skills: ["MongoDB", "MySQL"]
    },

    {
      number: "04",
      title: "DevOps & Cloud",
      description: "Automating, containerizing and deploying applications.",
      skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "Linux", "Git"]
    }
  ];

  return (
    <section className="skills-section" id="skills">

      <div className="section-heading">
        <p className="section-label">// TECH STACK</p>

        <h2>
          Tools I use to
          <span> build & deploy.</span>
        </h2>
      </div>

      <div className="skills-grid">

        {skillGroups.map((group) => (
          <div className="skill-card" key={group.number}>

            <div className="skill-card-top">
              <span>{group.number}</span>
              <span>SKILLS</span>
            </div>

            <div className="skill-icon">
              {group.number}
            </div>

            <h3>{group.title}</h3>

            <p>{group.description}</p>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;