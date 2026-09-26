function Navbar() {

  const handleHireMe = () => {
    const subject =
      'Opportunity for Kevali Kanagale — [Role] @ [Company]';

    const body = `Hi Kevali,

I came across your portfolio and would like to talk about a role on your team. A few details so you can quickly decide whether it is a good fit:

Company: [Company]
Role title: [Role]
Level: [Intern / Fresher / Junior Developer]
Stack: [Tech Stack]
Location / Remote: [Location]
Compensation range: [Range]
JD link: [Job Description Link]
Best time for a call: [Time]

Looking forward to hearing from you.

Best regards,
[Your Name]
[Company]
[Contact Information]`;

    const mailtoLink =
      `mailto:kevalikanagale16704@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };


  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Kevali<span>.</span>Kanagale
      </a>

      <div className="nav-links">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <button onClick={handleHireMe} className="hire-btn">
        <span>&gt;</span> hire_me
      </button>
    </nav>
  );
}

export default Navbar;