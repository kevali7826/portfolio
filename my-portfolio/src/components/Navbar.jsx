function Navbar() {
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

      <a href="#contact" className="hire-btn">
        <span>&gt;</span> hire_me
      </a>
    </nav>
  );
}

export default Navbar;