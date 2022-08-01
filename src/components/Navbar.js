const Navbar = ({ setIsNavOpen }) => {
  return (
    <>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={() => setIsNavOpen((prevState) => !prevState)}
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a
              href="#home"
              className="nav__link"
              onClick={() => setIsNavOpen(false)}
            >
              Home
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#services"
              className="nav__link"
              onClick={() => setIsNavOpen(false)}
            >
              My Skills
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#about"
              className="nav__link"
              onClick={() => setIsNavOpen(false)}
            >
              About me
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#projects"
              className="nav__link"
              onClick={() => setIsNavOpen(false)}
            >
              My Projects
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
